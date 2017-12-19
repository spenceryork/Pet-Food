"use strict";


let loadDogFood = function() {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", function() {
        let foodData = JSON.parse(event.target.responseText);
        // for loop that gets brand names
        for (let i = 0; i < foodData.dog_brands.length; i++){
            let table = document.getElementById("dogTable");
            let dogRow = document.createElement("tr");
            let brandCell = document.createElement("td");
            let typeInfo = document.createElement("td");

            //Set object to a variable
            let dogBrands = foodData.dog_brands;
            //This is how you pull out the individual brand names. Each time through the JSON object '[i]' I'm colelction the brand name '.name'
            console.log("brand names", dogBrands[i].name);
            dogRow.appendChild(brandCell);
            brandCell.innerHTML += dogBrands[i].name;
            table.appendChild(dogRow);
           
                //While iterating through the main object I also want to iterate through the brand objects to get the types within each brand object.
                for (let j = 0; j < foodData.dog_brands.length; j++) {   
                    // Set variable to hold the brand types.
                    let brandType = dogBrands[i].types[j].type;
                    console.log("Dog brand type", brandType);

                    
                    //While iterating through the types objects I also want to iterate through the Volumes arrays within each Type object to grab the name and price.
                    for (let k = 0; k < foodData.dog_brands.length; k++) {
                        let brandVolume = `Type: ${brandType} Size: ${dogBrands[i].types[j].volumes[k].name}, Price: $${dogBrands[i].types[j].volumes[k].price} : `;
                        console.log("brandVolumes", brandVolume);
                        dogRow.appendChild(typeInfo);
                        typeInfo.innerHTML += brandVolume;
                    }
                }

            }
        }
    );

    myRequest.open("GET", "dogfood.json");
    myRequest.send();
    myRequest.addEventListener("error", function(){
        console.log("something is wrong, request failed.");
    });
};

let loadCatFood = function() {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", function() {
        let foodData = JSON.parse(event.target.responseText);
        // for loop that gets brand names
        for (let i = 0; i < foodData.cat_brands.length; i++){
            let table = document.getElementById("dogTable");
            let catRow = document.createElement("tr");
            let brandCell = document.createElement("td");
            let typeInfo = document.createElement("td");

            //Set object to a variable
            let catBrands = foodData.cat_brands;
            //This is how you pull out the individual brand names. Each time through the JSON object '[i]' I'm colelction the brand name '.name'
            console.log("brand names", catBrands[i].name);
            catRow.appendChild(brandCell);
            brandCell.innerHTML += catBrands[i].name;
            table.appendChild(catRow);
           
                //While iterating through the main object I also want to iterate through the brand objects to get the types within each brand object.
                for (let j = 0; j < foodData.cat_brands.length; j++) {   
                    // Set variable to hold the brand types.
                    let brandType = catBrands[i].types[j].type;
                    console.log("Dog brand type", brandType);

                    
                    //While iterating through the types objects I also want to iterate through the Volumes arrays within each Type object to grab the name and price.
                    for (let k = 0; k < foodData.cat_brands.length; k++) {
                        let brandVolume = `Type: ${brandType} Size: ${catBrands[i].types[j].volumes[k].name}, Price: $${catBrands[i].types[j].volumes[k].price} : `;
                        console.log("brandVolumes", brandVolume);
                        catRow.appendChild(typeInfo);
                        typeInfo.innerHTML += brandVolume;
                    }
                }

            }
        }
    );

    myRequest.open("GET", "catfood.json");
    myRequest.send();
    myRequest.addEventListener("error", function(){
        console.log("something is wrong, request failed.");
    });
};


loadDogFood();
loadCatFood();


