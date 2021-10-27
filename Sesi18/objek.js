const kursi = {
    merk: "FSD OCBC",
    bahan: "kain",
    warna: "putih salju",
    kategori: "gaming",
    jumlahKaki: 40,
    bebanMaksimal: 200,
    harga: 750000
}

console.log(kursi)

kursi.bahan = [
    kursi.bahan,
    'kayu jati'
]
//cara 1: object.property
console.log(kursi.merk)

//cara 2: object['property']
console.log(kursi['kategori'])


//Manipulasi Object
kursi.distribusi = ['Jakarta', 'Bandung', 'Surabaya']
console.log(kursi)

//Edit property Object
// kursi.bahan = 'titanium'
kursi['bahan'] = 'titanium'
console.log(kursi)

//Hapus property
delete kursi.jumlahKaki
// delete kursi['jumlahKaki']
console.log(kursi)

//menambah property
kursi.bahan = [
    kursi.bahan,
    'kayu jati'
]