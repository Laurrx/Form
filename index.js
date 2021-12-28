function addScore(tableId) {
    let tableData = document.getElementById("table_" + tableId);
    let tableInputs = tableData.getElementsByTagName("input");
    document.getElementById("totalScore_" +tableId).innerHTML = "SCOR: 0;";
    let tableScore = 0;

    for(htmlEle in tableInputs ){

        if(tableInputs[htmlEle].value != undefined && 
        tableInputs[htmlEle].value != 0
        ){
            tableScore += +tableInputs[htmlEle].value;
        }
    }
    document.getElementById("totalScore_" +tableId).innerHTML = "SCOR: " + tableScore;
}

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
    document.getElementById("iadlScore").innerHTML="SCOR: " + values;
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

function calculateFinalScore() {
    let results = document.getElementsByClassName("score");
    let finalScore = 0;
    

    for(i=0; i<results.length; i++){
        finalScore += parseInt(results[i].innerText.substring(6));
        
    }

    document.getElementById("finalScoreChange").innerHTML = finalScore;
}
