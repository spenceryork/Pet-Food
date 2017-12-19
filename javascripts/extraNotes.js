"use strict";


let loadDogFood = function() {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", function() {
        let foodData = JSON.parse(event.target.responseText);
        // for loop that gets brand names
        for (let i = 0; i < foodData.dog_brands.length; i++){
            // let table = document.getElementById("dogTable");

            let dogRow = document.getElementById("dogBrandNames");
            // let dogBrand1 = document.createElement("td");
            // let dogBrand2 = document.createElement("td");
            //Number of times the loop iterates through entire object.
            console.log("What is foodData.dog_brands.length", foodData.dog_brands.length);
            //This is the entire object
            console.log("What is foodData.dog_brands", foodData.dog_brands);
            //Set object to a variable
            let dogBrands = foodData.dog_brands;
            //This is how you pull out the individual brand names. Each time through the JSON object '[i]' I'm colelction the brand name '.name'
            console.log("brand names", dogBrands[i].name);
            dogRow.innerHTML += dogBrands[i].name;
            // dogBrand1.appendChild(dogBrands[i].name);
            // dogRow.appendChild(dogBrand2);

           
                //While iterating through the main object I also want to iterate through the brand objects to get the types within each brand object.
                for (let j = 0; j < foodData.dog_brands.length; j++) {   
                    // Set variable to hold the brand types.
                    let brandType = dogBrands[i].types[j].type;
                    console.log("Dog brand type", brandType);
                    
                    //While iterating through the types objects I also want to iterate through the Volumes arrays within each Type object to grab the name and price.
                    for (let k = 0; k < foodData.dog_brands.length; k++) {
                        let brandVolume = `Type: ${brandType} Size: ${dogBrands[i].types[j].volumes[k].name}, Price: $${dogBrands[i].types[j].volumes[k].price}`;
                        console.log("brandVolumes", brandVolume);
                        // let dogCell = dogRow.insertCell(0);
                        // dogCell.innerHTML += brandVolume; 
                    }
                }

            }
        }
            
        // Add Types/Prices to DOM
    );

    myRequest.open("GET", "dogfood.json");
    myRequest.send();
    myRequest.addEventListener("error", function(){
        console.log("something is wrong, request failed.");
    });
};

// Add items to DOM
            // let table = document.getElementById("dogTable");
            // let dogRow = table.insertRow(-1);
            // let dogCell = dogRow.insertCell(-1);
            // dogCell.innerHTML += foodData.dog_brands[i].name;



// function outputToDom(dogArray) {
//     dogArray.forEach(function (brand) {
//         dogCell1.innerHTML += brand.name;
//     }
//     );}

loadDogFood();
// outputToDom(foodData.dog_brands.name);


module.exports = { loadDogFood };