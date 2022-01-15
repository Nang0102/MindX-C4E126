const lip = document.getElementsByClassName("test")
console.log(lip);
for (let i = 0; i < lip.length; i++) {
  lip[i].style.color = "red";
}

const btnAdd = document.getElementById("add-btn")
// btnAdd.onclick= test
// function test(){
//   console.log("add")
// }

const btnReMoveAll = document.getElementById("remove-btn")
// btnReMoveAll.onclick = test2
// function test2(){
//   console.log("RemoveAll")
// }
const list = document.getElementById("list-new")

// thêm
function add(){
  const li = document.createElement("li")

  const span = document.createElement("span")
  // show input dialog
  // get input dialog 
  // assign to span.innerHTML with element.value
  // span.innerHTML = element.value
  // xóa
  const element = document.getElementById("to-do-list")
  span.innerHTML= element.value

  const btnRemove = document.createElement("button")
    btnRemove.innerHTML = "Remove"
    btnRemove.onclick = function () {
     btnRemove.parentNode.remove()}
      
  li.appendChild(span)
  li.appendChild(btnRemove)
  list.appendChild(li)
}
function removeAll(){
  list.innerHTML=""
}

let arrColor = [
   '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A'
]

function changeRandomColor(){
  document.body.style.backgroundColor = arrColor[Math.floor(Math.random() * arrColor.length)];
}
  

  




