# Talking to Servers in frontend

Talking to servers: A part of frontend development. Since many servers are involved and you might have to load data from someone elses server, then u use these methods.

## AJAX

(Asynchronous javaScript and XML)
It was used to request data from the server without reloading or refreshiing the browser. The data used to come back in XML, bUT NO ONE USES IT NOW.
Now we use JSON. Data is received in JSON. and now instead of doing or calling it AJAX, we simply call it fetch.

## JSON: javaScript Object Notation

Almost all JSON is valid javaScript. JSON requires '' on both key and value while JS doesnt. It is used to send info back and forth the front and backend devs.

const responseFromServer='{"name":"luna","age":"2"}'
dog={"name":"luna","age":"2"}

- JSON.parse(responseFromServer): will convert string to JSON.
- JSON.stringify(dog,null,4)<!--null is just a function u can use to modify data while converting it to JSON but no one uses it so always put null only, 4 gives it indentation of 4-->

### Points To Remember

- Always use double quotes in JSON.
- Numbers dont have double quotes.
- JSON can have strings, numbers, booleans, arrays, objects (nested).
- JSON cannot have a comma after the last element

### Hacks

- Escape double quotes using \ "\""
  this way a single " can be printed.

## API: Application Programming Interface

It means there is a server somewhere that we will be talking to.

api.example.com/weather?zipcode=110078&today=tomorrow

<!--address of the website/API?additional info passed thru server. (its a key value pair). The variable you choose depends on what the server expects.-->

- Promises
  When fetch was used, we used promise with it because it means that you have to wait for the response. Then u add .then to add what is to be done after getting the response. Inside then, you usually add the function and the input of the function can be named anything as it is the result of the promise only. So the name given is merely for processing.

- Async Function, await response.
  It gives the object as the response only instead of nested .thens
  Await accepts the promise and waits for the response. Await is only valid for async functions.
  These functions always return promises as their response. like if we console them they will give out"promise{}"response, after adding await we can use the function.
  example:

async function tellName(){
return "Brian";
}

1. console.log("a promise",tellName())

2. getName.then(function(name){
   console.log("the real name is",name);
   })

The second method would give out the right result

### GET Req

- Whenever you try to pull information out of an API

### POST req

- when you have to send information to an API
