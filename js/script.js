/****************************** 
       About Tab
******************************/

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = documents.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classlist.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontents.classlist.remove("active-tab");
    }
    event.currentTarget.classlist.add("active-link");
    document.getElementById(tabname).classlist.add("active-tab");
}

/****************************** 
       Small Screen Nav Tab
******************************/

    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }
