
  // Get the dropdown button and content
  var dropdown = document.getElementsByClassName('dropdown')[0];
  var dropdownContent = document.getElementsByClassName('dropdown-content')[0];
  
  // Toggle the dropdown content
  function toggleDropdown() {
    dropdownContent.classList.toggle('show');
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    }
  };
  
  // Attach event listener to the dropdown button
  dropdown.addEventListener('click', toggleDropdown);
  
  
  
  
  
  
  