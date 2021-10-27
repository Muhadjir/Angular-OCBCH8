//if
let num = 79
if (num > 70)
    console.log("Nilai Anda "+num)

//if else
let num1 = 85
if(num1 > 80)
    console.log("Predikat A")
else if(num1 > 70)
    console.log("Predikat B")
else
    console.log("Predikat C")

//operasi Logika
let name = "student"
if(name === "study" || num1 > 80)
    console.log("Predikat "+ name + ": A dengan nilai " + num1)

if(name === "teacher" && num1 > 80)
    console.log("Predikat "+ name + ": A dengan nilai " + num1)
else
    console.log("Anda adalah seorang "+name)
