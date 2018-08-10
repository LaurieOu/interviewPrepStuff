class BinaryHeap {
  constructor(compareFunc){
    this.compareFunc = compareFunc
    this.heap = [];
  }

  swap(i1, i2){
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }

  bubbleUp(i){
    if(i < 0) return;
    const pIdx = Math.ceil(i/2) - 1;
    const child = this.heap[i];
    const parent = this.heap[pIdx];
    const compare = this.compareFunc(child, parent);
    if(compare){
      this.swap(pIdx, i);
    }
    this.bubbleUp(pIdx);
  }

  bubbleDown(i){
    if(i > this.heap.length) return;
    let swapIdx;
    const parent = this.heap[i];

    const child1Idx = (2*i)+1;
    const child1 = this.heap[child1Idx];
    if(this.compareFunc(child1,parent)){
      swapIdx = child1Idx;
    }

    const child2Idx = (2*i)+2;
    const child2 = this.heap[child2Idx];
    if(this.compareFunc(child2,parent) && this.compareFunc(child2, child1)){
      swapIdx = child2Idx;
    }

    if(swapIdx) {
      this.swap(i, swapIdx);
      this.bubbleDown(swapIdx);
    }
  }

  //add to the bottom then bubbleUp
  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length-1);
    console.log("this.heap", this.heap);
    return this.heap;
  }

  //remove from the top by switch last and first elements, then bubbleDown
  pop() {
    const lastIdx = this.heap.length - 1;
    const firstIdx = 0;
    this.swap(firstIdx, lastIdx);
    this.heap.pop();
    this.bubbleDown(firstIdx);
    console.log("this.heap", this.heap);
    return this.heap;
  }


}

const bHeap = new BinaryHeap((a,b) => a  > b);
let arr = [2, 3, 5, 4, 8, 7, 6];
arr.forEach((num) => {
  bHeap.push(num);
})

// resoures:
// https://github.com/streamrail/heap
// http://eloquentjavascript.net/1st_edition/appendix2.html
