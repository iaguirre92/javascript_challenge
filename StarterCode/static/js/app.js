// from data.js
let tableData = data;

// YOUR CODE HERE!

let tableItem = -1;

let dropdown_click = d3.select(".first");
let dropdown_click2 = d3.select(".second");

dropdown_click.on("click", function()
{
    d3.select("input").attr("placeholder", "Enter a date");
    d3.select(".form-control").property("value", "");
    dropdown_click.style("background-color", "#DF691A");
    dropdown_click2.style("background-color", "transparent");
    d3.select("#dropdownMenuButton").style("background-color", "cornflowerblue");
    d3.select(".check-input").text("");
    tableItem = 0;
});
dropdown_click2.on("click", function()
{
    d3.select("input").attr("placeholder", "Enter a city");
    d3.select(".form-control").property("value", "");
    dropdown_click.style("background-color", "transparent");
    dropdown_click2.style("background-color", "#DF691A");
    d3.select("#dropdownMenuButton").style("background-color", "cornflowerblue");
    d3.select(".check-input").text("");
    tableItem = 1;
});

let old_tbody = document.getElementsByTagName("table")[0];

// ---------------------------------------------
// inputSearch = "1/1/2010";
// inputSearch2 = "01/1/2010";
// let a = new Date(inputSearch);
// let b = new Date(inputSearch2);
// console.log(a.getTime() === b.getTime());
// ---------------------------------------------


let tempTable = document.getElementsByTagName("table")[0];
for (let i = 0; i < tableData.length; i++)
{
    let newRow = tempTable.insertRow(1);

    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    let cell2 = newRow.insertCell(2);
    let cell3 = newRow.insertCell(3);
    let cell4 = newRow.insertCell(4);
    let cell5 = newRow.insertCell(5);
    let cell6 = newRow.insertCell(6);
    
    cell0.innerHTML = tableData[i].datetime;
    cell1.innerHTML = tableData[i].city;
    cell2.innerHTML = tableData[i].state;
    cell3.innerHTML = tableData[i].country;
    cell4.innerHTML = tableData[i].shape;
    cell5.innerHTML = tableData[i].durationMinutes;
    cell6.innerHTML = tableData[i].comments;
}

setSearch = false;
 

let submit = d3.select("#myBtn");
submit.on("click", function()
{
    d3.event.preventDefault();

    console.log(tableItem);

    
    inputSearch = document.getElementById("datetime").value;
    if (inputSearch === "")
    {
        if (d3.select(".check-input").text() === "")
        {
            d3.select(".check-input").text("*please enter a vaild input");
        }
        return;
    }
    else if (tableItem === -1)
    {
        if (d3.select(".check-input").text() === "" || d3.select(".check-input").text() === "*please enter a vaild input")
        {
            d3.select(".check-input").text("*please select a category");
        }
        return;
    }
    else
    {
        d3.select(".check-input").text("");
    }

    // Clear table data
    if (setSearch === false)
    {
        for (let i = 0; i < tableData.length; i++)
        {
            tableRow = document.getElementsByTagName("tr")[1];
            tableRow.parentNode.removeChild(tableRow);
        }
    }

    setSearch = true;

    if (tableItem === 0)
    {
        // Check to see if data is already in the table
        let tempTable = document.getElementsByTagName("table")[0]; 
        for (let i = 1; i < tempTable.rows.length; i++)
        {
            if (tempTable.rows.item(i).cells.item(0).innerHTML === inputSearch)
            {
                console.log("UFO sighting(s) already in table!")
                d3.select(".check-input").text("UFO sighting(s) already in table.");
                return;
            }
        }
        // Loop through table data and append new rows 
        for (let i = 0; i < tableData.length; i++)
        {
            if (tableData[i].datetime === inputSearch)
            {
                set = true;
                let newRow = tempTable.insertRow(1);

                let cell0 = newRow.insertCell(0);
                let cell1 = newRow.insertCell(1);
                let cell2 = newRow.insertCell(2);
                let cell3 = newRow.insertCell(3);
                let cell4 = newRow.insertCell(4);
                let cell5 = newRow.insertCell(5);
                let cell6 = newRow.insertCell(6);
                
                cell0.innerHTML = tableData[i].datetime;
                cell1.innerHTML = tableData[i].city;
                cell2.innerHTML = tableData[i].state;
                cell3.innerHTML = tableData[i].country;
                cell4.innerHTML = tableData[i].shape;
                cell5.innerHTML = tableData[i].durationMinutes;
                cell6.innerHTML = tableData[i].comments;
            }
        }
        d3.select(".check-input").text("Found all matching dates.");
    }
    if (tableItem === 1)
    {
        // Check if input is already in the table
        let tempTable = document.getElementsByTagName("table")[0];
        for (let i = 1; i < tempTable.rows.length; i++)
        {
            if (tempTable.rows.item(i).cells.item(1).innerHTML === inputSearch)
            {
                console.log("UFO sighting(s) already in table!")
                return;
            }
        }
        // Loops through table data and appends new rows if the data date matches the input
        for (let i = 0; i < tableData.length; i++)
        {
            if (tableData[i].city === inputSearch)
            {
                set = true;
                let newRow = tempTable.insertRow(1);

                let cell0 = newRow.insertCell(0);
                let cell1 = newRow.insertCell(1);
                let cell2 = newRow.insertCell(2);
                let cell3 = newRow.insertCell(3);
                let cell4 = newRow.insertCell(4);
                let cell5 = newRow.insertCell(5);
                let cell6 = newRow.insertCell(6);
                
                cell0.innerHTML = tableData[i].datetime;
                cell1.innerHTML = tableData[i].city;
                cell2.innerHTML = tableData[i].state;
                cell3.innerHTML = tableData[i].country;
                cell4.innerHTML = tableData[i].shape;
                cell5.innerHTML = tableData[i].durationMinutes;
                cell6.innerHTML = tableData[i].comments;
            }
        }
    }
});