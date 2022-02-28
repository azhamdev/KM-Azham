// buatlah function dengan 2 parameter, parameter pertama digunakan untuk menentukan kelipatan berapa , parameter kedua batas akhir

// const sumMultiple = (kelipatan, batasAkhir) => {
//   let result = [];
//   for (let i = kelipatan; i <= batasAkhir, i + kelipatan; ) {
//     result.push(i);
//   }
//   return result;
// };

// console.log(sumMultiple(2, 11));

//  ------------------- Array --------------

// const students = ["Finto", "Fanta", "Larutan", ["Mas Iqbal", "Mas Andika"]];
// const makanan = ["Bakso", "Mie Ayam", "Soto"];
// // Array
// // CRUD

// // -------Read
// console.log(students[1], students[0]);
// console.log(students[3][1]);
// // ------Create

// // unshift
// // menambahkan value pada depan array
// console.log(makanan, "ini sebelum di UNSHIFT");
// makanan.unshift("Seblak");
// console.log(makanan, "ini setelag di Unshift");

// // push => menambahkan value pada akhir array
// console.log(makanan, "ini sebelum di PUSH");
// makanan.push("Cilung");
// console.log(makanan, "Ini setelah diPUSH");

// makanan[5] = "Permen";
// console.log(makanan, "ini setelah di TEMBAK ");

// // ----------update
// makanan[1] = "Bakso Super Pedass";
// console.log(makanan, "Setelah diUPDATE");

// // --------- delete
// // shift
// makanan.shift();
// console.log(makanan, "setelah diSHIFT");

// // pop
// makanan.pop();
// console.log(makanan, "Setelah diPOP");
// makanan.length = 2;
// console.log(makanan);

//  ------------------------- OBJECT ----------------------
let biodata = {
  firstName: "A'zham",
  secondName: null,
  lastName: "Rasyid",
  age: 21,
  isMarried: false,
  hobbies: ["Tidur", "main", "ngopi"],
  myFullName: function () {
    return this.firstName + this.lastName;
  },
};

// ----- Read
// dot notation
console.log(biodata.lastName);
console.log(biodata.hobbies[1]);

// square notation
console.log(biodata["hobbies"][1]);

// ------ Create
//  sebelum dicreate
console.log("sebelum dicreate");
console.log(biodata);
biodata.address = "Jl. sehat";
console.log("Setelah dicreate");
console.log(biodata);
biodata.makananFavorit = ["Bakso", "Mie Ayam"];
biodata.kriteria = { height: 150, hair: "short" };
console.log(biodata);
console.log(biodata.kriteria.hair);

// -------- UPDATE
biodata.address = "Jl. Jalan Yuk";
console.log(biodata.address);

// -------- Delete
delete biodata.isMarried;
delete console.log("Setelah di Delete pada Is Married", biodata);

// Distruction pada Array
console.log(" ---------- Distruction Array ----------");
const students = ["Fanta", "Finto", "Annisa", "Salsabilla"];
let [name1, name2, name3, name4, name5] = students;
name1 = "A'zham";
console.log(name3);

// Object
console.log(" ----------- Distruction Object ---------");
let { firstName, hobbies } = biodata;
console.log(firstName, hobbies[1]);

//  - ------ --- - -spread operator
// Array
let listStudents = ["Yohannes", ...students, "Rico"];
console.log(listStudents);

// object
// kalo object dibelakang
const dataKu = { ...biodata, kelas: "RN-1", firstName: "Azham Albar" };
console.log(dataKu);
console.log(dataKu.firstName);
