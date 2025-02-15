# Web Dev Course by Brian Holt- Frontend Masters

He will be teaching HTML, CSS and JavaScript

- Html: It is the content that we see
- CSS : the style/font/colour of the content
- JavaScript: Makes the user interact with the Content

## HTML

### Tags: the base building block (mainly the meaning of the text, size can be changed using css also)

Header (example:<h1>Heading</h1> )-->till h6
paragraph (<p>This starts a paragrath</p>)--> paragraph indentation
Division (ex: <div><hi> Heading </h1></div>) : nested tags
anchor (ex: <a href="https://blahblah.com">Display</a>)
(Also in HTML, the amount of whitespace doesnt matter)

- Div Tag

It basically divides, help u define a tag specifically. It is like a cardboard box, basically defined by whats in it.
It helps u group a certain info to be shown as a whole and later grouped with all other divs. ex: change position of an image some texts, some header

- Span Tag

It is used to define / specify different parts of text. It is like a ziplock bag

- List Tag

<ol>    
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>
<ul>
    <li>This is an unordered list</li>
    <li>This is an unordered list</li>
    <li>This is an unordered list</li>
</ul>

- Button tag

<button>Click here</button> -->u need js for button to react to something

- image tag

Any thing that is the part of the content belongs to the html file.
<img src="blahblah.jpg" /> -->image is a self closing tag

- form tag

basically takes input tags and turns into a form

<form>
<input type="text" />
<input type="number" />
</form>

- input tags

They are provided by the browser, so called browser inputs

- <input /> -->text by default
  <input type ="text" />
  <input type= "file" />
  <input type= "datetime-local" />
  <input type= "radio" />
  <input type= "checkbox" />
  <input type= "color" />
  <input type= "number" />

- <textarea>allows users to put long </textarea>
- <select>
      <option>Delhi</option>
      <option>Mumbai</option>
  </select>

- table tag

<table>
    <thead>-->table heading
        <tr>-> new row
            <td>Name</td>
            <td>Points</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Slytherin</td>
            <td>20</td>
        </tr>
        <tr>
            <td>Griffindoor</td>
            <td>30</td>
        </tr>
    </tbody>
</table>

- marquee
  <marquee>The text runs and moves but only few browsers support it so dont use it for a real website</marquee>

- paragraph tag
<p> This is some text. This is more.</p>

<p>This is some text.</p>
<p>This is some more text.</p> <!-- this way, there will be a break in the two lines, intsead of using <br>, modern html programmers use <p> tag multiple times-->

- article tag
  There is no functional difference btw a div and article. Article is more of a documentation, or like a small set of info/ a unit of info, example a tweet. Like a cardboard box with a desc on it

- section tag
  same as div, just a bigger larger macro unit of a website, most websites use div here. Its a newer tag than div.

- nav tag
  used for adding all the navigations together. Example
  <nav>
  <ul>
  <li class="nav-list-item"><a class="nav-link"href= "/">Homepage</a></li> <!-- here slash takes u to the root domain on which the site is running-->
  <li class="nav-list-item"><a class="nav-link"href= "/login">Login</a></li>

### comments

<!-- this is a comment in html
more stuff here, multiline comment -->

### Attributes

They are the specifications after a tag is defined. The kind of tag will determine the kind of attribute it will have. Example

- <input type="number" /> <!-- here type is an attribute-->
- <a href="www.frontendmasters.com">Frontend</a> <!-- here, href is an attribute-->
- <img src="blahblah" />
  <!-- if we write a type="color", it will just ignore it-->

- almost all tags can have a class, <h3 class="the-red-one">The red one</h3>
later u can use the class in css
<!-- to add multiple classes, u can just put a space, example: <h3 class="the-red-one italic">, so now u the text will be both red and italic as italic is a different class that can be styled in the css-->
- classes>ids, because ids are unique and cannot be used for different things, id can be just one,
  example <h1 id="brand">My brand name</h1>
  but like u can also add <a href=#brand>take me to brand</a>, So this will directly take u to the brand section instead of scrolling

### meta tags and heads

it contains infor about the document that usually doesnt get fully displayed.
Everythung that goes in the head tag doesnt get displayed to the user directly.

- utf-8 is a charset that even includes emojis in its set and encodes them correctly.
- title tag: gets shown on the google search engine and on top in tabs
- For default settings of meta and header tags : add html:5 + tab

- how to write initial meta and header tags default
  html:5 + tab

## CSS

Used to give styles
It doesnt change the content, needs html to function
They dont have tags, they have rules for each tag. Example:
h1{
color:red;
}
all h1s will now be red colored.

- anything inside a curly bracket is called a single rule.
- h1 is the selector
- color: is the property (around 350 properties)
- red is the value (around 150 colors, also takes in hex values, hsl)

### properties

h1{

- color:red;
- font-size: 60px;
- font-weight: normal;
- text-decoration: underline/strike-through;
- text-transform:uppercase/capitalise
- border: 3px solid pink;
- border-radius=15px;
  }
  ul {
- list-style: square
  }
  ol{
- list-style:upper-roman
  }

### classes styling

used to style the same type of tags in different ways.

<h1 class="my-webpage-title">Aditi Gupta</h1>
<h1 class="Blog-post">I am the best</h1>
<p class="blog-post">Anything here will have the same style as blog post class i.e. h1 i am the best</p>
now these h1s can be styled differently acc to their class

<style>
    .my-webpage-title{
        color:red;
    }
    <!--dot means look for the class instead of h1 -->
    .Blog-post{
        colo:green;
    }
</style>

### ways to do

- if there is a parent tag and a child tag, some things permeate down to the children some dont.
- prefer styling classes instead of a tag

### Cascade

- if 2 rules have the same specificities then the last one wins. ie the specification that is overwritten wins.
- if a rule has 2 classes, it wins
  example
  .mainbrand.title{
  color:red;
  }
  .title{
  color:green;
  }
  here, color will be red because first rule is more speicific (but if it was .title.title{
  then color:green; would have won
  })
- when a tag and class collide
  example
  <style>
      .title{
          color:red;
      }
      h1{
          color:green;
      }
  </style>
  <h1 class="title">This is a title</h1>
  Here title is more specific, since its a class and h1 is a tag.classes will always be more specific than a tag

- giving score according to rules
  .main{
  color:red -->10 (1 class)
  }

.main.title{
color:green -->20 (2 classes)
}
h1.main{
color:orange -->11 (tag.class)
}
h1{
color:white -->5 (single tag)
}

- ids are more specific than classes 100 score
  example
  #sitebrand{
  color:red
  }
  h1#sitebrand{
  color:blue
  }

- !important is the most important. 1000 score
  .main{
  color:green !important;
  }

### pseudo classes

some things that we only need temporarily
example

- hovering
<style>
.hover-example{
    width:100px;
    height:100px;
    background-color:green;
    color:white;
}
.hover-example:hover{ 
     <!-- this :hover makes the class temporary, like when u wil hover then ony it wil become true and function-->
    width:120px;
    background-color:crimson;
}
<!--hover doesnt work on mobiles-->
</style>

<div class="hover-example">hover over me</div>

- first child
<style>
    .first-child-example{
        color:red;
        border-bottom:2px solid black;
        padding-bottom:30px;
    }
    .first-child-example:last-child{   
        <!-- this gives it to thelast item in the list, first-child will give it to the first child-->
        color:aqua;
        border-bottom:none;
    }
</style>

<ol>
    <li class="first-child-example">First</li>
    <li class="first-child-example">Second</li>
    <li class="first-child-example">Third</li>
</ol>
<!-- but there are many pseudo classes than u can look for on the internet-->

### pseudo elements

an element u want to put to a particular place or position (::), basically something we want statistically displayed

- after:adds an element after the class has given output
<div class="chapter">The chapter ends here</div>
<div class="chapter">The second chapter ends here</div>

.chapter::after{
content:"any sign/picture/text";
color:"red";
text-align:center;
font-size:50px;
}

### box model

It is a kind of a box or a layout that we can setup in our page.
Like div also by default creates a block only, unlike span which means inline text.
So if u put width / margin something, it will just ignore it.
Basically,
Divs : block display
Span: inline text display

so u can change the display also, like
display:"inline-block / flex / inline-flex"
width:100px,
SO NOW THE TEXT WILL BE TREATED AS TEXT ONLY BUT WITH THE BOUNDARIES AND BORDER SPECIFIED

- working of the box model
  div tag:
  .example{
  border: 3px solid red; (div element border)
  padding: 5px (inside the element pushes the text inside)
  margin: 10px (outside the element pushes the other objevts away from the element)
  background-color: white (the color ofthe div element)
  width: 50%(the breadth of the tag)
  }
- - {
    box-sizing:border-box;
    } This makes the boxes include everything (border padding) in the given width only

### Flexboxes

- Flex is defined in the parent.
example:
<style>
.flex-container{
  display:flex;
  color:red;
  border:1pm solid black;
}
.reverse{
  flex-direction:row-reverse / coloumn / coloumn reverse;
}

.jc-right{
justify-content:flex-end/center / space-between /space-around; <!--space between pushes the flexboxes towards the end white space around can leave space at ends-->
height:100px;

  <!--this will take the content to the end of the flexbox-->

}
.jc-sa{
justify-content:space-around;
}
.ai-center{
align-items:flex-end/center/flex-start; <!--this makes them vertically aligning up and down-->
}
.ai-stretch{
align-items:stretch;
height:200px;
}
.no-height{
height:inherit; <!--removes the height and stretches it-->
}
.ai-grow{
//nothing necessary here
}
.ai-grow .box-1{
flex-grow:1;
}
.ai-grow .box-1{
flex-grow:3; <!--in proportion to box-1 it will be three times>
}
</style>

<div class="flex-container reverse jc-right jc-sa">  <!--reverse will change the direction-->
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>

<div class="flex-container ai-stretch">  <!--reverse will change the direction-->
  <div class="box-1 no-height">1</div>
  <div class="box-2 no-height">2</div>
  <div class="box-3 no-height">3</div>
</div>

### CSS Grids

<!-- both flex and grid are display types of classes-->

whnen a whole page is to be shown in small grid

<style>
.grid{
display:grid;
grid-template-columns:1fr 2fr 1fr (1 fraction)
row-gap:10px;
column-gao:10px;
}

.img {
margin:0;
padding:0;
}
</style>
<div class="grid">
<img class="img"
src="">
<img class="img"
src="">
</div>

- a grid making:

.my-page-header{
grid-area:nav-header;
background-color:yellow;
padding:10px;
height:100px;
}

.my-page-footer{
grid-area:nav-footer;
background-color:blue;
padding:10px;
height:500px;
}

.my-page-body{
grid-area:main-body;
background-color:pink;
padding:10px;
height:500px;
}

.my-page-sidebar{
grid-area:nav-side; <!--here grid area and class name dont have to be the same-->
background-color:green;
padding:10px;
}

.my-page{
display: grid;
grid-template-coloumns: 1fr 1fr 2fr 1fr;
grid-template-areas:
"nav-header nav-header nav-header nav-side"
"
"main-body main-body . nav-side"

"nav-footer nav-footer nav-footer nav-footer"
}

</style>

<div class="my-page">
  <header class="my-page-header">The header</header>
  <div class="may-page-body">The body</div>
  <div class="my-page-sidebar">The Sidebar</div>
  <footer class="my-page-footer">The footer</footer>
</div>

### CSS Animations

- firsrt define the keyframe, and the animation what is it supposed to do.
- then define the class where add rule animation and its css
- then add the class in the div or the span to be applied on the text

<style>
@keyframe spin{
  0% {
    transform:rotate(0deg);
  }
  25%{
    transform:rotate(270deg);
  }
  100%{
    transform:rotate(360deg);
  }
}

.spinny-boi{
  animation:spin .5s infinite linear/ease;
  display:inline-block;
  font-szie:30px;
}
</style>

<div class="spinny-boy">@</div>

<style>
  @keyframe color{
    100%,
    0% {
      color:rgb(255,0,0);
    }
    16%{
      color:rgb(255,127,0);
    }
    25%{
      color:rgb(255,255,0);
    }
    35%{
      color:rgb(127,255,0);    }
  }

  .ranbow-boi{
    animation:color 2s infinite linear;
    font-size:35px 
  }
</style>

  <div class="ranbow-boi">Rainbow</div>

- - Easing
    <style>
      @keyframe move{
        to{
          translate:100px <!--the distance it moves-->
        }
      }
      .dancer{
        position:relative/absolute;
        display:inline-block;
        font-size:40px;
        right:0;
        animation: move 1s infinite alternate; <!--animation-name, animation-duration, animation-iteration, animation-direction--> 
        }
      .dancers-list{
        position:relative;
        max-width:300px;
        font-size:30px;
        width:100%;
      }
    
      .linear{
        animation-timing-function:linear;
      }
      .ease{
        animation-timing-function:ease;
      }
      .ease-out{
        animation-timing-function:ease-out;
      }
      .cubic-bezier{
        animation-timing-function:cubic-bezier(0,1,.5,1);
      }
      </style>

      <!--ease-in, ease-in-out-->

<ul class="dancerls-list">
  <li>linear:<span class="linear">@</li>
  <li>ease:<span class="ease">@</li>
  <li>ease-out:<span class="ease-out">@</li>
</ul>

### Input label

<div class="example-group"> 
  <label for="example" class="input-label">Example Text</label>
  <input id="example" class="input-title" placeholder="Enter your text here"/>
</div>

<style>
  .example-group{
    display:"inline-block";
    position:relative;
  }
  .input-title{
    border-color:crimson;
    padding:5px;
    border-radius:5px; <!--for curved squares-->

  }
  .input-label{
    background-color:white;
    color:crimson;
    font-size:11px;
    position:absolute;
    left:25px; <!-- means it starts from extreme left and moves 25px right-->
    top:-7px; <!--means start from top and move 7px top-->
    padding: 0 2px; <!-- 0 is for top and bottom padding, 2 is for left right padding-->
  }
</style>

### Ways to do things

- How to embedd a link in an image?
  <a href="https//:github.com"><img src="nlahblah" /></a>
- How to add a link of the image to redirect to itself?
  <a href="blahblah"><img src="blahblah" /></a>
- to make a circle just edit the css of a div to: border-radius:100%
- try using width/ height: 100% instead of defined pixels because then it doesnt fit into the screen well.
- To link a stylesheet:
- <link rel="stylesheet" href="style.css">

- how to make a post and use classes like a post for a social media website
<div class="social-post">
    <h2 class="user-name">@aditiguptaa__</h2>
    <h3 class="posted-date">posted 10m ago</h3>
    <img 
    class="picture"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB"
    alt="a doggy"
     />
     <p class="caption"> I am a cute dog</p>
</div>

## JavaScript

A single threaded language, only one thing happens at a time. It goes line by line.

### Predefined

- Const: used to define a variable whose value cant be changed later.
- let: used to define a variable which can be changed later (var: old way)
- console.log(): to print
- semi colons are optional

### Ways to do

- <script src="./experiments.js"></script> <!-- will link the html to an external JS file.-->
- Ctrl+shift+I: opens dev tools
- JS is loaded in the end: bec it takes time for people to see your website understand it and then decide what they wanna do in the end. so it is placed in the end of the body
- F5 to refresh the browser
- NaN is not a number <!--isNaN(5): false because 5 is a number-->
- parseInt('lol'):NaN

### String

- add a \ to escape a string quotes example:
  'Hi My name is '\Aditi'. I am persuing Btech' <!-- the string will end before aditi if backslash not added-->
- to add a backslash, just use \\
- "Hello" double quotes , 'Hello'single quotes, `Hello`backticks All are valid
- with backticks u can write multiple lines of strings

- String concatination:
  const firstName="Brian";
  const lastName="Holt";
  const sentence= "Hello " + firstName + " " + lastName + "! " + 'How are you?"

OR

const sentenceWithTemplate=`Hello ${firstName} ${lasName}! How are you?`

### Boolean

- let isAditiCool=true
  console.log(isAditiCool)

### Number

- only one type called number (float, interger everything)
  its a lil imprecise

### if else

if (2+2===4){ <!--usually 3 equal signs for evaluation-->
console.log("ofc");
}
else if(2+3<=6){
console.log("make dance space")
}
else {console.log("sab kaise aa gye)}

- Single equal: assigns value
- Double Equal: will only check if the thing's true even if of not same type(will give 2+2=="4") will be considered true
- Triple Equal: checks the exact same thing on LHS and LRHS

### Loops

- while
  let friendsAtYourParty=0;
  while(friendsAtYourParty<10){
  console.log("AnotherFriendJoinedYourParty");
  friendsAtYourParty=friendsAtYourParty+1;  
  }
  console.log(friendsAtYourParty)

- if
  friendsAtYourParty=0
  for(let i=0;i<10, i++){
  friendsAtYourParty++;
  }
  console.log(friendsAtYourParty);

  console.log("".padStart(timesToRepeat,Character)); <!-- does the same thing as printing letters in a string-->

### Operators

let Aditi=20
Aditi=Aditi+1;
(Aditi+=) u can use +,-,\*,/
(Aditi++) <!--first evaluates then adds-->
(++Aditi)

2\*\*3=2^3=8

### Functions

given an input, it gives an output; the code can be used over and over and again so heavily utilised.

function addTwo(number){
return number+2;
}
newNumber=addTwo(6);
console.log(newNumber);

not necessary to return anythung, it can simply log also.

- to call a function u still have to put (), even if no parameters are given to it.
- you can assign a function to a variable and call the variable later
  ex:
  let meow=function(){
  console.log("mewwwnwhjbdcbd")
  }

console.log(meow());

- const callHer=(digits)=>{
  console.log("dial")
  }

Three ways to call a function

- function bark(){
  console.log("bhao bhao")
  }
- const meow=function (){
  console.log("meoaaawwwwwwooo")
  }
- const chirp=(birdNoise)=>{
  console.log("chirp chirp")
  }

### Scope

- It means a variable cant be accessed or is out of scope if it is tried to call outside the block. (curly brackets)
  ex:
  let friends=0;
  for(let i=0;i<10;i++){
  console.log(i);
  friends++;
  }
  console.log(i); <!-- here i goes out of scope and will be gone as it has already been used in the upper block and the variable is hence exhausted-->
  console.log(friends); <!-- this however will work, because it is declared outside of the loop. mainly the delaration matters-->

- The code is executed line by line, however in case of a function, it is pushed to the top automatically.
  therefore
  console.log(myName;) <!-- this wont work-->
  const myName="Aditi"

sayHi();
function sayHi(){ <!--this will work and it only happens in the case of functions-->
console.log("HI")
}

### Builtins

Already built in functions for you

- String
- - toLowerCase()
  <!--example:
  const sentence="ThiS HaS a WeIrD CaSiNg.toLowerCase()
  OR const lowerCaseSentence=sentence.toLowerCase()-->
- - toUpperCase()

- - includes: checks if one string contains another string
  <!-- const testOne="The quick brown fox jumps over the lazy dog"
  const testTwo="I am cute"
  const testThree="execute"
  const test="cute"

console.log(testOne.includes(test)) : false
console.log(testTwo.includes (test)): true
console.log(testThree.includes(test)): true-->

- Math
- - math.round();
  <!-- example:
  let number=5.8;
  let roundedNumber=math.round(number);-->
- - math.floor(): always rounds down
- - math.ceil(): always rounds up
- - math.random(): a random number between 0 and 1
  <!-- const number=math.random();
  console.log(number);>

- Date
- - date.now(): gives the number of miliseconds that have elapsed since january1st, 1970 : called the linux EPOCH

### Objects

const person={
name:"Aditi", <!--name is the key , Aditi is the value-->
city:"New Delhi",  
 State: "Delhi"
favouriteFood:"Rasmalai",
inStress:true,
};
const propertyName ='city';

<!-- You cant have multiple keys of the same name, but same values can be there-->

console.log(person);
console.log(person.name);
console.log(person.city);
console.log(person[propertyName or 'city']);

<!--square brackets are used when you want to use a variable name as the accessor-->

<!--an object can even have thei own function-->

const dog={
name:"dog",
speak(){
console.log("woof woof");
},
}
dog.speak();

- Nested Objects
  const person={
  name:{
  first:"Aditi",
  last:"Gupta"
  },
  age:20;
  location:{
  country:"India",
  state:"Delhi",
  pincode:"110058" },
  }
  console.log(person.name.first);

- Nested functions as objects
  const person={
  name:{
  first:"Aditi",
  last:"Gupta"
  },
  age:20;
  location:{
  street:"janakpuri"
  country:"India",
  state:"Delhi",
  pincode:"110058" },

  getAddress(){
  return `${this.name.first} ${this.name.last} ${this.location.street} ${this.location.pincode}`; <!--here getAdress function is using the keys of the same object, therefore 'this' is used to call them-->
  },

  }
  console.log(person.getAdress());

### console

It is also an object full of functions

- console.log
- console.info
- console.error

### Math

- math.ceiling
- math.floor
- math.PI

### Context

- console.log(this===window); <!--'this' out of anything means windows context-->
- comsole.log(scrollY);
- - console.log(this.scrollY);
- - console.log(window.scrollY); <!--tells the location of the scroll-->

### Arrays

Ordered lists of data (data can be random, mixed or heterogenious)
const daysOfTheWeek=[
"monday","tuesday","wednesday"
]

console.log(daysOfTheWeek); <!--whole array printed-->
console.log(daysOfTheWeek[0]); <!--monday printed-->
console.log(daysOfTheWeek[2];)

const primeNumbers=[1,2,3,5,7,11,13,17]

- console.log(primeNumbers.length); <!--ans:8-->
- console.log(primeNumbers.join(" | ")) <!-- turns the whole array into a string and uses | as the parameter between them-->
- array.push({teacher:"Aditi" , course:"Hi its me"}): pushes the object to the last
- array.pop(): removes the last in the list
- array.shift(): removed first thing in the list;
- arrays unshifting(): undos the shift;
- const aditi=array.pop(): thus the last thing in the array will be assigned to aditi variable
- to replace something from the list, array[1]={teacher:"narendar", course="manufacturing processes"}
- just change something particular then array[2].courses="manufacturing processes";

### Iterating through arrays

const cities=["amsterdam", "india", "seattle", "delhi"]

- method 1
  for (let i=0;i<cities.length;i++){
  console.log(cities[i]);
  }

- method 2
  (forEach is a builtin of arrays and it takes in a function that does something to each array element)
  function logCity(city){
  console.log(city)
  }
  cities.forEach(logCity) : here forEach means each item, so each item is being passed in logCity function.

- methos 3
  timesCalled=0;
  (for each is used and the function is placed inside only)
  cities.forEach(timesCalled, function (city){
  console.log(city);
  timesCalled++;
  })

## Putting it together

### Server

1. First your write your code
2. you put it or host it out somewhere so other people can get it
   this can be on Amazon web services/ github/ file: means your own computer's file system is your server.
3. A person visits your website. A lot of things are followed then
   a. their browser makes a request to your server
   b. you send a copy of index.html to them
   c. your bwoser reads the html and then reads script tag and goes their to load it
   d. browser makes another req for the experiment.js file
   e. server sends a copy of that file
   f. browser reads and executes the javascript.

This works when you host your website on a proper server and not just run on your computer. Right now the client and server both is your computer only as the computer is trying to fake the whole process where it makes the hardrive the server and local file as client.

A real server can do a lot more, it can load databases, call other servers, or modify in flight requests. But right now we are just rendering the file unmodified.

### The DOM

Document Object Model : defines how javaScript interacts with HTML/CSS

<div class="red-square"></div>

<style>
  .red-square{
    background-color:red;
    width:100px;
    length:100px;
  }
</style>

- document.getElementById("")
  you can get the element that has a specific id
- document.appendChild()
  any tag/class /img can be added

- document.querySelector
  const mySquare= document.querySelector('.red-square')
  mySquare.style.background-color="green"
  <!--now the object mySquare becomes a handle on the class red-square and it can overwrite CSS and show you the changes right away. Here style is also an object within the mySquare object-->
  mySquare.style.width=300px <!--u can do all this on the console-->

mySquare.classlist: gives all the classes of mySquare
mySquare.classlist.add('lol-class'): adds a class on this object
$0: on console gives the last thing u inspected

- document.querySelectorAll
  even changes the HTML

<li class="js-modify">Hi</li>
<li>Hi</li>
<li class="js-modify">Hi</li>

const elementsToChange=document.querySelectorAll('js-modify')
since they are plural, and in the form of a list,
for (let i=0;i<elementsToChange.length;i++){
const currentElement=elementsToChange[i];
currentElement.innerText="Modified"
}

give a variable to any tag and edit its innerhtml
x=$0
x.innerHTML="<em>lollolo</em>

- innerHTML: if em tag is used, then only lollolo will be displayed
- innerText: whole em tag with lollol will be displayed

- addEventListener
  <button class="event-button">Click Here</button>
  let button=document.querySelector(".even-button");
  button.addEventListener("click",function(){
  alert('Hey!')
  })

same way

1. input.addEventListener("keyup",function(){ <!--keyup is when u start writing-->
   paragraph.innerText=input.value;
   })

<input class="color-input" placeholder="type a color here!">
<div class="color-box"></div>
const input=document.querySelector(".color-input");
const paragraph=document.querySelector(".color-box")
2. input.addEventListener("change",function(){ <!--change is when after doing the action, something else is also done like a click-->
  paragraph.style.backgroundColor=onput.value
})
<!-- so basically whenever the input has an event, it is being listened and the action is taken-->

- Event Bubbling
  <!--if you want to give js to multiple buttons, you can just do that in their parent class-->
  <div class="button-class">
    <button>1</button>
    <button>2</button>
    <button>3</button>
  </div>

const button1=document.querySelector(".button-class")
button1.addEventListener("click",function(event){
alert("You just pressed button", `${event.target.innerText}`); <!--here event.target means button tag-->
})

- Number.parseInt("5"):will convert a string into an integer
