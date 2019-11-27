/// <reference path="jquery-3.4.1.js" />

$(() => {

    $("button").click(() => {
        $.ajax({
            method: "GET", // Method (GET / POST)
            url: "https://jsonplaceholder.typicode.com/photos", // The url to get data from 
            error: err => alert("Error: " + err.status), // What to do when there is an error
            success: response => displayUsers(response) // What to do when there is no error (success)
        });
    });

    // Display the users: 
    function displayUsers(response) {
        $("tbody").empty();
        for (const item of response) {
            const tr = `
                <tr>
                <td>
                <img src="${item.thumbnailUrl}">
            </td>v
                    <td>${item.id}</td>
       
                    <td>${item.title}</td>
                  
                </tr>
            `;
            $("tbody").append(tr);
        }
    }

});