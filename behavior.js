document.addEventListener("DOMContentLoaded", function(event) {
    let thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "small") {
          thumbnailElement.className = "";
        } else

        if (thumbnailElement.className == "") {
            thumbnailElement.className = "small";
          }
         
        
      });

     
});