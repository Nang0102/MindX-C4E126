// DOM: Document Object Moldel: là 1 cây bao gồm : document. biểu diễn các element bên trong
//được sd để truy xuất  HTML (hoặc cáccấu trúc dạng thẻ )
// thuoewfng đc tổ chức dạng cây
//-Quan hệ: cha- con; anh-em
//id: định danh cho node ở trên cây DOM

// Query: truy xuất
console.log(document.getElementById("btnClickMe"));
console.log(document.getElementById("myParagraph"));
//sử dụng CSS selector. (cần # cho id và . cho class)
//
console.log(document.querySelector("#btnClickMe")); // chỉ truy cập thẻ đầu tiên
console.log(document.querySelector("#btnClickMe"));
console.log(document.querySelectorAll("#btnClickMe")); // truy cập bị lỗi. Nếu muốn truy cập tất cả thì sử dụng vòng lặp for.


// sử dụng class nhận lại nhiều thẻ(elements)
console.log(document.getElementsByClassName("#btnClickMe"));

const btnClickMe =document.getElementById("btnClickMe");
console.log(btnClickMe.id);
console.log(btnClickMe.className);
const myLink = document.getElementById("myLink");
console.log(myLink.href);


//Update
myLink.href="example";
myLink.innerHTML="Google"; //Thay đổi giữa thẻ mở và thẻ đóng
myLink.style.backgroundColor="yellow";//quy tắc đặt tên của JS: viết thường chữ cái đầu tiên

//Tạo ra node con

const myParagraph = document.getElementById("myParagraph");

const myParagraphChild = document.createElement("div");
myParagraphChild.innerHTML="My Child button";
myParagraph.appendChild(myParagraphChild);

myParagraphChild.onclick = function(){ //gán key: onclick= 1 function. onclick là 1 thuộc tính đặc biệt
    //console.log("new button clicked");
    myParagraphChild.innerHTML = "Liked";
    myParagraph.style.textDecoration ="line-through";
};

//Xóa node con

myParagraph.removeChild(myParagraphChild);

console.log(myParagraph.parentNode);








