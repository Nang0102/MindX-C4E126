BTVN:

// Cho arrays contacts và function lookUpProfile như bên dưới. Mọi người viết code vào trong hàm lookUpProfile để thỏa mãn các yêu cầu sau
// a) Gọi hàm lookUpProfile("Tong", "lastName") thì output sẽ là "Vo"
// b) Gọi hàm lookUpProfile("Trong", "likes") thì output sẽ là array ["Beer", "King Crab"]
// c) Gọi hàm lookUpProfile("Yen", "number") thì output sẽ là "Không tồn tại thông tin trên" vì Yen không có trong Object contacts
// d) Gọi hàm lookUpProfile("Son", "address") thì output sẽ là "Không có thuộc tính trên"
// // Setup
 contacts = [
  {
    firstName: "Van",
    lastName: "Nguyen",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Pho"],
  },
  {
    firstName: "Son",
    lastName: "Trinh",
    number: "0994372684",
    likes: ["Cheese", "Donut", "Apple"],
  },
  {
    firstName: "Trong",
    lastName: "Le",
    number: "0487345643",
    likes: ["Beer", "King Crab"],
  },
  {
    firstName: "Tong",
    lastName: "Vo",
    number: "unknown",
    likes: ["Tiger", "Sword", "Wine"],
  },
];


// bài a:
// lookUpProfile("Tong", "lastName")
// function lookUpProfile(checkValue, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i]["firstName"] == checkValue) {
//       console.log(contacts[i][prop]);
//     }
//   }
// }

// bài b:

// lookUpProfile("Trong", "likes")
// function lookUpProfile(checkValue, prop) {
//     for (let i=0; i<contacts.length; i++){
//         if(contacts[i]["firstName"]== checkValue){
//             console.log(contacts[i][prop]);
//         }
//     }
//}


// bài c
 

// function lookUpProfile(name, number) {
//   let i = 0;
//   for (i = 0; i < contacts.length; i++) {
//     if (contacts[i]["firstName"] == name) {
//        console.log(contacts[i][number]);
//        break;
//     }
//   }

//   if (i == contacts.length) {
//     console.log("Không tồn tại thông tin trên");
//   }
// }

// lookUpProfile("Yen", "number")

//bài d:
// lookUpProfile("Son", "address") 
// function lookUpProfile(name, prop){
   
//     for(let i=0; i < contacts.length; i++){
//         if(contacts [i]["firstName"] == name){
//             console.log(contacts[i][prop])}
//         else {console.log("Không có thuộc tính trên")
//         } 
//     }
// }

 



//Bài 2: Thay đổi giá trị 6 của xyz thành 606 bằng 2 cách gọi đến object

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
}
//cách 1:
console.log(obj)
obj.bar.xyz=(606)
// cách 2:
let xyz = 606
console.log(obj[xyz])




