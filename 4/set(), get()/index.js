//// Phương thức set(), get()
////// ---> d=Dùng để định nghĩa getter và setter cho thuộc tính của 1 đối tượng.
class Nguoi{
    constructor(_ten, _tuoi) {
        this.ten =  _ten;                   // hoặc this._ten= ten;    -   private thuộc tính của class người.
        this.tuoi = _tuoi;                  //      this_tuoi= tuoi;
    }



    ///Getter(lấy) cho thuộc tính "ten"
    get ten(){
        return this.ten
    }


    ///Setter (đặt lại) cho thuộc tính "tuoi"
    set tuoi (tuoiMoi){
        if(tuoiMoi == parseInt(tuoiMoi)){
            if (tuoiMoi > 0) {
                this.tuoi = tuoiMoi
            }
        }
        else{
            console.log("Tuổi mới phải nguyên dương");
        }
    }
}


let HA = new Nguoi("HA", 17)
console.log(Nguoi.ten);
console.log(Nguoi.tuoi);


//Kiểm tra có phải số nguyên hay ko??
//parseInt -->chỉ lấy số nguyên

let a = 2;
console.log(
    (a === parseInt(a))?`${a} là số nguyên`: `${a} ko là số nguyên`
);