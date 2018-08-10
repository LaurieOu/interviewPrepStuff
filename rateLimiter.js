class Bucket {
  constructor(maxAmount, refillTime, refillAmount){
    this.maxAmount = maxAmount;
    //refillTime in minutes
    this.refillTime = refillTime;
    this.refillAmount = refillAmount;
    this.reset(maxAmount);
  }

  reset(maxAmount) {
    this.currAmount = maxAmount;
    this.lastUpdate = new Date().getTime();
    console.log("lastUpdate on init", this.lastUpdate);
  }

  refillCount(){
    let currTime = new Date().getTime();
    console.log("currTime - this.lastUpdate", currTime - this.lastUpdate);
    let count = (currTime - this.lastUpdate) / this.refillTime;
    return Math.floor(count);
  }

  get(){
    return Math.min(this.maxAmount, this.currAmount + (this.refillCount() * this.refillAmount));
  }

  reduce(tokens){
    let refillCount = this.refillCount();
    this.currAmount += refillCount * this.refillAmount;
    this.lastUpdate += refillCount * this.refillTime;

    if(this.currAmount > this.maxAmount) this.reset();
    if(tokens > this.currAmount) return false;

    this.currAmount -= tokens;
    return true;
  }
}

let lauriesbucket = new Bucket(3,2000,1);
lauriesbucket.reduce(3);
lauriesbucket.currAmount = 10;
console.log("currAmount", lauriesbucket.currAmount)

setTimeout( () => {
  console.log("currAmount", lauriesbucket.get());
  // console.log("refill count",lauriesbucket.refillCount());
}, 1000)

// setTimeout(function(){ alert("Hello"); }, 3000);

// console.log(lauriesbucket.lastUpdate)
