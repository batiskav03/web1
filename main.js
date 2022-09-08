var x;
var y;
var r;
var yField = document.getElementById("y");
var outputTable = document.getElementById("outputTable");
let map = new Map();
map.set("x",[])
map.set("y",[])
map.set("r",[])
map.set("result",[])
n = 0
xarr= []
yarr = []
rarr = []
barr = []
window.onload = function () {

    let buttons = document.querySelectorAll("input[name=xnumber]");
    function click(element) {
        element.onclick = function () {
            x = this.value;
            r = document.getElementById("select").value;

        }
    }
    buttons.forEach(click);
    console.log(x);  
};



function xValidator(){
    return true;
}
function yValidator(){
    return true;
}
function rValidator(){
    return true;
}

function createStatus(message) {
    let status = document.getElementById("status");
    status.textContent = message;
}
document.getElementById("submit").onclick = function (argument) {
    console.log(map)
    if (xValidator(x) && yValidator(y) && rValidator(r)){
        fetch("index.php/" + "?y=" + y + "&x=" + x + "&r=" + r, {
            method: 'GET',
        }).then(response => response.text()).then(function (serverAnswer) {

            let arr = JSON.parse(serverAnswer)
            xarr.push(serverAnswer[0]);
            yarr.push(serverAnswer[1]);
            rarr.push(serverAnswer[2]);
            map.set("x",xarr);
            map.set("y",yarr);
            map.set("r",rarr);
            map.set("result",barr)
            console.log(map)
            outputTable.innerHTML = map;
        })


     }
 }
 function yFieldChange(e){
    console.log(y)
    if (isNumeric(e)){
        y = undefined;
        createStatus("Введены недопустимые символы.")
    } else {
        y = e.target.value;

    }
 }
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
yField.addEventListener("change", yFieldChange);

