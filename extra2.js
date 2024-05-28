
function navbarMenuStyleChange() {
  hamburger = document.querySelector(".hamburger");
  hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
  };
}

navbarMenuStyleChange();

//Function for browsing the foods
function getTheValue(){
  let inp = document.getElementById("search")  //getting input field

  
   if (inp.value == 'Vegetable') {  // if it is equal to first id 
      document.getElementById('broccoli').style.display = "block";  
      document.getElementById('carrot').style.display = "block";
      //setting display to block
  }
  else if (inp.value == 'Meat') {
      console.log("in second")
      document.getElementById('chicken').style.display = "block";
      document.getElementById('salmon').style.display = "block";
  }
  else if (inp.value == 'Carbs') {
      console.log("in third")
      document.getElementById('rice').style.display = "block";
  }
  else if (inp.value == 'Fruit') {
    console.log("in third")
    document.getElementById('banana').style.display = "block";
}
  else {
      document.getElementById('carrot').style.display = "none"; //hiding the element if not searched
      document.getElementById('chicken').style.display = "none";
      document.getElementById('broccoli').style.display = "none";
      document.getElementById('banana').style.display = "none";
      document.getElementById('rice').style.display = "none";
      document.getElementById('salmon').style.display = "none";
  }
}

