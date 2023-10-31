const table = document.querySelector("#myTable");
function createTable() {
   let rows = prompt("input number of rows");
	let cols = prompt("input number of columns")
  // // console.log(value);
  for(let i = 0; i<rows;i++){
    const row = document.createElement("tr");
    
  for(let j = 0 ; j< cols;j++){
    const col = document.createElement("td");

    col.innerText = `Row-${i}Column-${j}`


    row.appendChild(col);
  }
    table.appendChild(row);

  }

  console.log(table);

  //  Columns

}
