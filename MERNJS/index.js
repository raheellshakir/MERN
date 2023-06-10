function calculate(){
    let sub1 = parseFloat(document.querySelector("#sub1").value)
    let sub2 = parseFloat(document.querySelector("#sub2").value)
    let sub3 = parseFloat(document.querySelector("#sub3").value)
    let sub4 = parseFloat(document.querySelector("#sub4").value)
    let tsub1 = parseFloat(document.querySelector("#tsub1").value)
    let tsub2 = parseFloat(document.querySelector("#tsub2").value)
    let tsub3 = parseFloat(document.querySelector("#tsub3").value)
    let tsub4 = parseFloat(document.querySelector("#tsub4").value)
    let totalobt = tsub1 + tsub2 + tsub3 + tsub4
    let total = sub1 + sub2 + sub3 + sub4
    let result = total/totalobt * 100
    document.querySelector("#result").innerHTML = `${result} %`
    console.log(result);

    

    if(result>=80){
        document.querySelector("#result").innerHTML = `${result} % you got A Grade`
    }
    else if(result>=70 || result>=60 ){
        document.querySelector("#result").innerHTML = `${result} % you got B Grade`
    }
    else if(result <= 60){
        document.querySelector("#result").innerHTML = `${result} % you are failed`
    }
    else{
        document.querySelector("#result").innerHTML = `Please...insert Value first`
    }
}    