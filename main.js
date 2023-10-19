//learning
console.log("\u{1F600}")
let a;
a = 3;
console.log(a);
let c = "hello ";
let b=`${c} bill`;
console.log(b);
console.log(0 != null );
console.log(({x:1,y:2}).toString())
console.log(({x:1,y:2}).toString())

//面向对象
let obj;
obj = {
    name: "simple",
    age: "20",
    email : "sime@mail.com",
    contact: {
        phone: "1234567",
        size: 70,
    }
};
class Star {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing(song) {
        console.log(this.name + song);
    }
}
    var lq = new Star('刘谦',19);
    var ch = new Star('陈赫',30);

    console.log(lq);
    console.log(ch);
    lq.sing('：我唱的是3');
    ch.sing('：我唱的是6');

    //继承

class Father{
    constructor(x,y) {
        console.log('我姓陈');
        this.x=x;
            this.y=y;

    }
    sum(){
        console.log(this.x+this.y);
    }
    money(){
        console.log(100);
    }
}
    class Son extends Father{
        constructor(x,y) {
            super(x,y);

        }

    }
    var son = new Son();
    var son = new Son(1,2);

son.money();
son.sum();

//数组

let arr1 = [1,2,3];
let arr2 = [1,2,arr1];
console.log(arr2);
let arr3 = [1, ...arr1,...arr2];
console.log(arr3);


let arr5 = [1,2,3,4,5,6,7,8];
    arr5.splice(4);
    console.log(arr5);
    arr5.splice(1,2);
    console.log(arr5);
    arr5.splice(1,1);
    console.log(arr5);
    arr5.splice(1,0,"a","b");
    console.log(arr5);




