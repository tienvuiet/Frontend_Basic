const employees = [
    {
        id: 1,
        name: "Example 1",
        age: 18,
        address: "District",
    },
    {
        id: 2,
        name: "Example 2",
        age: 20,
        address: "City Center",
    }
];
employees.forEach(person => {
    let row = `
        <tr>    
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td>${person.address}</td>
        </tr>
    `;
    document.getElementById("tableData").innerHTML += row;
});