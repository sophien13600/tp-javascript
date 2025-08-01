const favori= document.getElementById('favorite-sports')
const sport = document.getElementById('sports');

function deplacerR(){
    const option =sport.children[sport.selectedIndex]
    favori.appendChild(option)
    favori.selectedIndex = -1;
    sport.selectedIndex = -1
    }
function deplacerL(){
    const optionF = favori.children[favori.selectedIndex]
    sport.appendChild(optionF)
    favori.selectedIndex = -1;
    sport.selectedIndex = -1
        }
function deplacerAllR(){
      for (let i =sport.length-1; i>=0; i--){
            const options = sport.children
            console.log(options[i]);
            favori.appendChild(options[i]);
            }
    }
function deplacerAllL(){
      for (let i =favori.length-1; i>=0; i--){
            const options = favori.children
            console.log(options[i]);
            sport.appendChild(options[i]);
            }
}
function deplacerSelectR(){
    let options = sport.options
        for (let i = options.length - 1; i >= 0; i--) {
            if (options[i].selected) {
            favori.appendChild(options[i]);
            }
        } 
}
function deplacerSelectL(){
    let options = favori.options
        for (let i = options.length - 1; i >= 0; i--) {
            if (options[i].selected) {
            sport.appendChild(options[i]);
            }
        }
}
