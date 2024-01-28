//B9 :
m = [1,2,3,4,5,6,"hh", "9",80,100]
m.filter(item => typeof(item) === "number")






//B10 :
const arr = ["High" "knowledge""," "high" "return"];
console.log(arr); 

const removed = arr.splice(1, 2);
console.log(arr);  
console.log(removed);








//B11 :
class People {
    constructor(_name, _age, _address) {
        this.name= _name;
        this.age= _age;
        this.address= _address;
    }

    get name(){
        return this.ten
    }

    set age (Age){
        if(Age == parseInt(Age)){
            if (Age > 0) {
                this.age = Age
            }
        }
        else{
            console.log("");
        }
    }
}


class Students extends People {
        constructor(_name, _age, _address, _math, _physical) {
            super(_name, _age, _address)
            this.math= _math;
            this.physical= _physical;
        }
}