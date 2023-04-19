var Name = document.getElementById("Name")
var Surname = document.getElementById("Surname")
var Age = document.getElementById("Age")
var add = document.getElementById("add")
var deleteFirst = document.getElementById("deleteFirst")
var deleteLast = document.getElementById("deleteLast")
var inside = document.getElementById("inside")

add.addEventListener("click", function() {
    if (Name.value && Surname.value && Age.value >= 1) {
        var row = inside.insertRow(-1)
        var firstCell = row.insertCell(0)
        var secondCell = row.insertCell(1)
        var thirdCell = row.insertCell(2)
        firstCell.innerText = Name.value
        secondCell.innerText = Surname.value
        thirdCell.innerText = Age.value
        Name.value = ""
        Surname.value = ""
        Age.value = ""
    } else {
        alert("Užpildykite visus laukus / Amžius ne mažesnis nei 1")
    }
})


deleteFirst.addEventListener("click", function (){
    inside.deleteRow(0);
})

deleteLast.addEventListener("click", function(){
    inside.deleteRow(-1)
})

