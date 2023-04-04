const navbar_right = document.querySelector(".right");
const toggle_button = document.querySelector(".toggle_button");

toggle_button.addEventListener("click", () =>{
  navbar_right.classList.toggle("toggle_effect")
})
window.addEventListener("resize", function() {
  if(window.innerWidth > 990 && navbar_right.classList.contains("toggle_effect") ){
    navbar_right.classList.remove("toggle_effect");
  }
});


window.onscroll = function(){myFunction()}
function myFunction(){
   let scroll = document.documentElement.scrollTop;
   const navBar_main = document.getElementById("main_nav");
   if(scroll>200) {
       navBar_main.classList.add("main_nav_scroll");
   }
   else navBar_main.classList.remove("main_nav_scroll");
   console.log(scroll);
}

