// //khai báo biến
// // khai báo biến hằng số
// const PI = 3.14;


// //khai báo biến
// {
//     {
//         let a = 1;
//         {
//          let b = 2;
//          var c = 3;
//         }
//     }
// }


// //sao chép một mảng
// let arr = [1,2,3];
// //let arr1 = arr; cú pháp sai(ko nên dùng)

// //cú pháp đúng
// arr1 = [...arr];///1,2,3
// arr[0] = 'vị trí số 0;'
// console.log(arr[0]); ///1


// //Gộp mảng
// let a = [1, 2, 3];
// let b = [4, 5, 6];

// let c = [...a, ...b];
// console.log("c:", c);


// //sao chép đối tượng
// let obj = {
//     name : "ronaldo",
//     age : 38,
// }

// let obj2 = {...obj};
// console.log("obj2: ", obj2);

// let obj3 = {
//     name : "leo messi",
//     age : 36
// }

// let objGOP = {obj, obj3};
// console.log(obj, obj3);




// //Array Function
// let arr = [1,2,3,4,5,6];
// // Yêu cầu : in ra toàn bộ phần tử mảng với từng giá trị trong mảng được bình phương
// let arrBinhPhuong = []
// for(let i =0; i< arr.length; i++){
//     arrBinhPhuong[i] = arr[i] * arr[i];
// }
// console.log(arrBinhPhuong);

// //Ứng dụng với hàm map
// let arrMapBinhPhuong = arr.map(item => item*item);
// console.log("arrMapBinhPhuong:", arrMapBinhPhuong);





// //Yêu cầu in ra mảng mới với các phần tử mảng arr tăng lên 5 đơn vị
// let tang5DonVi = arr.map(item =>item + 5);
// console.log("tang5DonVi", tang5DonVi)




// let arr = [1,2,3,4,5,6];
//Ví dụ với Filter
//Yêu cầu: lọc ra các số chẵn trong mảng arr và lưu trữ vào mảng mới
// let filterSoChan = arr.filter(item => item % 2 == 0);
// console.log("filterSoChan", filterSoChan);

// //Còn số lẻ
// let filterSoLe = arr.filter(item => item % 2 !== 0);
// console.log("filterSoLe", filterSoLe);





//Bài tập tổng hợp: Lọc ra bạn có tuổi 16
let user =[
    {
        name:"PhanANh",
        age: 17,
        school:"MindX"
    },
    {
        name:"QuangANh",
        age: 17,
        school:"MindX"
    },
    {
        name:"LêAnh",
        age: 16,
        school:"MindX"
    },
    {
        name:"Triết",
        age: 16,
        school:"MindX"
    },
]

let filterTuoi16 = user.filter(item => item.age == 16)
console.log("filterTuoi16", filterTuoi16);