/*
 * Q. Stack을 활용성 높게 만들기 (여러 타입을 받아서!)
 */

 interface Stack<T> {
    readonly size : number;
    push(value:T):void;
    pop(): T;
 }

 type StackNode<T> = {
    readonly value : T;
    readonly next?: StackNode<T>;
 }

 class StackImpl<T> implements Stack<T> {
    constructor(private capacity:number) {
    }
    
    private _size: number = 0;
    private head? : StackNode<T>;

    get size(){
        return this._size;
    }

     push(value: T): void {
         if(this.size === this.capacity){
            throw new Error('Stack is full!');
         }

         const node = {
             value,
             next : this.head
         };
         this.head = node;
         this._size++;
     }

     pop(): T {
         if(this.head == null){ 
             throw new Error('Stack is empty!');
         }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
     }
 }

 const stack = new StackImpl<string>(10);
 stack.push('Ellie 1');
 stack.push('test 2');
 stack.push('test2 3');
//  console.log(stack);
 while(stack.size !== 0){
     console.log(stack.pop());
 }

 const stack2 = new StackImpl<number>(10);
 stack2.push(123);
 stack2.push(456);
 stack2.push(789);
//  console.log(stack);
 while(stack2.size !== 0){
     console.log(stack2.pop());
 }