document.addEventListener('DOMContentLoaded', function() {
    // Function to load data from JSON file
    function loadData() {
        const jsonURL = "https://nrt.cryospherecomputing.com/icebergs/icebergs.json";
        //const jsonURL = "./static/icebergs.json" //used for testing
        fetch(jsonURL)
            .then(response => response.json())
            .then(data => populateTable(data))
            .catch(error => console.error('Error loading data:', error));
    }

    // Function to populate the table with data
    function populateTable(data) {
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

        data.forEach(item => {
            const row = document.createElement('tr');
            const area = Math.round(item.Length * item.Width * 0.88);
            row.innerHTML = `
                <td>${item.Iceberg}</td>
                <td>${item.Latitude}</td>
                <td>${item.Longitude}</td>
                <td>${item.Length}</td>
                <td>${item.Width}</td>
                <td>${area}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Load data when the page loads
    loadData();
});

function sortTable(columnIndex) {
    const table = document.getElementById("sortableTable");
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.rows);
    const isAscending = tbody.dataset.sortOrder === "asc";

    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.trim();
        const bText = b.cells[columnIndex].textContent.trim();

         // Check if the content is numeric
         const aValue = isNaN(aText) ? aText : parseFloat(aText);
         const bValue = isNaN(bText) ? bText : parseFloat(bText);
 
         return isAscending 
             ? (aValue > bValue ? 1 : -1) 
             : (aValue < bValue ? 1 : -1);
    });

    // Clear the existing rows and append the sorted rows
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    tbody.append(...rows);

    // Toggle sort order
    tbody.dataset.sortOrder = isAscending ? "desc" : "asc";
}