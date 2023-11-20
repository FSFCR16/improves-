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

function formatDuration(seconds) {

    const dias= Math.floor(seconds/84600)
    const horas = Math.floor(seconds / 3600);
    const minutos = Math.floor((seconds % 3600) / 60);
    const segundosRestantes = seconds % 60;
    console.log(dias,horas, minutos, segundosRestantes)

}

formatDuration(56000)