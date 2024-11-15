document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Uncheck the checkbox to close the menu
            const menuToggle = document.getElementById('menu-toggle');
            menuToggle.checked = false;
        });
    });

    // document.getElementById("mailForm").addEventListener("submit", function(event) {
    //     event.preventDefault(); 
        
    //     var formData = new FormData(this);
    //     var button = document.getElementById('submit');
    //     var statusDiv = document.getElementById("mailStatus");
    //     statusDiv.innerHTML='<span class="loader"></span>'
      
    //     button.disabled = true;
    //     fetch("https://script.google.com/macros/s/AKfycbydhYTboR0xvDRfEIJND767RxpMwpXW-AMmb8wNSYNpIlS6DV1J6zK0zW6_K9y-1prl/exec", {
    //         mode: "no-cors",
    //         method: "POST",
    //         body: formData
    //     })
    //     .then(response => response.text())
    //         .then(result => {
    //             document.getElementById("mailForm").reset();
    //             statusDiv.innerHTML = "<p>Poruka uspesno poslata</p>";
    //         button.disabled = false;
    //     })
    //         .catch(error => {
    //             statusDiv.innerHTML = "<p>Doslo je do greske</p>"
    //             button.disabled = false;
    //         });
    // });


    var $carousel = $('.carousel').flickity({
        imagesLoaded: true,
        percentPosition: false,
    
      });
      
      var $imgs = $carousel.find('.carousel-cell img');
      // get transform property
      var docStyle = document.documentElement.style;
      var transformProp = typeof docStyle.transform == 'string' ?
        'transform' : 'WebkitTransform';
      // get Flickity instance
      var flkty = $carousel.data('flickity');
      
      $carousel.on( 'scroll.flickity', function() {
        flkty.slides.forEach( function( slide, i ) {
          var img = $imgs[i];
          var x = ( slide.target + flkty.x ) * -1/2;
          img.style[ transformProp ] = 'translateX(' + x  + 'px)';
        });
      });
      

});

