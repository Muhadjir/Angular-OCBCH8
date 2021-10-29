const kursi = {
    merk: "FSD OCBC",
    bahan: "kain",
    warna: "putih salju",
    kategori: "gaming",
    jumlahKaki: 40,
    bebanMaksimal: 200,
    harga: 750000
}

function getValue(obj, key){
    console.log(obj[key])
}

// const getValue = function(obj, key){}

// const getValueArrowFunvtion = () => {}

console.log(getValue(kursi, 'harga'))