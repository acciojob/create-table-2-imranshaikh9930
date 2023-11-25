const table = document.querySelector("#myTable");

function createTable() {
  let rows = parseInt(prompt("Input number of rows")); // Check the prompt argument here
  let cols = parseInt(prompt("Input number of columns")); // Check the prompt argument here

  if (rows <= cols) {
    for (let i = 0; i < rows; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < cols; j++) {
        const col = document.createElement("td");
        col.innerText = `Row-${i} Column-${j}`;
        row.appendChild(col);
      }

      table.appendChild(row);
    }
  }
}
