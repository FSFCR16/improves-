function duplicateEncode(word){
    let candenaNueva=""
    let array=word.split("")

    for (let i=0; i<array.length; i++) {
    
        let mayuscula= word[i]===word[i].toUpperCase()
        if ( word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
            let remplazar=array[i].replace(array[i], ')')
            candenaNueva+=remplazar
        }else if(mayuscula===true){
            let remplazar=array[i].replace(array[i], ')')
            candenaNueva+=remplazar
        }else{
            let remplazar=array[i].replace(array[i], '(')
            candenaNueva+=remplazar
        }

    }
    console.log(candenaNueva)
}


function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    let variablees=str.replace(regExp,function(match){
        
        return match.charAt(1).toUpperCase();
    });

}   

function solution(str, ending){
    if (typeof(str) != "string" || typeof(ending) != "string")
      throw "wrong type";
    if (ending.length>str.length)
      return false;
    return str.substr(str.length-ending.length, ending.length) == ending;
  }

  
function likes1(names) {
    if (names.length == 0){
        console.log(`no one likes this`)
    }else if(names.length == 1){
        console.log(`${names[0]} likes this`)
    }else if(names.length == 2){
        console.log(`${names[0]} and ${names[1]} likes this`)
    }else if(names.length == 3){
        console.log(`${names[0]}, ${names[1]} and ${names[2]} likes this`)
    }else if(names.length > 3){
        console.log(`${names[0]}, ${names[1]} and ${names.length-2} others likes this`)
    }
    
    
}

function likes(names) {
    let resultado2= {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }
    
  console.log(resultado2[4])
  }


let objeto= {
    "nameUnos": "santiago",
    "apellido" : "fajardo",
    "eda": 20
}

function DNAStrand(dna){
    let array = dna.split("")
    for (let i = 0; i < dna.length; i++){
        let letra=dna[i]
        switch(letra){
            case "A": array[i]="T";
                break;
            case "T": array[i]="A";
                break;
            case "C": array[i]="G";
                break;
            case "G": array[i]="C";
                break;
            default:
                console.log("Codigo de adn escrito incorrectamente")

        }
    }
    let arrayJoin=array.join("")
    console.log(arrayJoin)
}


var pairs = {'A':'T','T':'A','C':'G','G':'C'};
function DNAStrand(dna){
    let split=dna.split('')
    let añadirA=split.map(function(v){ 
        return pairs[v]
    })
    let resultadoAAA=añadirA.join("")
    console.log(resultadoAAA)
  }
//Codigo original de el de arriba
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}


function solution(number){
    let resultadoSuma=0
    for (let i = 0 ; i < number ; i++){

        if(i % 3 == 0 || i % 5 == 0 ){

            resultadoSuma += i
        }
    }
    return resultadoSuma
}

function pigIt(str){
    let array=str.split(" ")
    let arrayRes=[]
    const patron = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|/]/;
    for ( let i =0 ; i < array.length; i++){
        if (patron.test(array[i])){
            arrayRes.push(array[i])
        }else{
            array[i] = array[i].substr(1,array[i].length) + array[i][0]+"ay"
            arrayRes.push(array[i])
        }
  }
  console.log(arrayRes.join(" "))
}


function expandedForm(num) {
    arrNum=num.toString().split("");
    let arrExtendedForm=[]
    let nummm=1
    for (let i=arrNum.length - 1; i >= 0; i--){
        if (arrNum[i]=="0"){
            nummm*=10
        }else{
            let resMul=parseInt(arrNum[i])*nummm
            nummm*=10
            arrExtendedForm.unshift(resMul.toString())
        }
    }
    return arrExtendedForm.join(" + ")
  }

expandedForm(12)

//solucion de forma simplificado
/*const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

/////*/
function solution (roman) {

    numeroRoman={"I": 1, "V":5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    let valor=0
    for (let i  = 0, j=1; i < roman.length  ; i++, j++){
        if ( j == roman.length){
            j-=1
        }
        if (numeroRoman[roman[i]] >= numeroRoman[roman[j]]) {

            valor+=numeroRoman[roman[i]]


        }else{
            valor=valor-=numeroRoman[roman[i]]
        }

    }
    return valor

}



function solution(roman) {
    var value = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    return roman.split('').map( d => value[d] ).reduce( (s,v,i,o) => s + ( (o[i+1] > v) ? -v : v ), 0 );
  }


function solution(string) {
    let array = string.split("")
    for (let i = 0; i < array.length; i++ ){
        if(array[i]== array[i].toUpperCase()){
            i+=1
            array.splice(i-1, 0, "-")   
        }
    }
    console.log(array.join("").split("-").join(" "))
}


function solution1(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    console.log(string.join(''))
  }
  solution1("caemlCaseGtesting")