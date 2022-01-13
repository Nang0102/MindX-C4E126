
const user = {
    ten: 'tung',
    tuoi: 20,
    banBe: ['vy', 'tung', 'tuan'],
    diaChi: {
        tỉnh: 'HCM',
        quan: 'Q1'
    },
    
};

// console.log(user.banBe);


// console.log(user.diaChi);
 
// for (let i=0; i < user.banBe.length; i++){
//     console.log(user.banBe[i])

// }
// for (const key in user.diaChi) {
//     console.log(user.diaChi[key])
        
//     }
for (const key in user.diaChi) {
    console.log(user.diaChi[key])
}

// user.banBe.push("Thai")
// console.log(user)
