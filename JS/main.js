"use strict";
let parag = document.getElementById("ourText").innerText;
let button = document.getElementById("changeToCod");
button.onclick = function changeToCod() {
    let newText = "";
    for (let i = 0; i < parag.length - 1; i++) {
        let world = String(parag[i].codePointAt(parag[i])) + ' , ';
        newText = newText + world;
    }
    document.getElementById("ourText").innerText = newText;
}
let buttonUniq = document.getElementById("longest");
buttonUniq.onclick = unicString;
function unicString() {
    let comb = [];
    let substr = '';
    let lastStr = parag;
    for (let i = 0; i < lastStr.length - 1; i++) {
        if (!(substr.includes(lastStr[i]))) {
            substr += lastStr[i];
        }
        else {
            comb.push(substr);
            lastStr = lastStr.slice(lastStr.indexOf(lastStr[i] + 1));
            substr = '';
        }
    }
    let longest = '';
    for (let i of comb) {
        if (i.length > longest.length) {
            longest = i;
        }
    }
    document.getElementById("ourText").innerText = longest;
}


function sortTable(i) {
    let sortedRows = Array.from(table.rows).slice(1);
    sortedRows.sort((rowA, rowB) => rowA.cells[i].innerHTML > rowB.cells[i].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedRows);
    console.log(Event.AT_TARGET);
}



