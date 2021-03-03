pragma solidity >=0.7.0 <0.8.0;

//2% dev fee

contract SC2Miner {
    
    uint256 public CEO_FEE = 25;
    
    uint256 public lastPrice = 2000000000000000000;
    uint public miningSpeed = 200;
    
    uint256 public MINERALS_PER=86400;

    uint256 PSN=10000;
    uint256 PSNH=5000;
    
    bool public activated=false;
    address payable public ceoAddress;
    uint public ceoEtherBalance;
    
    mapping (address => uint256) public selfLevel;
    mapping (address => uint256) public workers;
    mapping (address => uint256) public muels;
    
    mapping (address => uint256) public userMineRate;
    
    mapping (address => bool) public cashedOut;
    
    mapping (address => uint256) public userReferredMinerals;
    mapping (address => uint256) public lastBatch;
    mapping (address => address) public referrals;
    
    uint256 public marketMinerals;
    uint256 public contractStarted;
    
    constructor() public {
        ceoAddress = msg.sender;
    }
    
    
    function withdrawAdminMoney(uint percentage) public {
        require(msg.sender == ceoAddress);
        require(percentage <= 100);
        require(percentage > 0);
        require(ceoEtherBalance > 0);
        
        uint256 myBalance = calculatePercentage(ceoEtherBalance, percentage);
        ceoEtherBalance = ceoEtherBalance - myBalance;
        ceoAddress.transfer(myBalance);
    }
    
    
    
    function seedMarket() public payable {
        require(marketMinerals == 0);
        activated = true;
        marketMinerals = 8640000000;
        contractStarted = block.timestamp;
    }
    
    function getMyEggs() public view returns(uint256) {
        return SafeMath.add(userReferredMinerals[msg.sender], getEggsSincelastBatch(msg.sender));
    }
    
    function getEggsSincelastBatch(address adr) public view returns(uint256){
        uint256 secondsPassed=min(MINERALS_PER,SafeMath.sub(block.timestamp,lastBatch[adr]));

        uint256 dragonCount = SafeMath.mul(selfLevel[adr], 10);
        dragonCount = SafeMath.add(SafeMath.mul(muels[adr], 25), dragonCount);
        dragonCount = SafeMath.add(dragonCount, workers[adr]);
        return SafeMath.mul(secondsPassed, dragonCount);
    }
    
    function min(uint256 a, uint256 b) private pure returns (uint256) {
        return a < b ? a : b;
    }
    
    function getBalance() public view returns(uint256){
        return address(this).balance;
    }
    
    function getMyworkers() public view returns(uint256) {
        return workers[msg.sender];
    }
    
    function getMyIceDragon() public view returns(uint256) {
        return selfLevel[msg.sender];
    }
    
    function getMymuels() public view returns(uint256) {
        return muels[msg.sender];
    }
    
    // 10 eggs per hour
    function getEggsToHatchDragon() public view returns (uint) {
        uint256 timeSpent = SafeMath.sub(block.timestamp, contractStarted); 
        timeSpent = SafeMath.div(timeSpent, 3600);
        return SafeMath.mul(timeSpent, 10);
    }
    
    function calculatePercentage(uint256 amount, uint percentage) public pure returns(uint256) {
        return SafeMath.div(SafeMath.mul(amount,percentage), 100);
    }
    
    function getDragonsToBuy(uint256 eth, uint256 multiplier) internal returns(uint256) {
        require(activated);
        
        if (lastBatch[msg.sender] == 0) {
            lastBatch[msg.sender] = block.timestamp;
        }
        
        uint mineralsBought = SafeMath.div(calculateEggBuy(msg.value, SafeMath.sub(SafeMath.sub(address(this).balance, ceoEtherBalance), msg.value)), multiplier);
        mineralsBought=SafeMath.sub(mineralsBought,devFee(mineralsBought));

        require(mineralsBought > 0);
        
        ceoEtherBalance += calculatePercentage(msg.value, CEO_FEE);
        moreWorkers(msg.sender);
        return mineralsBought;
    }
    
    
    function devFee(uint256 amount) public view returns(uint256) {
        return SafeMath.div(SafeMath.mul(amount,CEO_FEE),100);
    }
    
    function buyPremiumDrangon() public payable {
        uint dragons = getDragonsToBuy(msg.value, 1);
        workers[msg.sender] += dragons;
    }
    
    function buyIceDrangon() public payable {
        uint dragons = getDragonsToBuy(msg.value, 8);
        selfLevel[msg.sender] += dragons;
    }
    
    function buyUltraDrangon() public payable {
        require(activated);
        uint dragons = getDragonsToBuy(msg.value, 20);
        muels[msg.sender] += dragons;
    }
    
    function moreWorkers(address ref) public {
        require(activated);
        
        if (ref != msg.sender ) {
            referrals[msg.sender] = ref;
        }
        
        uint256 eggsProduced = getMyEggs();
        uint256 newDragon = SafeMath.div(eggsProduced, MINERALS_PER);
        newDragon = SafeMath.div(eggsProduced, MINERALS_PER);
        workers[msg.sender] = SafeMath.add(workers[msg.sender], newDragon);
        lastBatch[msg.sender]=block.timestamp;
        
        
         userReferredMinerals[msg.sender] = 0; 
        
        //send referral eggs
        userReferredMinerals[referrals[msg.sender]]=SafeMath.add(userReferredMinerals[referrals[msg.sender]],SafeMath.div(eggsProduced,10));
        
        //boost market to nerf Dragon hoarding
        marketMinerals=SafeMath.add(marketMinerals,SafeMath.div(newDragon,10));
    }
    
    function sellEggs() public {
        require(activated);
        uint256 hasEggs = SafeMath.div(getMyEggs(), MINERALS_PER);
        uint256 ethValue = calculateEggSell(hasEggs);
        uint256 fee = calculatePercentage(ethValue, CEO_FEE);
        userReferredMinerals[msg.sender] = 0;
        lastBatch[msg.sender]=block.timestamp;
        marketMinerals=SafeMath.add(marketMinerals, hasEggs);
        ceoEtherBalance += fee;
        require(address(this).balance > ceoEtherBalance);
        msg.sender.transfer(SafeMath.sub(ethValue,fee));
    }
    
    //magic trade balancing algorithm
    function calculateTrade(uint256 rt,uint256 rs, uint256 bs) public view returns(uint256){
        return SafeMath.div(SafeMath.mul(PSN,bs),SafeMath.add(PSNH,SafeMath.div(SafeMath.add(SafeMath.mul(PSN,rs),SafeMath.mul(PSNH,rt)),rt)));
    }
    
    function calculateEggSell(uint256 eggs) public view returns(uint256){
        return calculateEggSell(eggs, SafeMath.sub(address(this).balance, ceoEtherBalance));
    }
    
    function calculateEggSell(uint256 eggs, uint256 eth) public view returns(uint256){
        return calculateTrade(eggs, marketMinerals, eth);
    }
    
    
    function calculateEggBuy(uint256 eth, uint256 contractBalance) public view returns(uint256){
        return calculateTrade(eth, contractBalance, marketMinerals);
    }
    
    function calculateEggBuy(uint256 eth) public view returns(uint256) {
        return calculateEggBuy(eth, SafeMath.sub(address(this).balance, ceoEtherBalance));
    }
}

library SafeMath {

  /**
  * @dev Multiplies two numbers, throws on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  /**
  * @dev Integer division of two numbers, truncating the quotient.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  /**
  * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  /**
  * @dev Adds two numbers, throws on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}