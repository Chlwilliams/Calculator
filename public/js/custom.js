function buttonNumber(num){
    document.getElementById("result").value += num
}

function clearResult(){
    document.getElementById("result").value = ""
}

function deletelast(){
    let result = document.getElementById("result").value;
    result = result.slice(0,-1);
    document.getElementById("result").value = result;
}


function calculateResult(){
    let num = document.getElementById("result").value 
    let result = eval(num)

    document.getElementById("result").value = result
}

function posNeg(){
    let num = document.getElementById("result").value
    let result = eval(num * -1)

    document.getElementById("result").value = result
}

function percentage(){
    let num = document.getElementById("result").value
    let result = eval(num / 100)

    document.getElementById("result").value = result
}



