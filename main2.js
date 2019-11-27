/// <reference path="jquery-3.4.1.js" />

$(() => {



function showPhotos() {

  $.ajax({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos", 
      error: err => alert(err.message),
      success: response => displayPhotos2(response)
  });
}

function displayPhotos2(response) {


// console.log(response) 
  let content = "";
  for (const item of response) {
      const div = `<div class="imgdiv">
      <img src="${item.thumbnailUrl}">
      <p>${item.title}</p>
      </div>
    
      `;
      content += div;

  }
  $("#stage").html(content);
}

showPhotos()
});

                //   <img src="${item.thumbnailUrl}"
