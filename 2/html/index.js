// let number = 123
// let stroing = "ea sport"
// let boolean = true

// let abc = null //đại diện cho giá trị ko tồn tại
// let abcd = undefined //đại diện cho giá trị ko đc khai báo hoặc biến ko đc gọi giá trị




// let arr=["com", "chao", "bun"]
// console.log(acc[2].img);
// let arr2 = arr
// arr2.push("pho")
// console.log(arr);
// console.log(arr2);



// let arr3 = [...arr]
// arr3[1]= "canh"
// console.log(arr3);
// console.log(arr);
// console.log(arr2);


//api 4 method
fetch('https://659a07d6652b843dea534140.mockapi.io/book/productBook')
//kiểm tra có lỗi ko
.then(response => {
    if (!Response.ok) {
        throw new Error(`HTTP error! Status: ${response.stasus}`);
    }
    //chuyển đổi dữ liệu nhận đc sang JSON
    console.log(response);
    return response.json();
})

.then(data => {
    //xử lý dữ liệu JSON ở đây
    console.log(data);
    let htmlproduct =""
    for(let i =0;i<data.length;i++){
        let htmlproduct = `
        <div>${data[i].name}<div/>
        <div>${data[i].avartar}<div/>
        <div>${data[i].title}<div/>
        `
        htmlproduct +=htmlproduct
    }
})
.catch(error => {
    //xử lý lỗi (nếu có)
    console.error('Fetch error:', error);
});
