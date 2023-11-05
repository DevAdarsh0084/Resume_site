function add(){
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");


    // let a = document.getElementById("we");
    // let b = document.getElementsById("weaddbutton");

    // a.insertBefore(newNode , b);

    document.getElementById("newform").appendChild(newNode);
    
}



function add1(){
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");


    // let a = document.getElementById("we");
    // let b = document.getElementsById("weaddbutton");

    // a.insertBefore(newNode , b);

    document.getElementById("new1form").appendChild(newNode);
    
}



function add2(){
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");


    // let a = document.getElementById("we");
    // let b = document.getElementsById("weaddbutton");

    // a.insertBefore(newNode , b);

    document.getElementById("new2form").appendChild(newNode);
    
}


function add3(){
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");


    // let a = document.getElementById("we");
    // let b = document.getElementsById("weaddbutton");

    // a.insertBefore(newNode , b);

    document.getElementById("new3form").appendChild(newNode);
    
}


function add4(){
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");


    // let a = document.getElementById("we");
    // let b = document.getElementsById("weaddbutton");

    // a.insertBefore(newNode , b);

    document.getElementById("new4form").appendChild(newNode);


}


function add5(){
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");


    // let a = document.getElementById("we");
    // let b = document.getElementsById("weaddbutton");

    // a.insertBefore(newNode , b);

    document.getElementById("new5form").appendChild(newNode);

    
}



















function generateCv(){


let nameDisplay = document.getElementById("nameField").value;
let nameEntry = document.getElementById("name");

nameEntry.innerHTML = nameDisplay;


let branchDisplay = document.getElementById("branchField").value;
let branchEntry = document.getElementById("heading");

branchEntry.innerHTML = branchDisplay + "  Student | Looking for Full time opportunites";


let branchName = document.getElementById("branchName");
branchName.innerHTML = "Btech , " +  branchDisplay;

let contactField = document.getElementById("contactField").value;
let contactDisplay = document.getElementById("logo2");

contactDisplay.innerHTML = `<i class="fa-sharp fa-solid fa-phone"></i> ${contactField}`;

let emailField = document.getElementById("emailField").value;
let emaildisplay = document.getElementById("logo1");

emaildisplay.innerHTML = `<i class="fa-solid fa-globe"></i>  ${emailField}`;

let linkedinField = document.getElementById("linkedinField").value;
let linkedinDisplay = document.getElementById("logo3");

linkedinDisplay.innerHTML = ` <i class="fa-brands fa-linkedin"></i> ${linkedinField}`;


let githubField = document.getElementById("githubField").value;
let githubDisplay = document.getElementById("logo4");

githubDisplay.innerHTML = ` <i class="fa-brands fa-github"></i> ${githubField}`;

let cityField = document.getElementById("cityField").value;
let cityDisplay = document.getElementById("location");

cityDisplay.innerHTML = `<i class="fa-solid fa-calendar"></i> ${cityField}`;


document.querySelector(".container").style.display = "none";
document.querySelector(".form-container").style.display = "block";





let work = document.getElementsByClassName("weField")[0];

let str = ''

for(let e of work){
    str = str + `<li> ${e.value} </li>`;
}


document.getElementById("achieve").innerHTML = str;







let exp = document.getElementsByClassName("expField");

let str1 = ''

for(let e of exp){
    str1 = str1 + `<li> ${e.value} </li>`;
}


document.getElementById("exp").innerHTML = str1;

}


function printCv(){
    window.print();
}










