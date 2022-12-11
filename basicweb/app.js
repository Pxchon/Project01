
// console.log("Marien Online");
// const height = 200;
// var Nickname = "MaMa";
// const ismale = false;
// let money = null;
// const bigNumber = 10n
// console.log(height , Nickname , ismale , money , bigNumber);
// // ------------------ object------------//
// const person ={
//     name : "Tus" ,
//     age : 1000 ,
//     city : "Bangkok" ,
//     height : 184 ,
// }
// console.log(person);
// console.log(person.me);

// person.name = "Thararat"
// console.log(Person.name);
// Person.weight = 70

// console.log(Person);

// const animals = ["Fish","Cat","Dog"]

// console.log(animals); 

// animal.push("Tiger") //เพิ่มคำหลังสุด

// console.log(animals);

// animals.pop() //ลบคำหลังสุด

// console.log(animals);

// animals.unshift("tiger"); //เพิ่มคำหน้าสุด

// console.log(animals);

// animal.shift(); // ลบคำหน้าสุด

// console.log(animals);
// let x = 1 + 2 ** 2

// const inp = prompt("Type Ur Result")

// document.getElementById("result").innerText = inp;

function show() {
    const int_value = Number(document.getElementById('inp').value);
    if (int_value >= 101) {
        document.getElementById("result").innerText = "เกินปายยยย";
    }
    else if (int_value >=80) {
        document.getElementById("result").innerText = "เกรด 4 เก่งมว๊าก";
    }
    else if (int_value >= 70) {
        document.getElementById("result").innerText = "เกรด 3 ";
    }
    else if (int_value >= 60) {
        document.getElementById("result").innerText = "เกรด 2 ";
    }
    else if (int_value >= 50) {
        document.getElementById("result").innerText = "เกรด 1 ";
    }
    else if (int_value >= 40) {
        document.getElementById("result").innerText = "พยายามขึ้นอีกนิด";
    }
    else if (int_value < 40) {
        document.getElementById("result").innerText = "สู้ๆ พยายามเข้า";
    }
    else 
        document.getElementById("result").innerText = "เเอบทำอะไรอ๊ะ";
        
}