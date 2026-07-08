const API =
"https://script.google.com/macros/s/AKfycbwPbdfNQ5ricGadTssdEclKI3f2VQdjHXfwkU8evcemJWc2dm1v8kMRHxuhotepgDShLA/exec";

let apps=[];

async function loadApps(){

const response=await fetch(API);

apps=await response.json();

render(apps);

}

function render(list){

const container=document.getElementById("apps");

container.innerHTML="";

list.forEach(app=>{

container.innerHTML+=`

<div class="card">

<img src="${app.icon}" class="icon">

<h2>${app.name}</h2>

<p class="description">

${app.description}

</p>

<div class="info">

<span class="category">

${app.category}

</span>

<span class="version">

v${app.version}

</span>

</div>

<div class="date">

📅 ${app.updated}

</div>

<a
class="download"
href="${app.link}"
target="_blank">

Download

</a>

</div>

`;

});

}

function searchApps(){

const value=document
.getElementById("search")
.value
.toLowerCase();

render(

apps.filter(app=>

app.name.toLowerCase().includes(value)

)

);

}

window.onload=()=>{

loadApps();

document
.getElementById("search")
.addEventListener("input",searchApps);

};
