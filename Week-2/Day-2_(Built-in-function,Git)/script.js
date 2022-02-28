const firstName = "A'zham";
const lastName = "Rasyid";
const age = 21;

const myName = "A'zham Albar Rasyid";
const myFullName = "A'zham?Albar?Rasyid";

// Slice
const hasilSlice = myName.slice(0, 6);
console.log(hasilSlice);

//concat -> menggabungkan 2 atau lebih
const hasilConcat = myName.concat(" adalah", " Seorang", " Pelaut");
console.log(hasilConcat);

//string Literal
const fullName = `Hallo nama saya ${firstName} ${lastName} umurku ${age} tahun`;
console.log(fullName);

// split
const hasilSplit = myFullName.split("?");
console.log(hasilSplit);

// to Upper Case
const hasilUpperCase = myName.toUpperCase();
console.log(hasilUpperCase);

// to lowe case
const hasilLoweCase = myName.toLowerCase();
console.log(hasilLoweCase);

const isExist = myName.includes("zham");
console.log(isExist);

// ---------
