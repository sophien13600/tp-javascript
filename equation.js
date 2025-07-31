
function resoudre(){
    let a =parseFloat(document.getElementById("a").value)
    let b =parseFloat(document.getElementById("b").value)
    let c =parseFloat(document.getElementById("c").value)
    let inputs = document.getElementsByTagName('input')
    const inputA =document.getElementById('a')
    const inputB =document.getElementById('b')
    const inputC =document.getElementById('c')
    const display = document.getElementById('display')
    const p = document.createElement('p')
    //const button = document.querySelector('button')

    let delta =b*b- 4*a*c
    if(inputA.value =="" || inputA.value ==""|| inputA.value ==""){
        alert('Veuillez remplir les champs')

    }
    if (a===0){
        console.log('Veuillez saisir une valeur diffrente de zero');
        return
    }
    
    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Veuillez saisir des valeurs numeriques')
        //console.log('Veuillez saisir un nombre');
       return 
    }

    if(delta > 0)  {
        //console.log('il y a 2 solutions');
        let x1 = (-b - Math.sqrt(delta)) /(2*a)
        let x2 = (-b +Math.sqrt(delta)) /(2*a)

        p.innerHTML ="Il y a 2 solutions x1 = "+x1  + " et " + "x2= " +x2
        display.appendChild(p)
        //console.log(delta);   
        }else if(delta ===0){
            //console.log('une solution reel double');
             p.innerHTML ="Il y a 1 solution réel double"
            display.appendChild(p)
            //console.log(delta);
            
        }else{
            p.innerHTML ="Il n'y a pas de solution réel"
            display.appendChild(p)
            console.log('il n\'y a pas de solution réel')
            console.log(delta);
        }
        for (const input of inputs) {
            
            input.value=""
        }
}


   


//2 solutions
// Solution 1 : x1=−b−Δ−−√2a
// Solution 2 : x2=−b+Δ−−√2a=