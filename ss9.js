console.log("Hello, World!");
//Scope: phạm vi. phạm vi mà biến đó khả dụng
//block of code: khối các dìng lệnh


let y= 0
if(true){
    // console.log(`true`)
    // console.log('More text')
let x=1; //x: block scope
console.log(x);
console.log("y:",y);
}
// function: hàm
// hàm là một đơn vị code, thực thi một nhiệm vụ
// có khả năng tái sư dụng
//khai báo
function sayHello(){
    console.log("hello");
}
//thực thi
sayHello();

//dien tich tam giac
// d và h là những tham số đầu vào(params)
// được truyền vào khi thực thi function
//return: kết quả trả về
// tái sử dụng kq để tiếp tục tính toán
// không có gì đc viết sau return, vì sau return những dòng lệnh bên dưới sẽ k được thực thi
function gettriangleArea(){
    // let d= 1;
    // let h=5;
    const area= (d*h)/2;
    console.log("dien tich:", area);
    return area;
}
gettriangleArea(1,5);
gettriangleArea(3,7);
gettriangleArea(10.5);
gettriangleArea(4,8); // tái sử dụng đc và có thể linh hoạt thay đổi giá trị

sumTriangleArea(4,10, 15, 20)

//hoisting: chạy code trước khi khai báo
//muosn có kq trả về lại  thì bắt buộc phải có return
function sumTriangleArea(d1, h1, d2, h2){
    let area1 = gettriangleArea(d1,h1)
   console.log("area1", area1);
    let area2 = gettriangleArea (d2, h2,)
    console.log("area2", area2);
    console.log("Tổng", area1 + area2);
    return area1 + area2;
}
//recursive: đệ quy ( là khả năng gọi, dư rdụng function đó trong chính function của nó)
//vd giai thừa: fractorial

function fractorial(n){
    if (n===1) {
        return 1;

    }
    return n* fractorial(n-1)
}
console.log(fractorial(5));
// Array: mảng: 1 tập hợp các dữ liệu, theo thứ tự từ 0

let arr= [0,1,2,3,4,5]
console.log(arr);
console.log(arr[3])// 3 là vị trí của phàn tử trong danh sách
const arr2= [0, false, "hello", null,[0,1,2,3,]];
console.log(arr2);


// multi dimension array: mảng đa chiều 

const board=[
    [ "X", "", "O"]
    ["X", "",  "O"]
    ["X", "", "O"]

];
arr.push(6)// thêm phần tử vào cuối mảng
arr.splice()//Xóa phần tử ở vị trí x, xóa n phần tử ở vị trí x,...