//tabbed panes script

var tabLinks;
var tabPanes;

//function starts on window load
window.onload = function() {
    //set initial pane state
    //listen for clicks on tabs
    tabLinks = document.getElementById("tabs").getElementsByTagName("li");
    tabPanes = document.getElementById("containers").getElementsByTagName("div");

    //activate first pane from 0 and from right
    displayPane(tabLinks[0]);

    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].onclick = function() {
                displayPane(this);
                return false;
            }
            //on focus means on tab to
        tabLinks[i].onfocus = function() {
            displayPane(this);
            return false;
        }
    }
}

//display switching
function displayPane(tabToActivate) {
    //respond to tab clicks
    //change pane display and activate tabs
    for (var i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i] == tabToActivate) {
            //if activated, change class
            tabLinks[i].classList.add("active");
            //display the pane
            tabPanes[i].style.display = "block";
        } else {
            //remove active class
            tabLinks[i].classList.remove("active");
            //hide the pane
            tabPanes[i].style.display = "none";
        }
    }
}