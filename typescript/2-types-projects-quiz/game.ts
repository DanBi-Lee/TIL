/**
 * Let's make a game 🕹
 */

type Direction = 'up' | 'down' | 'left' | 'right';
type Position = {
    x : number;
    y : number;
};

class Game {
    position:Position = {x:0, y:0}
    move = (direction:Direction) => {
        let {position} = this;
        switch(direction){
            case 'up':
                position.y += 1;
                break;
            case 'down' :
                position.y -= 1;
                break;
            case 'right' :
                position.x += 1;
                break;
            case 'left' :
                position.x -= 1;
                break;
            default :
                throw new Error('정의되지 않은 방향');
        }
    }
}

const game = new Game;
const {position, move} = game;

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
