// tất cả những gì ng dùng tương tác với trình duyệt đc gọi là event
//Hầu như tất cả các events của HTML đều bắt đầu bằng "on". ĐC hiểu "on" là "khi"

// Khi click chỉ chạy đc 1 function.
function sayHello(){
    console.log("Hello");
console.log(this)
}

const btnClickMe2 = document.getElementById("btnClickMe2");
btnClickMe2.onclock =function(){ //lấy gtrị đó ra khỏi HTML và gán vào đây
console.log("Hello, ClickMe2");
btnClickMe2.innerHTML = "Clicked";
console.log(this);
};

const btnClickMe2 = document.getElementById("btnClickMe2");
btnClickMe2.onclock =function(event){ //lấy gtrị đó ra khỏi HTML và gán vào đây
console.log("Hello, ClickMe2");
btnClickMe2.innerHTML = "Clicked";
console.log(event.target);
};


const btnClickMe3 = document.getElementById("btnClickMe3");

// lắng nghe ng dùng làm gì đó để chạy. Có 2 cách truyền: tham số và function

// Ưu điểm: cho phép ng dùngg add đc nhiều cái hơn: nhiều function khi event xảy ra
//xóa đi listener
btnClickMe3.addEventListener("click", function(){
console.log("Hello, Click Me 3")
})

btnClickMe3.addEventListener("click", function(){
    console.log("Hello, this is another listener")})


    const outer = document.getElementById("outer")
    outer.onclick = function(event){
        console.log(event)
    }

    const todolist = document.getElementById("todolist");
    todolist.onclick = function(event){
       event.target.style.color="red"
    }

// const myForm = document.getElementById("myForm");
// myForm.addEventListener("change", function(event){
//     console.log(event); 
// })