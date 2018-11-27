let bars;

let xOffSet = 100;
let yOffSet = 100;


document.addEventListener("DOMContentLoaded", getJSON)



async function getJSON() {

    let jonOBJ = await fetch("https://mandalskeawebspace.dk/claude_php/clean_up_spreadsheet.php?id=1B8oVY_Aoe3W7ZA5IVU3XkBIyCSOtQW8PI9CaYQ9hNac");
    bars = await jonOBJ.json();
    console.log("How many bars", bars.length);

    var step = 2 * Math.PI / bars.length; // see note 1
    var h = xOffSet;
    var k = yOffSet;
    var r = 50;

    var i = 0;
    let attributePathString = "";
    let myPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    //    path.setAttribute("stroke-width", "1");
    //    path.setAttribute("fill", "red");
    for (var theta = 0; theta < 2 * Math.PI; theta += step) {
        
        r = bars[i].numberofpersons;

        let myDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        myDot.setAttribute("r", "1");
        myDot.setAttribute("fill", "red");

        var x = h + r * Math.cos(theta);
        var y = k - r * Math.sin(theta); //note 2.
        //            ctx.lineTo(x, y);
        //        ctx.fillRect(x, y, 2, 2);
        myDot.setAttribute("cx", x);
        myDot.setAttribute("cy", y);
        if (i == 0) {

            attributePathString += "M";
        } else {
            attributePathString += "L";
        }

        attributePathString += x + " " + y;


        document.querySelector("#nested_SVG").appendChild(myDot);
        i++;

    }

    attributePathString += "z"
    myPath.setAttribute("d", attributePathString);
    document.querySelector("#nested_SVG").appendChild(myPath);

    let myMeasureCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    myMeasureCircle.setAttribute("cx", xOffSet);
    myMeasureCircle.setAttribute("cy", yOffSet);
    myMeasureCircle.setAttribute("r", "50");
    document.querySelector("#nested_SVG").appendChild(myMeasureCircle);
}
