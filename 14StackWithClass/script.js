class Stack {
  item = [];
  currenSize;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.currenSize = this.item.length;
  }
  push(newVal) {
    if (this.currenSize >= this.maxSize) {
      alert("Stack is full");
    } else {
      this.item[this.currenSize] = newVal;
      this.currenSize++;
    }
  }
  pop() {
    if (this.currenSize > 0) {
      this.currenSize--;
      this.item.length = this.currenSize;
    } else {
      alert("stack is already empty");
    }
  }
  display() {
    console.log(this.item);
  }
}

st1 = new Stack(5);
st1.push(20);
st1.display();
