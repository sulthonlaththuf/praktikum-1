// FOR LOOP
for (let index = 1; index <= 10; index++){
    console.log("Perulangan ke- " + index)
}


//FOR/IN LOOP
let siswa = {
    nama : "Kusuma Seta",
    gender : "Wanita",
    jurusan: "RPL",
    usia: "300",
    alamat: "Ngantru"
}

for (key in siswa) {
    console.log(key);
}

//FOR/ OF LOOP
let presiden = ["Soekarno", "Soeharto", "Habibie", "Gus Dur", "Megawati", "SBY", "Jokowi"]
for (pres of presiden) {
    console.log(pres)
}

//WHILE LOOP
let laptop = ["Lenovo", "HP", "Acer", "Asus"]
let i = 0
while(laptop[i]){
    console.log(laptop[i])
    i++
}

//DO WHILE
let gadget = ["Xiaomi", "Samsung", "Motorola", "Sony Ericson"]
let i = 0
do{
    console.log(gadget[i])
    i++
} while(gadget[i])