/*
--------------------------------------------------
------------------BouttonFiltre------------------
--------------------------------------------------
*/
var btn = document.getElementById("btnfilter");
var filter = document.getElementById("filtrer");

btn.addEventListener("click", () => {
  if(getComputedStyle(filter).display != "none"){
    filter.style.display = "none";
  } else {
    filter.style.display = "block";
  }
});


/*
--------------------------------------------------
------------------Username Avatar-----------------
-----------------------Cookies--------------------
--------------------------------------------------
*/
var btn2 = document.querySelector("btnlogin");

const allcookies = document.cookie
console.log(allcookies)




function getCookies() {
  var cut = document.cookie.split(';');
  console.log(cut);

  for (let i = 0; i < cut.length; i++) {
    
    // ca = document.cookie.split("=");
    var c = cut[i]


 
  
    console.log(c);   
  }
  return null
  
}

getCookies()






// btn2.addEventListener("click",(x) => {

//   for (let i = 0; i < x.length; i++) {
//     // const element = array[index];
//     console.log(i)
    
//   }

//   // if (x == null){

//   // }
//   console.log (x);


// })


// function GetCookieName() {

// }
// var x = document.cookie

