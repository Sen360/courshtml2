window.onload = function() {
    alert("Hello")
}

const button = document.getElementById('btn');
 
button.addEventListener('click', function(){
    document.getElementById("btn")
    .classList.add("style_button");
    document.body.style.background = "blue";
});

const button_2 = document.getElementById('btn_2');
 
button_2.addEventListener('click', function(){
    document.getElementById("btn")
    .classList.remove("style_button");
});

const img = document.getElementById('image');

img.addEventListener('mouseover', function(){
    document.getElementById("image").src="assets/img/referencement.PNG"
});

img.addEventListener('mouseout', function(){
    document.getElementById("image").src="assets/img/ordinateur.PNG"
});


