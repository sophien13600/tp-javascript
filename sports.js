const listeD= document.getElementById('favorite-sports')
const sport = document.getElementById('sports');

function deplacerR(){
    const  favori= document.createElement('option')
    const selectedOption = sport.options[sport.selectedIndex]; 
    for (let i = 0; i < listeD.options.length; i++) {
        if (listeD.options[i].value === selectedOption.value) {
            return
        }
     }
                favori.value = sport.value
                favori.text = selectedOption.text
                listeD.appendChild(favori)
    }
function deplacerAllR(){
    if(listeD.length === 0){
        for(let i =0; i <sport.options.length; i++){
            const  favoris= document.createElement('option')
            favoris.value = sport.options[i].value
            favoris.text = sport.options[i].text
            listeD.appendChild(favoris)
        }
    }
}