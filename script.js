let text = document.getElementById("text");

text.addEventListener('input', function () {
    var t = this.value;
    let char = t.length;
    document.getElementById("char").innerHTML = char;


    //    remove extra space from starting and ending
    t = t.trim();
    //split into array when space comes
    let words = t.split(' ');
    console.log(words);
    //cleanlist when element not empty in between 
    let cleanList = words.filter(function (elem) {
        return elem != "";
    })

    document.getElementById("word").innerHTML = cleanList.length;
});


//for background color
let h = document.getElementById("h");
function changeBG(color) {
    document.body.style.backgroundColor = color;
}



//for sticky navbar
window.addEventListener('scroll', function () {
    let navbar = document.getElementById("navbar");
    if (window.pageYOffset >= 210) {
        navbar.classList.add('sticky');
    }
    else {
        navbar.classList.remove('sticky')
    }
})



//button actions
// ids of all the buttons->
let uc=document.getElementById("uc");
let lc=document.getElementById("lc");
let cp=document.getElementById("cp");
let repl=document.getElementById("repl");
let rd=document.getElementById("rd");
let cc=document.getElementById("cc");
let reset=document.getElementById("reset");
let text1 =document.getElementById("text");

//UpperCase
function funuc()
{
        let str=text1.value.toUpperCase();
        text1.value=str;
        console.log( (text1.value))
}

//LowerCase
function funlc()
{
        let str=text1.value.toLowerCase();
        text1.value=str;
        console.log( (text1.value))
}

