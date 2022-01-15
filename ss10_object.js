console.log("Hello, World!");

const arr = [1, 2, 3, 4, 5];

// object: key và value ( khóa và giá trị)
// cú pháp
// {<key1>: <value1>
/* <key2>: <value2>} */

function sayHello(){
    console.log("Hello, world!");
}

const obj = {
    age: 20,
    name: "mindx",
    age: 21,
    1:2, 
    tags: [ "education", "silicon valley"],
    isChecked: true,
    address:{
    city: "Hanoi",
    distric: "Dong Da",
    street: "Nguyen Chi Thanh",
    },
   
    sayHello: function() {
     console.log("sayHello, world!"); }, //anonymous function: hàm ẩn danh 
};


console.log(typeof obj);
console.log(typeof []);


console.log(obj);

// lấy gtrị theo key: 
 // cách 1: dot notation: dấu "chấm". obj(.name): là tên giá trtị muốn lấy

console.log(obj.name);
console.log(obj.address.city);

// Cách 2: bracket notation: dấu "ngoặc vuông" [] trong [ là number hoặc "string"]


console.log(obj[1]);
console.log(obj["age"]);

// nếu key k tồn tại . sẽ có lỗi undifined

console.log(obj.email);

obj.sayHello();
obj["sayHello"]();


console.log(Object.keys(obj));// lấy toàn key
console.log(Object.values(obj));//lấy toàn bộ value
console.log(Object.entries(obj));//lấy theo cặp

for (let i=0; i < Object.keys(obj)/length; i++){}
//for ... inlặp qua tất cả các key trong obj 
for(let key in obj) {
    console.log(key);
    console.log(obj[key])
}

// string, number, boolean, null, undefined( primitive Datatype: kiểu dữ liệu nguyên thủy)
// Object( Reference Datatype- kiểu dữ liệu tham chiếu)

 let x= 0;
 let y=0;
 console.log(x===y);
x=1;
console.log(y=1)

let foo = {};
let bar = {};
console.log( foo=== bar);//F
let baz= foo;
console.log(foo===baz);//T
foo.name = "mindx";
console.log(baz);



function sayHello(a){
    a.age=12
}
sayHello(foo)



