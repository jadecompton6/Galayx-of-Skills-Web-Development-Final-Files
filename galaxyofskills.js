
    
    var greet = "Galaxy of Skills!";
    document.write(greet); // Prints: Galaxy of Skills!





    // Automatic Slideshow - change image every 3 seconds
    var myIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
    }

    function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Hello " + fname + "! You will now be redirected to a new page.");
    }

    function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

   /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


    document.body.style.background = 'light-blue'; // make the background light blue
    setTimeout(() => document.body.style.background = '', 3000); // return back


    


