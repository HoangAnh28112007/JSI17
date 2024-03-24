// Khởi tọa class người

// class Nguoi {
//     constructor(_name, _age, _job, _id, _hobbies, _hometown) {
//         this.name = _name;
//         this.age = _age;
//         this.job = _job;
//         this.id = _id;
//         this.hobbies = _hobbies;
//         this.hometown = _hometown;
//     }

//     gioiThieu() {
//         return `Xin chào, tôi là ${this.name} và tôi ${this.age} tuổi. Tôi đang theo học tại ${this.job} rất vui được làm quen với các bạn.`;
//     }

//     sinhNhat() {
//         return `Chúc mừng sinh nhật!!!. Bạn đã ${this.age} tuổi`;
//     }
// }


// let HA= new Nguoi("HA", 17, "student", "23102007", ["Lập trình", "Đá bóng", "Chơi game"], "Hà Nội");
// console.log(HA.gioiThieu());
// console.log(HA.sinhNhat());




///////kế thừa
// class GiaoVien extends Nguoi {
//     constructor(_name, _age, _job, _id, _hobbies, _hometown, _monhoc, _capbac) {
//         //Hàm "super" dùng để kế thừa các thuộc tính class lớn sang class nhỏ
//         super(_name, _age, _job, _id, _hobbies, _hometown);
//         this.monhoc = _monhoc;
//         this.capbac = _capbac;
         
//          }     

//         //Kế thừa phương thức giới thiệu và cải tiến thêm với super()
//         gioiThieu(){
//             return (
//                 super.gioiThieu() + `NHƯNG giờ t đã chuyển qua làm công việc khác với cấp bậc ${this.capbac}`
//             );
//         
//     }



    //kế thừa phương thức sinh nhật nhưng ghi đè lại toàn bộ nội dung
//     sinhNhat(){
//         return `Sinh Nhật ${this.name} đang làm việc tại ${this.monhoc}
//         vào tuổi ${this.age}!!!`
//     }
// }


// let HA = new GiaoVien(
//     "HA",
//     17,
//     "student",
//     "23102007",
//     ["Lập trình", "Đá bóng", "Chơi game"],
//     "Hà Nội",
//     "HS",
//     23
// )
// console.log(HA.name);
// console.log(HA.monhoc);
// console.log(HA.capbac);