function removeSpace(text){
    return text.replace(/ /g,'')
}

function reversedText(text){
    return text.split("").reverse().join("")
}

function update(password){
    password = password.toLowerCase()
    
    password = password.replace(/a/g, 'b');
    password = password.replace(/i/g, 'j');
    password = password.replace(/u/g, 'v');
    password = password.replace(/e/g, 'f');
    password = password.replace(/o/g, 'p');
    return password;
}

var pass = 'aku adalah hajir'
var nospace = removeSpace(pass)
var reversed = reversedText(nospace)
var encrypted = update(reversed)

console.log(nospace)
console.log(reversed)
console.log(encrypted)