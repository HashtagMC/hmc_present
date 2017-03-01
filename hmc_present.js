// this is the script hmc_present as a separate file
// to achieve best results, add this into a script tag at the end of the HTML file
// directly before the closing </body> tag

function content(i) {
i = parseInt(i);
var el = document.getElementById("content_" + i);
return el;
}
var contents = document.getElementsByClassName("content");
var projection = document.getElementById("projection");
projection.innerHTML = content(0).innerHTML;
var i = 0;
max_i = contents.length -1;
document.onkeydown = interceptArrowKeys;
function interceptArrowKeys(event) {
    if (event.keyCode == "37") {
       if(i > 0) { i = i - 1; }
       projection.innerHTML = content(i).innerHTML;
    }
    else if (event.keyCode == "39") {
       if(i < max_i) { i = i + 1; }
       projection.innerHTML = content(i).innerHTML;
    }
}
