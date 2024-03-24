const PI = 3.14;
class HinhTron {
    constructor(_bankinh) {
        this.bankinh = _bankinh;
    
    }

}




// //Bài 2 : Khởi tạo KDL hình chữ nhật
// Biết rằng hcn có thục tính truyền vào là: CD, CR
// Xây dựng phương thức trin KDL hcn như sau:
// 1, chu vi hcn2, diện tích hcn
// 2, Dien tich hcn

class HinhChuNhat {
    constructor(_chieuDai, _chieuRong) {
        this.chieuDai = _chieuDai;
        this.chieuRong = _chieuRong;
    }

    vchcn() {
        return (this.chieuDai + this.chieuRong) * 2;
    }

    dthcn() {
        return this.chieuDai * this.chieuDai
    }
}