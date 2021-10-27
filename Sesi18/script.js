$(document).ready(function () {

    
    console.log($('.page-box:first'))
    $('.page-box:first').addClass('btn-danger')
    // console.log($('#title'))
    // console.log($('.page-box'))

    // $('#title').click(function(){
    //     alert('Saya klik Page Title')
    // })
    
    $('#submitbutton').click(function(e){
        e.preventDefault()
        let user = $('input[name="username"]').val()
        console.log(user)
        alert("Halo "+user)
    })
})


// let pageTitleElement = document.getElementById('title')
// console.log(pageTitleElement)
// console.log(pageTitleElement.innerHTML)

// let pageBoxElements = document.getElementsByClassName('page-box')
// // console.log(pageBoxElements)
// for(let i=0; i<pageBoxElements.length; i++){
//     const pageBox = pageBoxElements[i]
//     console.log(pageBox.innerHTML)
// }

// let divElements = document.getElementsByTagName('div')
// console.log(divElements)