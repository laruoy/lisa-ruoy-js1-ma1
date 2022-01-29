// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

cat.complain();



// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "<h3>Updated heading</h3>";




// Question 3

heading.style.fontSize = "2em";



// Question 4

// const heading = document.querySelector("h3");

console.dir(heading.className);

heading.className = "subheading";

console.log(heading.className);

// One could also use classList instead of className like this: heading.classList.add("subheading");



// Question 5

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);

for(let i = 0; i < paragraphs.length; i++) {
    // console.dir(paragraphs[i].innerHTML);
    
    paragraphs[i].style.color = "red";

}



// Question 6

const resultsContainer = document.querySelector(".results");

console.log(resultsContainer.innerHTML)

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.background = "yellow";



// Question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Could not get this one, since I don't understand the parameters
// function catList(list) {
    
// };


// Qestion 8

// I don't understand the parameters, need som help with this in the future
const catContainer = document.querySelector(".cat-container");

createCats.forEach(cats => {
    catContainer.innerHTML += `<div>${cats.i}</div>
                               <h4>${cats.name}</h4>
                               <p>${cats.age}</p>`
});

createCats.cats();
