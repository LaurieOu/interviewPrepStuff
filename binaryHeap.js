function BinaryHeap(scoreFunction) {
  this.heap = [];
  this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {
  push: function(element){
    this.heap.push(element);
    this.bubbleUp(this.heap.length-1);
  },
  pop: function() {
    let head = this.heap[0];
    let tail = this.heap.pop();
    if(this.content.length > 0){
      this.heap[0] = tail;
      this.sinkDown(0);
    }
    return head;
  },
  remove: function(node){

  },
  bubbleUp: function(n){
    let newEl = this.heap[n];

    while(n > 0){
      let pIdx = Math.ceil(n / 2) - 1;
      let parent = this.heap[pIdx];
      let curr = this.heap[n];

      if(parent < curr) break;
      this.heap[pIdx] = curr;
      this.heap[n] = parent;
      n = pIdx;
    }
  },
  sinkDown: function(n){
    let length = this.heap.length;
    while(n < this.heap.length){
        let el = this.heap[n];
        let cIdx = (2 * n) + 1;
        let swap;
        if(cIdx < length) {
          let child1 = this.heap[cIdx];
          if(child1 < el){
            swap = cIdx
          }
        }
        if((cIdx+1) < length) {
          let child2 = this.heap[cIdx+1];
          if(child2 < el){
            swap = cIdx + 1;
          }
        }
        if(swap === null) break;
        this.heap[n] = this.heap[swap];
        this.heap[swap] = el;
        n = swap;
    }

  }


}
