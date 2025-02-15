let DOG_URL = "https://dog.ceo/api/breeds/image/random";
let doggos = document.getElementById("dog-target"); //this is the div id

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.text();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const dogDesc = JSON.parse(processedResponse);
      const img = document.createElement("img"); //creates a tag
      img.src = dogDesc.message;
      img.alt = "cute dog";
      doggos.appendChild(img); //append child makes u add anything to a particular element (can be a tag or a class)
    })
    .catch(function (error) {
      console.error(); //catches error
    });
}

document.getElementById("dog-btn").addEventListener("click", addNewDoggo());

promise
  .then(function (response) {
    const processingPromise = response.JSON();
    return processingPromise;
  })
  .then(function (processedResponse) {
    //const dogDesc = JSON.parse(processedResponse); this step is not required if response.json is directly used above instead of first converting to text
    const img = document.createElement("img"); //creates a tag
    img.src = dogDesc.message;
    img.alt = "cute dog";
  });

//Now using the async function

DOG_URL = "https://dog.ceo/api/breeds/image/random";
doggos = document.getElementById("dog-target");

async function addNewDoggo() {
  const promise = await fetch(DOG_URL);
  const processedResponse = await promise.json();
  const img = document.createElement("img");
  img.src = processedResponse.message;
  doggos.appendChild(img);
}
document.getElementById("dog-btn").addEventListener("click", addNewDoggo());
