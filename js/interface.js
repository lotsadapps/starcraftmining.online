abi = [{"inputs":[],"name":"buyIceDrangon","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPremiumDrangon","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyUltraDrangon","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"moreWorkers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedMarket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"sellEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"percentage","type":"uint256"}],"name":"withdrawAdminMoney","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"},{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"percentage","type":"uint256"}],"name":"calculatePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"rt","type":"uint256"},{"internalType":"uint256","name":"rs","type":"uint256"},{"internalType":"uint256","name":"bs","type":"uint256"}],"name":"calculateTrade","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"cashedOut","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CEO_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ceoAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ceoEtherBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractStarted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"devFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getEggsSincelastBatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEggsToHatchDragon","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyIceDragon","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMymuels","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyworkers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastBatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketMinerals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINERALS_PER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"miningSpeed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"muels","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"selfLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userMineRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userReferredMinerals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"workers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

var _marketMinerals = 0;
var _myselfLevel = 0;
var _mymuelss = 0;
var _myEggs = 0;
var _normalDragonPrice = 0;
var _workers = 0;
var _balance = 0;

async function initContract() {
  if (!this.contract) {
    this.contract = await new web3.eth.Contract(abi, "0x83c9fDCdE67E80B282b641A2147b3AA848a13b8F");
  }

  return this.contract;
}

async function populateUserAddress() {
  const accounts = await web3.eth.getAccounts();
  this.userAddress = accounts[0];
}

function getmarketMinerals() {
  this.contract.methods.marketMinerals().call({ from: this.userAddress }).then((result, err) => {
    if (!err) {
      _marketMinerals = result;
    }
  });
}

function getMyworkers() {
  this.contract.methods.workers(this.userAddress).call({ from: this.userAddress }).then((result, err) => {
    if (!err) {
    //   console.log("My premium Dragon ", result);
      _workers = result/eggstohatch1;
    }
  });
}

function getMymuels() {
	this.contract.methods.getMymuels().call({ from: this.userAddress }).then((result, err) => {
	  if (!err) {
		// console.log("My Ultra Dragon ", result);
		_mymuelss = result/eggstohatch1;
	  }
	});
  }

function getMyIceDragon() {
  this.contract.methods.getMyIceDragon().call({ from: this.userAddress }).then((result, err) => {
    if (!err) {
    //   console.log("My Ice Dragon ", result);
      _myselfLevel = result/eggstohatch1;
    }
  });
}

function lastBatch(callback){
  this.contract.methods.lastBatch(this.userAddress).call({from:this.userAddress}).then(result => {
      callback(result);
  }).catch((err) => {
      console.log(err)
  });
}

function getMyEggs() {
  this.contract.methods.getMyEggs().call({ from: this.userAddress }).then((result, err) => {
    // console.log(result);
    if (!err) {
    //   console.log("My eggs ", result);
			_myEggs = result/eggstohatch1;
    }
  });
}

function getNumberOfDragons(eth, callback) {
  this.contract.methods.calculateEggBuy(String(eth)).call({ from: this.userAddress }).then((result, err) => {
    if (!err) {
    //   console.log(result);
      callback(result);
    }
  });
}

function getDragonSellPrice(eggs, callback) {
  if (eggs == 0) return;
  this.contract.methods.calculateEggSell(String(parseInt(eggs))).call({ from: this.userAddress }).then((result, err) => {
    if (!err) {
	//   console.log("sell price ", web3.utils.fromWei(result, "ether"));
	  callback(web3.utils.fromWei(result, "ether"));
    }
  });
}



/////////////////////////////

function throwError() {
  var x = document.getElementById("snackbar");
  x.children[1].innerHTML = "Unable to complete operation.";
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function isUndefined(obj) {
  if (typeof obj == 'undefined') {
    throwError();
    return true;
  }
  return false;
}


function buyPremiumDragon(eth, callback) {
  this.contract.methods.buyPremiumDrangon().send({ value: eth, from: this.userAddress }).then((result, err) => {
    if (!err) {
    //   console.log('Got paid Dragon');
      callback();
    } else {
      throwError();
      displayTransactionErrorMessage()

    }
  }).catch(() => displayTransactionErrorMessage());
  displayTransactionSubmittedMessage();
}

function buyIceDragon(eth, callback) {
  this.contract.methods.buyIceDrangon().send({ value: eth, from: this.userAddress }).then((result, err) => {
    if (!err) {
    //   console.log('Got Ice Dragon ', eth);
      callback();
    } else {
      throwError();
      displayTransactionErrorMessage
    }
  }).catch(() => displayTransactionErrorMessage());;
  displayTransactionSubmittedMessage();
}

function buymuels(eth, callback) {
	this.contract.methods.buyUltraDrangon().send({ value: eth, from: this.userAddress }).then((result, err) => {
	  if (!err) {
		// console.log('Got Ultra Dragon ', eth);
		callback();
	  } else {
      throwError();
      displayTransactionErrorMessage()
    }
	}).catch(() => displayTransactionErrorMessage());;

  displayTransactionSubmittedMessage();
  }

function moreWorkers(ref, callback) {
  this.contract.methods.moreWorkers(ref ? ref : this.userAddress).send({ from: this.userAddress }).then((result, err) => {
    if (!err) {
      callback();
    } else {
      throwError();
      displayTransactionErrorMessage()
    }
  }).catch(() => displayTransactionErrorMessage());;
  displayTransactionSubmittedMessage
}

function sellEggs(callback) {
  this.contract.methods.sellEggs().send({ from: this.userAddress }).then((result, err) => {
    if (!err) {
      callback();
    } else {
      throwError();
      displayTransactionErrorMessage()
    }
  }).catch(() => displayTransactionErrorMessage());;

  displayTransactionSubmittedMessage()
}


function getBalance() {
  this.contract.methods.getBalance().call().then((result, err) => {
    // console.log(typeof result)
    if (!err) {
    //   console.log(result);
      _balance = parseFloat(result);
    } else throwError();
  });
}
