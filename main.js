let date = new Date();
let year = date.getFullyear();

document.querySelector('h1').innerHTML='&copy;' + year;

let currendate = docuemtn.lastModified;

document.querySelector('dive').textContent = `lastupdate: + ${currendate}`;
