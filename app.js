const theProducts = document.querySelector('.shop-container')

//To make navbar more responsive //

function navbarMenuStyleChange() {
  hamburger = document.querySelector(".hamburger");
  hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
  };
}

navbarMenuStyleChange();




//Fetching JSON data for workout table
fetch("muscles.json")
.then(function(response){
  return response.json();
})
//Mapping out the table with fetched JSON data
.then(function(muscles){
  let placeholder = document.querySelector("#data-output");
  let out = '';
  for(let muscle of muscles){
    out += `
    <tr> 
      <td> ${muscle.Day}  </td>
      <td> <img src='${muscle.Preview}'       </td>
      <td> ${muscle.Workout}  </td>
      <td> ${muscle.Sets}  </td>
      <td> ${muscle.Reps}  </td>
      <td> ${muscle.Rest}  </td>
    </tr>
    `;
  }


  placeholder.innerHTML = out;
})
//Function that triggers the style change of the mapped out table above
const fade_state = true
function fade2() {
  //get the button and div
  let div = document.getElementById("muscleGain");
  //if faded in or out
  if (fade_state == true) {
      //trigers animation
    div.style.animation = "fade-in .5s forwards";
    //sets fade_state
    fade_state = true;
  } else if (fade_state == false) {
  //trigers animation
  div.style.animation = "fade-out 2s forwards";
  //sets fade_state
  fade_state = false;
  }
}

//Function that changes the color of the index navbar depending on scroll direction
function headerBackgroundChangerUpdated(){
var scrollBefore = 0;

window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;

    if(scrollBefore > scrolled){
        console.log("ScrollUP");
        scrollBefore = scrolled;
        var change2 = document.getElementById("headeris").style.backgroundColor = '#00000000';
        //Desired action
    }else{
        scrollBefore = scrolled;
        console.log("ScrollDOWN");
        var change = document.getElementById("headeris").style.backgroundColor = '#000000';
        //Desired action
    }

})
}
headerBackgroundChangerUpdated();


if (window.matchMedia('(max-width: 900px)').matches) {
  function nameFunction() {
      return false;
  }
} else {
  
}

//Function that translates some of the text from English to Danish

function langChange(){
  let about = document.getElementById('about');
  if (about.innerHTML === 'About') {
    about.innerHTML = 'Om os';
  } else {
    about.innerHTML = 'About';
  }
  let imageChange = document.getElementById('dklang').src;
  if (imageChange.indexOf('dk.jpeg') !=-1){
    document.getElementById('dklang').src = 'img/eng.webp';
  } else {
    document.getElementById('dklang').src = 'img/dk.jpeg';
  }
}

function findFood(){
const everyChild = document.querySelectorAll("#foodContainer div");
for (var i = 0; i<everyChild.length; i++) {
    everyChild[i].classList.add("anything");
}
}
//**

function fnChangeBorder(boxId)

{document.getElementById(boxId).style.border = "solid #cf9800";}

//Mapping out the products on the shop page

  const jsonFile = './products.json';

  fetch(jsonFile).then(response =>{
     return response.json();
  }).then(data =>{
    data.map(product => {
      const {id, image, name, description, price} = product;
      theProducts.innerHTML += `
      <div class="product-card" data-product-id="${id}">
      <img class="product-img" src='${image}' alt='${name}'>
      <h1 class="product-name">${name}</h1>
      <p class="product-description">${description}</p>
      <div class="lower-card">
        <h1>${price}</h1> <button class="newcard">Add to cart</button></div>
    </div>
      `
    })
  })



 /* const theFood = document.querySelector('.calorie-container');

  const jsonFIle2 = './food.json';

  fetch(jsonFIle2).then(response =>{
    return response.json();
  }).then(data =>{
    data.map(meal => {
      const {id, image, name, calories, protein, vitamins} = meal;
      theFood.innerHTML += `
      <div class="food-card" data-meal-id="${id}">
        <img src='${image}' alt='${name}'>
        <h1>${name}</h1>
        <li>Calories: ${calories}</li>
        <li>Protein: ${protein}</li>
        <li>Vitamins: ${vitamins}</li>
      </div>
      `
    })
  }) */

 







