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

function squared(){
    let num = document.getElementById("result").value
    let result = Math.pow(num,2)
    document.getElementById("result").value = result
}
function cubed(){
    let num = document.getElementById("result").value
    let result = Math.pow(num,3)
    document.getElementById("result").value = result
}

function squareRt(){
    let num = document.getElementById("result").value
    let result = Math.sqrt(num,2)
    document.getElementById("result").value = result
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

function fact(){
    let num = document.getElementById("result").value
        function factorial(num){
            if(num == 0){
                return 1
            } else {
                return num * factorial(num-1)
            }
     }
    result = factorial(num)
    document.getElementById("result").value = result
}



