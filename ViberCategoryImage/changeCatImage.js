// executes function on page load
document.body.onload = detectCategory;

// identify category and pass in appropriate image
function detectCategory (){

// store page URL
  var categoryUrl = window.location.href;

//TEMP - logs page URL
  console.log(categoryUrl)

// displays img based on page URL
  if (categoryUrl === "https://support.platypusplayground.co/en/getting-started") {
    addElement("https://cdn.glitch.com/8881d1c6-e9a1-4663-9aeb-aab50495843e%2Fworld.png?1581375273677")
  } else { addElement("https://cdn.glitch.com/8881d1c6-e9a1-4663-9aeb-aab50495843e%2Frocket%20(1).png?1581374641997")
  }
}

// image add function
function addElement (img) {

  // create a new div element
  var newDiv = document.createElement("img");
    // set img attributes
    newDiv.setAttribute("src", img);
    newDiv.setAttribute("width", "48");
    newDiv.setAttribute("height", "48");

  // and give it some content
  var newContent = document.createTextNode("");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("back-home");
  document.body.insertBefore(newDiv, currentDiv);
}
