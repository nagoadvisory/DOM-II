// Your code goes here

//let's create variables for the objects we are selecting

const navbar =document.querySelector('.nav-container');

const foooter = document.querySelector('.footer')

const button = document.querySelectorAll('.btn')

let buttonArray = Array.from(button);


// #1 mouseover
navbar.addEventListener('mouseover',function(){
    navbar.style.backgroundColor = "pink"
})

// #2 mouseout
navbar.addEventListener('mouseout',function(){
    navbar.style.backgroundColor = "white"
})

// #3 dbl click
buttonArray[0].addEventListener('dblclick', function(){
    window.alert('Sorry sucker');
})