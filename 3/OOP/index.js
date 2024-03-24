////OOP là gì? Vai trò của OOP trong lập trình?


class Person{

    //Hàm khởi tạo: Khai báo thuộc tính của class đó
    constructor(_name, _age, _address, _cccd){
        //Gán giá trị trong hàm khooiwtr tạo
        this.name = _name;
        this.age = _age;
        this.address = _address;
        this.cccd = _cccd;
    }

    say(){
        alert("OMG!!!");
    }
}

let LeAnh = new Person('Le Anh', 16, "Cầu Giấy - Hà Nội", "012345678");
console.log(LeAnh.name);
console.log(LeAnh.age);
console.log(LeAnh.address);
console.log(LeAnh.cccd);