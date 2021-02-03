/*
 * Q. 이미 구현된 자료구조(ex. 배열)을 사용하지 않고 Stack 만들기!
    hint. 단일 연결 리스트 사용
 */

 interface Stack {
    readonly size : number;
    push(value:string):void;
    pop(): string;
 }

 type StackNode = {
    readonly value : string;
    readonly next?: StackNode;
 }

 class StackImpl implements Stack {
    constructor(private capacity:number) {
    }
    
    private _size: number = 0;
    private head? : StackNode;

    get size(){
        return this._size;
    }

     push(value: string): void {
         if(this.size === this.capacity){
            throw new Error('Stack is full!');
         }

         const node: StackNode = {
             value,
             next : this.head
         };
         this.head = node;
         this._size++;
     }

     pop(): string {
         if(this.head == null){ // null == undefined, null !== undefined
             throw new Error('Stack is empty!');
         }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
     }
 }

 const stack = new StackImpl(10);
 stack.push('Ellie 1');
 stack.push('Bob 2');
 stack.push('STeve 3');
 console.log(stack);
 while(stack.size !== 0){
     console.log(stack.pop());
 }