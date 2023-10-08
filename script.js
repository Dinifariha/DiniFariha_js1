// Penggunaan if-else dan nested if
let nilai = 60;

if (nilai >= 70) {
    console.log("Kelas A");
} else if (nilai >= 60) {
    console.log("Kelas B");
} else {
    console.log("Kelas C");
}

// Nested if
let angka = 8;
if (angka > 0) {
    if (angka % 2 === 0) {
        console.log("Angka genap");
    } else {
        console.log("Angka ganjil");
    }
} else {
    console.log("Angka nol atau negatif");
}

// Penggunaan switch case
let hari = 2;
let Namahari;

switch (hari) {
    case 1:
        Namahari = "Senin";
        break;
    case 2:
        Namahari = "Selasa";
        break;
    case 3:
        Namahari = "Rabu";
        break;
    default:
        Namahari = "Hari lainnya";
}

console.log("Hari ini adalah " + Namahari);

// Penggunaan for loop
for (let i = 1; i <= 7; i++) {
    console.log("Iterasi ke-" + i);
}

// Penggunaan while loop
let counter = 1;

while (counter <= 7) {
    console.log("Iterasi ke-" + counter);
    counter++;
}

// Penggunaan do-while loop
let count = 1;

do {
    console.log("Iterasi ke-" + count);
    count++;
} while (count <= 5);

// Penggunaan fungsi
function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}

let hasilTambah = tambah(5, 7);
let hasilKali = kali(4, 8);

console.log("Hasil penjumlahan: " + hasilTambah);
console.log("Hasil perkalian: " + hasilKali);
