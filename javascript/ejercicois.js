function duplicateEncode(word) {
    let candenaNueva = ""
    let array = word.split("")

    for (let i = 0; i < array.length; i++) {

        let mayuscula = word[i] === word[i].toUpperCase()
        if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
            let remplazar = array[i].replace(array[i], ')')
            candenaNueva += remplazar
        } else if (mayuscula === true) {
            let remplazar = array[i].replace(array[i], ')')
            candenaNueva += remplazar
        } else {
            let remplazar = array[i].replace(array[i], '(')
            candenaNueva += remplazar
        }

    }
    console.log(candenaNueva)
}


function toCamelCase(str) {
    var regExp = /[-_]\w/ig;
    let variablees = str.replace(regExp, function (match) {

        return match.charAt(1).toUpperCase();
    });

}

function solution(str, ending) {
    if (typeof (str) != "string" || typeof (ending) != "string")
        throw "wrong type";
    if (ending.length > str.length)
        return false;
    return str.substr(str.length - ending.length, ending.length) == ending;
}


function likes1(names) {
    if (names.length == 0) {
        console.log(`no one likes this`)
    } else if (names.length == 1) {
        console.log(`${names[0]} likes this`)
    } else if (names.length == 2) {
        console.log(`${names[0]} and ${names[1]} likes this`)
    } else if (names.length == 3) {
        console.log(`${names[0]}, ${names[1]} and ${names[2]} likes this`)
    } else if (names.length > 3) {
        console.log(`${names[0]}, ${names[1]} and ${names.length-2} others likes this`)
    }


}

function likes(names) {
    let resultado2 = {
        0: 'no one likes this',
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }

    console.log(resultado2[4])
}


let objeto = {
    "nameUnos": "santiago",
    "apellido": "fajardo",
    "eda": 20
}

function DNAStrand(dna) {
    let array = dna.split("")
    for (let i = 0; i < dna.length; i++) {
        let letra = dna[i]
        switch (letra) {
            case "A":
                array[i] = "T";
                break;
            case "T":
                array[i] = "A";
                break;
            case "C":
                array[i] = "G";
                break;
            case "G":
                array[i] = "C";
                break;
            default:
                console.log("Codigo de adn escrito incorrectamente")

        }
    }
    let arrayJoin = array.join("")
    console.log(arrayJoin)
}


var pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
};

function DNAStrand(dna) {
    let split = dna.split('')
    let añadirA = split.map(function (v) {
        return pairs[v]
    })
    let resultadoAAA = añadirA.join("")
    console.log(resultadoAAA)
}
//Codigo original de el de arriba
var pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
};

function DNAStrand(dna) {
    return dna.split('').map(function (v) {
        return pairs[v]
    }).join('');
}


function solution(number) {
    let resultadoSuma = 0
    for (let i = 0; i < number; i++) {

        if (i % 3 == 0 || i % 5 == 0) {

            resultadoSuma += i
        }
    }
    return resultadoSuma
}

function pigIt(str) {
    let array = str.split(" ")
    let arrayRes = []
    const patron = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|/]/;
    for (let i = 0; i < array.length; i++) {
        if (patron.test(array[i])) {
            arrayRes.push(array[i])
        } else {
            array[i] = array[i].substr(1, array[i].length) + array[i][0] + "ay"
            arrayRes.push(array[i])
        }
    }
    console.log(arrayRes.join(" "))
}


function expandedForm(num) {
    arrNum = num.toString().split("");
    let arrExtendedForm = []
    let nummm = 1
    for (let i = arrNum.length - 1; i >= 0; i--) {
        if (arrNum[i] == "0") {
            nummm *= 10
        } else {
            let resMul = parseInt(arrNum[i]) * nummm
            nummm *= 10
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
function solution(roman) {

    numeroRoman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let valor = 0
    for (let i = 0, j = 1; i < roman.length; i++, j++) {
        if (j == roman.length) {
            j -= 1
        }
        if (numeroRoman[roman[i]] >= numeroRoman[roman[j]]) {

            valor += numeroRoman[roman[i]]


        } else {
            valor = valor -= numeroRoman[roman[i]]
        }

    }
    return valor

}



function solution(roman) {
    var value = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    return roman.split('').map(d => value[d]).reduce((s, v, i, o) => s + ((o[i + 1] > v) ? -v : v), 0);
}


function solution(string) {
    let array = string.split("")
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i].toUpperCase()) {
            i += 1
            array.splice(i - 1, 0, "-")
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


function rgb(r, g, b) {
    let hexadecimal = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F"
    }
    let valores = Object.values(hexadecimal)
    let hexadecimalResultado = "#"
    r > 255 ? r = 255 : r < 0 ? r = 0 : r;
    g > 255 ? g = 255 : g < 0 ? g = 0 : g;
    b > 255 ? b = 255 : b < 0 ? b = 0 : b;
    for (let i = 0, j = 0; j < valores.length + 1; i++) {
        if (j == 16) break
        let result = (j * 16) + i
        if (r == result) {
            hexadecimalResultado += hexadecimal[j]
            hexadecimalResultado += hexadecimal[i]
        }
        if (i == 15) {
            j++
            i = -1
        }
    }
    for (let a = 0, b = 0; b < valores.length + 1; a++) {
        if (b == 16) break
        let resultDos = (b * 16) + a
        if (g == resultDos) {
            hexadecimalResultado += hexadecimal[b]
            hexadecimalResultado += hexadecimal[a]
        }
        if (a == 15) {
            b++
            a = -1
        }
    }
    for (let d = 0, e = 0; e < valores.length + 1; d++) {
        if (e == 16) break
        let resultTres = (e * 16) + d
        if (b == resultTres) {
            hexadecimalResultado += hexadecimal[e]
            hexadecimalResultado += hexadecimal[d]
        }
        if (d == 15) {
            e++
            d = -1
        }
    }
    console.log(hexadecimalResultado)


}


function rgbDos(r, g, b) {
    let hexadecimal = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F"
    }
    r > 255 ? r = 255 : r < 0 ? r = 0 : r;
    g > 255 ? g = 255 : g < 0 ? g = 0 : g;
    b > 255 ? b = 255 : b < 0 ? b = 0 : b;

    let resultadoR = Math.floor(r / 16)
    let resultadoRdos = r - (resultadoR * 16)
    let resultadoG = Math.floor(g / 16)
    let resultadoGdos = g - (resultadoG * 16)
    let resultadoB = Math.floor(b / 16)
    let resultadoBdos = b - (resultadoB * 16)

    let resultadoFinal = `${hexadecimal[resultadoR]}${hexadecimal[resultadoRdos]}${hexadecimal[resultadoG]}${hexadecimal[resultadoGdos]}${hexadecimal[resultadoB]}${hexadecimal[resultadoBdos]}`

    return resultadoFinal

}


function rgbTres(r, g, b) {
    console.log(toHex(r) + toHex(g) + toHex(b));
}

function toHex(d) {
    if (d < 0) {
        return "00";
    }
    if (d > 255) {
        return "FF";
    }
    console.log((("0" + (Number(d).toString(2))))) //tostring no solo lo convierte en string tambien si le indicas un numero te lo convierte a esa base
    //en el ejemplo esta en base 2 pero puedes usar la base que quieras
}



function humanReadable(seconds) {

    let minutos = 60 * parseFloat("0." + ((seconds / 60) / 60).toString().split(".")[1])
    let segundos = Math.round(60 * parseFloat("0." + minutos.toString().split(".")[1]))

    let resultado = Math.floor((seconds / 60) / 60) <= 9 ? "0" + Math.floor((seconds / 60) / 60) : Math.floor((seconds / 60) / 60);
    let resultadoMin = Math.floor(minutos) <= 9 ? "0" + Math.floor(minutos) : Math.floor(minutos) == 60 ? "00" : Math.floor(minutos);
    let resultadoSeg = segundos <= 9 ? "0" + segundos : segundos == 60 ? "00" : segundos;
    console.log(`${resultado}:${resultadoMin}:${resultadoSeg}`)

}


function humanReadable(seconds) {
    var pad = function (x) {
        return (x < 10) ? "0" + x : x;
    }
    return pad(parseInt(seconds / (60 * 60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}

function digPow(n, p) {
    let array = n.toString().split("")
    let resultado = 0

    for (let i = 0; i < array.length; i++) {

        array[i] = array[i] = Math.pow(parseInt(array[i]), p + i)
        resultado += parseInt(array[i])

    }
    let res = resultado < n ? resultado = -1 : resultado % n == 0 ? resultado / n : -1;
    console.log(res)

}


// function zeros (n) {
//     let numeroFinal=1
//     let cantCeros=0
//     n==0? cantCeros = "0+": cantCeros
//     for (let i = 1; i<=n; i++){
//         numeroFinal*=i
//         if(i==n){
//             numeroFinal=Number.prototype.toFixed(numeroFinal).toString().split("")
//             for(let j= 0; j<numeroFinal.length; j++){
//                 if (numeroFinal[j]=="0"){
//                     cantCeros+=1
//                 }
//             }
//         }
//     }
//     console.log(cantCeros) 
// }
// zeros(30)

function ipsBetween(start, end) {

    let arrayStart = start.split(".")
    let arrayEnd = end.split(".")
    let arrayFind = []

    for (let i = 0, j = 0; i < arrayStart.length; i++) {
        arrayFind.push(arrayStart[i] - arrayEnd[i])
        if (arrayFind.length == 4) {

            for (let j = 0; j < arrayFind.length; j++, i--) {

                arrayFind[j] = arrayFind[j] * (Math.pow(256, i))

            }
        }
    }
    return Math.abs(arrayFind.slice(0, 4).reduce((acumulador, elemento) => {
        return acumulador + elemento
    }))

}
ipsBetween("20.0.0.10", "20.0.1.0")

// function formatDuration(seconds) {

//     let formato=""

//     seconds == 0 ? formato += "now": seconds;

//     const años = Math.floor(seconds / 31557600 )
//     años==0? dias: años==1? formato+=`${años} year `: formato+=`${años} years `

//     const dias= Math.floor((seconds % 31557600) / 86400)
//     dias==0? dias: dias==1? formato+=`${dias} day `: formato+=`${dias} days `

//     const horas = Math.floor((seconds % 86400) / 3600);
//     horas==0? horas: horas==1? formato+=`${horas} hour `: formato+=`${horas} hours `

//     const minutos = Math.floor((seconds % 3600) / 60);
//     minutos==0? minutos: minutos==1? formato+=`${minutos} minute `: formato+=`${minutos} minutes `

//     const segundosRestantes = seconds % 60;
//     segundosRestantes==0? segundosRestantes: segundosRestantes==1? formato+=`${segundosRestantes} second `: formato+=`${segundosRestantes} seconds `

//     let arrayFechas=formato.trim().split(" ")

//     for(let i = 1 ; i < arrayFechas.length-4; i+=2){

//         arrayFechas[i]=arrayFechas[i] + ","
//     }
//     if(arrayFechas.length>2){
//         arrayFechas[arrayFechas.length-2]= "and " + arrayFechas[arrayFechas.length-2]
//         console.log(arrayFechas.join(" "))
//     }else{
//         return arrayFechas.join(" ")
//     }
// }
// formatDuration(132030240)

// function zero(operador) {
//     const numero= 0
//     if (operador !== undefined){
//         if( operador[0] === "+" ){
//             return parseInt(numero) + parseInt(operador[2])
//         }else if(operador[0] === "-" ){
//             return parseInt(numero) - parseInt(operador[2])

//         }else if(operador[0] === "/" ){
//             let div=parseInt(numero) / parseInt(operador[2])
//             if(Math.floor(div) === 0){
//                 return 0
//             }

//             return Math.floor(div)

//         }else{
//             return parseInt(numero) * parseInt(operador[2])
//         }
//     }else{
//         return numero
//     }
// }
// function one(operador ) { 
//     const numero= 1
//     if (operador !== undefined){
//         if( operador[0] === "+" ){
//             return parseInt(numero) + parseInt(operador[2])
//         }else if(operador[0] === "-" ){
//             return parseInt(numero) - parseInt(operador[2])

//         }else if(operador[0] === "/" ){
//             let div=parseInt(numero) / parseInt(operador[2])
//             if(Math.floor(div) === 0){
//                 return 0
//             }

//             return Math.floor(div)

//         }else{
//             return parseInt(numero) * parseInt(operador[2])
//         }
//     }else{
//         return numero
//     }
// }
// function two(operador) {

//     const numero= 2
//     if (operador !== undefined){
//         if( operador[0] === "+" ){
//             return parseInt(numero) + parseInt(operador[2])
//         }else if(operador[0] === "-" ){
//             return parseInt(numero) - parseInt(operador[2])

//         }else if(operador[0] === "/" ){
//             let div=parseInt(numero) / parseInt(operador[2])

//             if(Math.floor(div)=== 0){
//                 return 0
//             }

//             return Math.floor(div)

//         }else{
//             return parseInt(numero) * parseInt(operador[2])
//         }
//     }else{
//         return numero
//     }
// }

// function three(operador) {
//     const numero= 3

//     if (operador !== undefined){
//         if( operador[0] === "+" ){
//             return parseInt(numero) + parseInt(operador[2])
//         }else if(operador[0] === "-" ){
//             return parseInt(numero) - parseInt(operador[2])

//         }else if(operador[0] === "/" ){
//             let div=parseInt(numero) / parseInt(operador[2])
//             if(Math.floor(div) === 0){
//                 return 0
//             }

//             return Math.floor(div)
//         }else{
//             return parseInt(numero) * parseInt(operador[2])
//         }
//     }else{
//         return numero
//     }
// }
// function four(operador) {
//     const numero= 4
//     if (operador !== undefined){
//         if( operador[0] === "+" ){
//             return parseInt(numero) + parseInt(operador[2])
//         }else if(operador[0] === "-" ){
//             return parseInt(numero) - parseInt(operador[2])

//         }else if(operador[0] === "/" ){
//             let div=parseInt(numero) / parseInt(operador[2])
//             if(Math.floor(div) === 0){
//                 return 0
//             }

//             return Math.floor(div)
//         }else{
//             return parseInt(numero) * parseInt(operador[2])
//         }
//     }else{
//         return numero
//     }
// }
// function five(operador) {

//     const numero= 5

//     if (operador !== undefined){
//         if( operador[0] === "+" ){
//             return parseInt(numero) + parseInt(operador[2])
//         }else if(operador[0] === "-" ){
//             return parseInt(numero) - parseInt(operador[2])

//         }else if(operador[0] === "/" ){
//             let div=parseInt(numero) / parseInt(operador[2])
//             if(Math.floor(div) === 0){
//                 return 0
//             }

//             return Math.floor(div)

//         }else{
//             return parseInt(numero) * parseInt(operador[2])
//         }
//     }else{
//         return numero
//     }
// }
// function six(operador) {

//     const numero= 6
//     if (operador !== undefined){
//         if( operador[0] === "+" ){
//             return parseInt(numero) + parseInt(operador[2])
//         }else if(operador[0] === "-" ){
//             return parseInt(numero) - parseInt(operador[2])

//         }else if(operador[0] === "/" ){
//             let div=parseInt(numero) / parseInt(operador[2])
//             if(Math.floor(div) === 0){
//                 return 0
//             }

//             return Math.floor(div)

//         }else{
//             return parseInt(numero) * parseInt(operador[2])
//         }
//     }else{
//         return numero
//     }
// }
// function seven(operador) {
//     const numero= 7
//     if (operador !== undefined){
//         if( operador[0] === "+" ){
//             return parseInt(numero) + parseInt(operador[2])
//         }else if(operador[0] === "-" ){
//             return parseInt(numero) - parseInt(operador[2])

//         }else if(operador[0] === "/" ){
//             let div=parseInt(numero) / parseInt(operador[2])
//             if(Math.floor(div) === 0){
//                 return 0
//             }

//             return Math.floor(div)

//         }else{
//             return parseInt(numero) * parseInt(operador[2])
//         }
//     }else{
//         return numero
//     }
// }
// function eight(operador) {
//     const numero= 8
//     if (operador !== undefined){
//         if( operador[0] === "+" ){
//             return parseInt(numero) + parseInt(operador[2])
//         }else if(operador[0] === "-" ){
//             return parseInt(numero) - parseInt(operador[2])

//         }else if(operador[0] === "/" ){
//             let div=parseInt(numero) / parseInt(operador[2])

//             if(Math.floor(div) === 0){
//                 return 0
//             }

//             return Math.floor(div)

//         }else{
//             return parseInt(numero) * parseInt(operador[2])
//         }
//     }else{
//         return numero
//     }
// }
// function nine(operador) {
//     const numero= 9
//     if (operador !== undefined){
//         if( operador[0] === "+" ){
//             return parseInt(numero) + parseInt(operador[2])
//         }else if(operador[0] === "-" ){
//             return parseInt(numero) - parseInt(operador[2])

//         }else if(operador[0] === "/" ){

//             let div=parseInt(numero) / parseInt(operador[2])
//             if(Math.floor(div) === 0){
//                 return 0
//             }

//             return Math.floor(div)

//         }else{
//             return parseInt(numero) * parseInt(operador[2])
//         }
//     }else{
//         return numero
//     }
// }

// function plus(num) {

//     return "+" + " " + num
// }
// function minus(num) {
//     return "-" + " " + num
// }
// function times(num) {
//     return "*" + " " + num
// }
// function dividedBy(num) {

//     return "/" + " " + num
// }



// function zero(fn) {return fn ? fn(0) : 0}
// function one(fn) {return fn ? fn(1) : 1}
// function two(fn) {return fn ? fn(2) : 2}
// function three(fn) {

//     return fn ? fn(3) : 3
// }
// function four(fn) {return fn ? fn(4) : 4}
// function five(fn) {return fn ? fn(5) : 5}
// function six(fn) {return fn ? fn(6) : 6}
// function seven(fn) {return fn ? fn(7) : 7}
// function eight(fn) { 
//     return fn ? fn(8) : 8
// }
// function nine(fn) {return fn ? fn(9) : 9}

// function plus(n) {return function(v) {return v + n}}
// function minus(n) {return function(v) {return v - n}}
// function times(n) {return function(v) {return v * n}}
// function dividedBy(n) {
//     console.log(n)
//     return function(v) {return v / n}}


// function generateHashtag(str) {
//     let palabra = str.trim().split(" ");

//     palabra = palabra.map((element) => {
//         if (element && element[0] !== element[0].toUpperCase()) {
//             return element.replace(element[0], element[0].toUpperCase());
//         }
//         return element;
//     });

//     return '#' + palabra.join('');
// }

function solution(list) {
    let secuencia = 1
    let intervalos = ""
    let listaFinal = []
    for (let i = 0, j = 1; j < list.length + 1; j++) {
        if ((list[i] + secuencia) === list[j]) {
            intervalos = list.slice(i, j + 1)
            secuencia++
        } else if (intervalos.length === 0) {
            listaFinal.push(list[i])
            i++
        } else {
            if (intervalos.length === 2) {
                let devolver = intervalos.join(",")
                listaFinal.push(devolver)
            } else {
                let intervalo = `${intervalos[0]}-${intervalos[intervalos.length - 1]}`
                listaFinal.push(intervalo)
            }
            intervalos = []
            i = j
            secuencia = 1
        }
    }

}

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])

function solveExpression(exp) {
    const operador = /(?<=[^" "])[-+*]/
    let indice = exp.indexOf(exp.match(operador)[0], 1)
    let operacion = exp.match(operador)[0]
    let number = 0;
    for (let i = 0; number < 10; i++) {

        while (exp.includes(number.toString())) {
            number++;
        }

        let expresionCompleta = exp.replace(/\?/g, number).split("=")
        let primerO = expresionCompleta[0].slice(0, indice)
        let segundoO = expresionCompleta[0].slice(indice + 1, expresionCompleta[0].length)
        if (expresionCompleta[1] === "00" || (expresionCompleta[1].length > 1 && expresionCompleta[1][0] === "0")) {
            "invalido"
        } else if (expresionCompleta[1][0] === "-" && expresionCompleta[1][1] === "0") {
            "invalido"
        } else if (primerO.length > 1 && primerO[0] === "0" || segundoO.length > 1 && segundoO[0] === "0") {
            "invalido"
        } else if (operacion === "*" && (parseInt(primerO) * parseInt(segundoO)) === parseInt(expresionCompleta[1])) {
            return number
        } else if (operacion === "+" && (parseInt(primerO) + parseInt(segundoO)) === parseInt(expresionCompleta[1])) {
            return number
        } else if (operacion === "-" && (parseInt(primerO) - parseInt(segundoO)) === parseInt(expresionCompleta[1])) {
            return number
        }
        number++
    }

    return -1
}



function solutionDos(text, markers) {
    for (let i = 0; i < markers.length; i++) {
        let regex = new RegExp(`${markers[i]}\\s?(\\w+|\\n?)`, "g");
        text = text.replace(regex, "");
    }

    let finalCadena = text.replace(/\s+$/, "");

    console.log(finalCadena)
}


/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 */

function isAnagram(wordOne, wordTwo) {
    if (wordOne.toLowerCase() === wordTwo.toLowerCase()) {
        return false;
    }

    const sortedWordOne = wordOne.toLowerCase().split('').sort().join('');
    const sortedWordTwo = wordTwo.toLowerCase().split('').sort().join('');

    console.log(sortedWordOne, sortedWordTwo)

    return sortedWordOne === sortedWordTwo;
}

console.log(isAnagram("aguila", "laguia"));

/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
function fibonacci() {
    // let listFibo = [0 , 1]
    // for(let i = 0, j = 1; listFibo.length < 50; i++, j++){
    //     let nuevoNumero = listFibo[i] + listFibo[j]
    //     listFibo.push(nuevoNumero)
    // }

    // console.log(listFibo.join(", "))
    let n0 = 0;
    let n1 = 1;

    for (let i = 1; i <= 50; i++) {
        console.log(n0);

        const fib = n0 + n1;
        n0 = n1;
        n1 = fib;
    }
}



/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */



function esPrimo() {
    for (let i = 1; i <= 100; i++) {
        let noEsPrimo= false
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                console.log(i, "no es primo")
                j=i
                noEsPrimo = true
            }
        }
        if(!noEsPrimo){
            console.log(i, "es primo")
        }

    }
}



esPrimo()


/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
