/// <reference path="jquery-3.4.1.js" />
$(() => {
  getAjaxData();
  function getAjaxData() {
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/photos", 
        error: err => alert(err.message),
        // success: myObj => displayDiv(myObj)
        success: imgs => console.log(imgs)
    });
}

function displayDiv(myObj){
        const div = `
        <p>userId : ${myObj.userId}</p>
        <p>id : ${myObj.id}</p>
        <p>title : ${myObj.title}</p>
        <img src="${myObj.thumbnailUrl}" />
        ` ;
        $("#stage").append(div);
}

// $("#bAsync").click(() => {
//   $("document").load(() => {

// getAjaxData();

// }); 
}); 