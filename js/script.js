const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("select");
const getData = async function(numUsers){

    const userRequest = await fetch(

        `https://randomuser.me/api?results=${numUsers}`
    );

    const data = await userRequest.json();
    
    const userResults = data.results;
    // console.log(userResults);

    displayUsers(userResults);

};

const displayUsers = function(userResults){
    randomFolks.innerHTML = "";

    for(let user of userResults){

// console.log(user);
let country = user.location.country;
let name = user.name.first;
let imageUrl = user.picture.medium;

console.log(country);

var userDiv = document.createElement("div");

userDiv.innerHTML=
                   `<h3>${name}</h3>
                   <p>${country}</p>
                   <img src=${imageUrl} alt ="User avatar" />
                   `;
                 
                   randomFolks.append(userDiv);
                
                // console.log(userDiv);       
    }
    
};
selectUserNumber.addEventListener("change", function(e){
// numUsers=1;
numUsers = e.target.value;

getData(numUsers);

});
getData(1);





