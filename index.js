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
    
    _count = 0;
    for(info of arrayData){
        _count +=1;

        const newColumn = document.createElement('td')
        newColumn.setAttribute("scope", "col")
        newColumn.innerText = personData[info]
        objPersonData[info] = personData[info]
        newRow.appendChild(newColumn);

        if(_count == arrayData.length){
            const newButton = document.createElement("button")
            newButton.setAttribute("class", "btn btn-primary btn-sm")
            newButton.innerText = "Detalhes"

            const newColumn = document.createElement('td')
            newColumn.setAttribute("scope", "col")
            newColumn.appendChild(newButton)
            newRow.appendChild(newColumn)

            let alertText = "";
            for(attribute in objPersonData){
                alertText+= `\r\n ${attribute} = ${objPersonData[attribute]}`
            }

            newButton.addEventListener("click", () => {
                alert(alertText)
            })
        }
    
    }
    
}