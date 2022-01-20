const myForm = document.getElementById("myForm")

const myWellcome= document.getElementById("myWellcome")

// const username = localStorage.getItem("username") //lấy ra gtri của local
const username = sessionStorage.getItem("username")
console.log(username)
//Nếu lấy ra gtrị chưa tồn tại thì sẽ bị lỗi. Nên bắt buộc phải lấy có gtri rồi

if(username){
    //user dã dăng nhập
    myWellcome.innerHTML='Hello, ${username}';
    myForm.style.display="none";
} else{
    // user chưa đăng nhập
    myWellcome.style.display="none";


}

myForm.addEventListener("submit", function(event){
    //dừng hành đồng submit mặc định của form
    event.preventDefault()

    const username = document.getElementById("myUsername").ariaValue
    // console.log(username)
    myWellcome.innerHTML= 'Hello, ${username}'
    myWellcome.style.display="block"
    myForm.style.display ="none"

    // localStorage.setItem("username", username) //có(key, value)
    sessionStorage.setItem("username", username)
    //giá trị sẽ đc update chứ k phải  thêm mới
    // để lấy ra giá trị trong local:

})

//log out
myWellcome.addEventListener("click", function(){
 myWellcome.style.display="none"
 myForm.style.display="block"
 //Xóa
//  localStorage.removeItem("username")
sessionStorage.removeItem("username")
 //xóa tất cả
// localStorage.clear("username")
sessionStorage.clear()
}
)
// RAM vs Storage
//RAM dữ liệu bị biến mất sau khi ứng dụng tắtt  đi khi lưu trữ trên RAM
// Storage dữ liệu k bị mát đi. 
// tốc độ của RAM nhanh hơn rất nhiều
//RAm đắt . Storage: rẻ hơn
// Ram bộ nhơ tạm thời. Storage: bộ nhớ vĩnh viễn( trừ khi bị hỏng hóc)

//Storage: tổng hợp lưu trữ dữ liệu. tập trung chủ yếu vào Local storage và Session storage
//  Cả 2 đều có dạng: Key, value
// Local storage: lưu trữ dữ liệu trong trình duyệt của bạn. Dữ liệu đc cho là an toàn hơn
//mỗi trnag webcó 1 local riêng. 
//value của Local luôn là "String"
// Session storage: 