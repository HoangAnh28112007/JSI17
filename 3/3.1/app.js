// Spread Syntax: Array, Object
// let obj = {
//     name: "john",
//     age: 24,
//     job: "dev"
// }

// let obj2 = {
//     name: "jame",
//     age: 25,
//     job: "dev"
// }

// let obj3 = Object.assign(obj1, obj2);  
// // cách lấy thêm khóa trong mỗi đối tượng
// console.log("obj3", obj3);

//Ôn tập Filter dùng cho Array
/*
 Map: Giúp thực hiện yêu cầu người dùng với mảng và trả về kết quả là một mảng mới đã thực hiện yêu cầu đó.

 Filter: Giúp kiêm rtra yêu cầu người dùng đối với mảng và kết quả là một mảng mới thỏa mãn yêu cầu người dùng.
*/
// let arr = [1,2,3,4,5];
// /////Tăng gấp đôi giá trị phần tử mảng arr và in ra nó?
// let arrGapDoi = arr.map(item => item*2);
// console.log("arrGapDoi",arrGapDoi );






/////Yêu cầu đề bài:
/* 
1, in ra tên bạn hs có tuổi >/= 17
2, in ra tên các bạn hs có cùng siwr thích là: "đọc truyện"
3, in ra tên các bạn hs có cùng sở thích là: "bóng đá"
4, in ra tên các bạn hs có cùng sở thích là: "bóng rổ"
*/

////Hàm in ra tên
//Yêu cầu 1
const printName = (students) => {
    let getName = [];
    for(let key of students) {
        getName.push(key.name);
    }

    return getName.join(", ")
}


let students=[
    {
        name:"QAnh",
        age:17,
        hobbies:['cầu lông','đọc truyện']
    },
    {
        name:"PAnh",
        age:17,
        hobbies:['bóng đá','đọc truyện']
    },
    {
        name:"LAnh",
        age:16,
        hobbies:['bóng đá','bóng rổ ']
    }
]


let filterTuoilonhonhoacbang17 = students.filter(item => item.age >= 17)
console.log(printName(filterTuoilonhonhoacbang17));



//Yêu cầu 2
let studentssamehobbies = students.filter(item => item.hobbies.includes ("đọc truyện"));
console.log(printName(studentssamehobbies));

//Yêu cầu 3
let studentslikefootball = students.filter(item => item.hobbies.includes ("bóng đá"));
console.log(printName(studentslikefootball));

//Yêu cầu 4
let studentslikebasketball = students.filter(item => item.hobbies.includes ("bóng rổ"));
console.log(printName(studentslikebasketball));