// document.querySelector(".right ul li").addEventListener("click", function(){
//     this.toggleClass("active");
//   });
$(document).ready(function() {
    console.log('aaaaaaaaaaaaaaa');
})

$('.right ul li').click( element => {
    console.log('clicou');
    $('.dropdown').toggleClass('dNone')
    console.log('.dropdown');
})