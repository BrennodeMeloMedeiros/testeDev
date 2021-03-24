const table = document.querySelector(".table")
const tableBody = table.querySelector("tbody")

arrayData = [
    "nome",
    "data_nasc",
    "cpf",
    "rg",
    "email",
    "celular",
]

for(person in data){
    let objPersonData = [];
    const newRow = document.createElement("tr")
    newRow.setAttribute("scope", "row")
    tableBody.appendChild(newRow)

    personData = data[person];
    for(info of arrayData){
        const newColumn = document.createElement('td')
        newColumn.setAttribute("scope", "col")
        newColumn.innerText = info
        newRow.appendChild(newColumn);
    }
}