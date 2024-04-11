function elaveet() {
    let table = document.getElementById("tablem").getElementsByTagName('thead')[0];
    let newTable = table.insertRow(table.rows.length);
    let cell1 = newTable.insertCell(0);
    let cell2 = newTable.insertCell(1);
    let cell3 = newTable.insertCell(2);
    let cell4 = newTable.insertCell(3);
    let cell5 = newTable.insertCell(4);

    let numbers = table.rows.length;
    cell1.innerHTML = numbers + -1;
    cell2.innerHTML = "<input type='text' class='name' placeholder='Ad'>";
    cell3.innerHTML = "<input type='text' class='surname' placeholder='Soyad'>";
    cell4.innerHTML = "<input type='text' class='age' placeholder='Yas'>";
    cell5.innerHTML= '<button id="onbutton" onclick="removeRow(this)">Sil</button>' +
    '<button id="offbutton" onclick="saveRow(this)">Kaydele</button>'

}

function removeRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function saveRow(button) {

}


