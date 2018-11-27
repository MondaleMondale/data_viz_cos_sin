let bars;

let xOffSet = 100;
let yOffSet = 100;


document.addEventListener("DOMContentLoaded", getJSON)



async function getJSON() {

    let jonOBJ = await fetch("https://mandalskeawebspace.dk/claude_php/clean_up_spreadsheet.php?id=1B8oVY_Aoe3W7ZA5IVU3XkBIyCSOtQW8PI9CaYQ9hNac");
    bars = await jonOBJ.json();
    console.log("How many bars", bars.length);

    let step = 2 * Math.PI / bars.length; // see note 1
    let h = xOffSet;
    let k = yOffSet;
    let r = 50;

    let i = 0;

    let myBezierArr = [];

    let myBezierPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
//    console.log(bezier_my_coordinates());


    for (let theta = 0; theta < 2 * Math.PI; theta += step) {

        r = bars[i].numberofpersons;

        let myDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        myDot.setAttribute("r", "1");
        myDot.setAttribute("fill", "red");

        let x = h + r * Math.cos(theta);
        let y = k - r * Math.sin(theta); //note 2.


        myDot.setAttribute("cx", x);
        myDot.setAttribute("cy", y);
        document.querySelector("#nested_SVG").appendChild(myDot);

        myBezierArr.push([x,y]);

        i++;

    }



//    myBezierArr.push(myBezierArr[0]);

    myBezierPath.setAttribute("d",bezier_my_coordinates(myBezierArr));
    console.log( myBezierPath.getAttribute("d"));
    myBezierPath.setAttribute("class","myBezierPath");
    document.querySelector("#nested_SVG").appendChild(myBezierPath);


    let myMeasureCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    myMeasureCircle.setAttribute("class", "myMeasureCircle");
    myMeasureCircle.setAttribute("cx", xOffSet);
    myMeasureCircle.setAttribute("cy", yOffSet);
    myMeasureCircle.setAttribute("r", "50");
    document.querySelector("#nested_SVG").appendChild(myMeasureCircle);
}
