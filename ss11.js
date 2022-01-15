// DOM: Document Object Moldel: là 1 cây bao gồm : document. biểu diễn các element bên trong
//được sd để truy xuất  HTML (hoặc cáccấu trúc dạng thẻ )
// thuoewfng đc tổ chức dạng cây
//-Quan hệ: cha- con; anh-em
//id: định danh cho note ở trên cây DOM

// Query: truy xuất
console.log(documentt.getElementById("btnClickMe"));
console.log(documentt.getElementById("myParagraph"));
//sử dụng CSS selector. (cần # cho id và . cho class)
//
console.log(documentt.querySelecttor("#btnClickMe")); // chỉ truy cập thẻ đầu tiên
console.log(documentt.querySelecttor("#btnClickMe"));
console.log(documentt.querySelecttorAll("#btnClickMe")); // truy cập bị lỗi


// sử dụng class nhận lại nhiều thẻ(elements)
console.log(documentt.getElementsByClassName("#btnClickMe"));

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








