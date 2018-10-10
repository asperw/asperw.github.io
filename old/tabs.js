// Tabbed panes script

var tabLinks;
var tabPanes;

// Function starts on window load
window.onload = function(){
    // Set initial pane state
    // Listen for clicks on tabs
    tabLinks = document.getElementById("navigation").getElementsByTagName("li");
    tabPanes = document.getElementById("pages").getElementsByTagName("div");

    // Activate first pane from 0 and from right
    displayPane(tabLinks[0]);

    for(var i = 0; i < tabLinks.length; i++){
        tabLinks[i].onclick = function(){
            displayPane(this);
            return false;
        }
        // On focus means on tab to
        tabLinks[i].onfocus = function(){
            displayPane(this);
            return false;
        }
    }
}

// Display switching
function displayPane(tabToActivate){
    // Respond to tab clicks
    // Change pane display and activate tabs
    for(var i = 0; i < tabLinks.length; i++){
        if(tabLinks[i] == tabToActivate){
            // If activated, change class
            tabLinks[i].classList.add("active");
            // Display the pane
            tabPanes[i].style.display = "block";
        }else{
            // Remove active class
            tabLinks[i].classList.remove("active");
            // Hide the pane
            tabPanes[i].style.display = "none";
        }
    }
}
