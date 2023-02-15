/*

const body = document.body;

function displayImages() {
    // Ada Lovelace
    const adaDiv = document.createElement('div');
    const adaImg = document.createElement('img');
    adaImg.src = "images/AdaLovelace.jpg";
    adaImg.className = 'img';

    const adaNameP = document.createElement('div');
    const adaNameText = document.createTextNode('Ada Lovelace');
    adaNameP.appendChild(adaNameText);

    adaDiv.appendChild(adaImg);
    adaDiv.appendChild(adaNameP);
    body.appendChild(adaDiv);

    // Alan Turing
    const alanDiv = document.createElement('div');
    const alanImg = document.createElement('img');
    alanImg.src = "images/AlanTuring.webp";
    alanImg.className = 'img';

    const alanNameP = document.createElement('div');
    const alanNameText = document.createTextNode('Alan Turing');
    alanNameP.appendChild(alanNameText);

    alanDiv.appendChild(alanImg);
    alanDiv.appendChild(alanNameP);
    body.appendChild(alanDiv);

    // Charles Babbage
    const chuckDiv = document.createElement('div');
    const chuckImg = document.createElement('img');
    chuckImg.src = "images/CharlesBabbage.webp";
    chuckImg.className = 'img';

    const chuckNameP = document.createElement('div');
    const chuckNameText = document.createTextNode('Charles Babbage');
    chuckNameP.appendChild(chuckNameText);

    chuckDiv.appendChild(chuckImg);
    chuckDiv.appendChild(chuckNameP);
    body.appendChild(chuckDiv);

    // Steve Jobs 
    const steveDiv = document.createElement('div');
    const steveImg = document.createElement('img');
    steveImg.src = "images/SteveJobs.jpg";
    steveImg.className = 'img';

    const steveNameP = document.createElement('div');
    const steveNameText = document.createTextNode('Steve Jobs');
    steveNameP.appendChild(steveNameText);

    steveDiv.appendChild(steveImg);
    steveDiv.appendChild(steveNameP);
    body.appendChild(steveDiv);

    // Bill Gates
    const billDiv = document.createElement('div');
    const billImg = document.createElement('img');
    billImg.src = "images/BillGates.webp";
    billImg.className = 'img';

    const billNameP = document.createElement('div');
    const billNameText = document.createTextNode('Bill Gates');
    billNameP.appendChild(billNameText);

    billDiv.appendChild(billImg);
    billDiv.appendChild(billNameP);
    body.appendChild(billDiv);

    // Elon Musk
    const elonDiv = document.createElement('div');
    const elonImg = document.createElement('img');
    elonImg.src = "images/ElonMusk.png";
    elonImg.className = 'img';

    const elonNameP = document.createElement('div');
    const elonNameText = document.createTextNode('Elon Musk');
    elonNameP.appendChild(elonNameText);

    elonDiv.appendChild(elonImg);
    elonDiv.appendChild(elonNameP);
    body.appendChild(elonDiv);

}

displayImages(); 

*/

/*
const body = document.body;

class person {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }

}

let ada = new person('Ada Lovelace', 'images/AdaLovelace.jpg');
let alan = new person('Alan Turing', 'images/AlanTuring.webp');
let chuck = new person('Charles Babbage', 'images/CharlesBabbage.webp');
let steve = new person('Steve Jobs', 'images/SteveJobs.jpg');
let bill = new person('Bill Gates', 'images/BillGates.webp');
let elon = new person('Elon Musk', 'images/ElonMusk.png');



let people = [ada, alan, chuck, steve, bill, elon];

for(let i = 0; i <= people.length; i++) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = people[i].url;
    div.className = "div";
    img.className = "img";

    const p = document.createElement('p');
    const text = document.createTextNode(people[i].name);
    p.appendChild(text);

    div.appendChild(img);
    div.appendChild(p);
    body.appendChild(div);
}

*/

let people = [
    {name: "Ada Lovelace", url: "images/AdaLovelace.jpg"}, 
    {name: "Alan Turing", url: "images/AlanTuring.webp"},
    {name: "Charles Babbage", url: "images/CharlesBabbage.webp"}, 
    {name: "Steve Jobs", url: "images/SteveJobs.jpg"},
    {name: "Bill Gates", url: "images/BillGates.webp"},
    {name: "Elon Musk", url: "images/ElonMusk.png"}
];

people.forEach((person) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    img.src = person.url;
    p.textContent = person.name
    div.append(img, p);
    document.body.append(div);
});