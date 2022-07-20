// $(document).ready(function(){
//   $('.list').click(function(){
//     const value = $(this).attr('data-filter');
//     if(value == 'all'){
//       $('.itemBox').show('1000');
//     }
//     else{
//       $('itemBox').not('.' +value).hide('1000');
//       $('itemBox').not('.' +value).show('1000');
//     }
//   });
// })

	// scroll navbar ve scroll top
window.onscroll = function() {scrollFunction();scrollFunctionbtn()};
var mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("rhrgbr").style.top = "0";
  } else {
    document.getElementById("rhrgbr").style.top = "-120px";
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// button search full active
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}



