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
    let cadenaNew=""
    for (let i = 0; i < dna.length; i++){
        let letra=dna.charAt([i])
        switch(letra){
            case "A": let aV=dna.replace(dna, "T");
                cadenaNew+=aV[i]
                break;
            case "T": let tV=dna.replace(dna, "A");
                cadenaNew+=tV[i]
                break;
            case "C": let cV=dna.replace(dna, "G");
                cadenaNew+=cV[i]
                break;
            case "G": let gV=dna.replace(dna, "C");
                cadenaNew+=gV[i]
                break;
            default:
                console.log("Codigo de adn escrito incorrectamente")
        }
    }
    console.log(cadenaNew)
}
DNAStrand("AAAA")