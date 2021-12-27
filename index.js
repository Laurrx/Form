function incrementValue(index, maxValue, incrementBy, tableId)
{
    var value = document.getElementsByClassName('number')[index].value;

    if(value < maxValue) {
        value = isNaN(value) ? 0 : value;
        value = parseInt(value) + incrementBy;
        document.getElementsByClassName('number')[index].value = value;

        addScore(tableId);
    }
}


function decrementValue(index, decrementBy, tableId)
{
    var value = document.getElementsByClassName('number')[index].value;

    if(value-decrementBy >= 0){
        value = isNaN(value) ? 0 : value;
        value = value - decrementBy;
        document.getElementsByClassName('number')[index].value = value;

        addScore(tableId);
    }
    
}

function calculateScore() {
    values = document.getElementsByClassName("bi-check-square-fill").length;
    document.getElementById("iadlScore").innerHTML="SCOR: " + values + "/8";
}

function boxChecked(clickedElement) {

    let checkList = clickedElement.classList;
    
    if(checkList.value === "bi-square") {
        clickedElement.classList.remove("bi-square");
        clickedElement.classList.add("bi-check-square-fill");
    } else {
        clickedElement.classList.remove("bi-check-square-fill");
        clickedElement.classList.add("bi-square");
    }
    
    calculateScore();

}
