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

//CamelCase
function funcc() {
    let str = text1.value;
    let words = str.split(' ');
  

    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  text1.value=words
    let camelCaseStr = words.join('');
    text1.value = camelCaseStr.charAt(0).toLowerCase() + camelCaseStr.slice(1);
  }


  //reverse
  function funrev() {
    let str=text1.value;
    let reversedStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
   text1.value=reversedStr;
  }


  //remove duplicates
  function funrd() {
    let str=text1.value;
    let seen = {};
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (!seen[char]) {
        seen[char] = true;
        result += char;
      }
    }
    text1.value=result
  }


  //replace
  function funrepl(){
    let inp=prompt("Please enter in the space seprated word and replaced word like (diksha neha)")
    console.log(inp)
    console.log(typeof inp)
    let arr=inp.split(' ')
    console.log(typeof arr)
   let p= text1.value.replaceAll(arr[0] ,arr[1])
   text1.value=p
  }

  //copy
  function funcp()
  {
   navigator.clipboard.writeText(text1.value)
  }

  //reset
  function funreset() {
    let str='';
    text1.value=str;

  }

  //character count
  function funCount() {
    let str = text1.value;
    let counts = {};
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (counts[char]) {
        counts[char]++;
      } else {
        counts[char] = 1;
      }
    }
  
    let message = "";
    for (let char in counts) {
      message += char + ": " + counts[char] + "\n";
    }
    alert(message);
  }
  
  
  