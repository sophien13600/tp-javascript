const voiture =document.getElementById('voiture')
voiture.style['grid-column-end']=1
voiture.style['grid-column-start']=1
voiture.style['grid-row-start'] =1
voiture.style['grid-row-end'] =1

function moveRight(){
    if((voiture.style['grid-row-start']>= 2) &&  (voiture.style['grid-row-start']<5) || (voiture.style['grid-row-start']>= 6) &&  (voiture.style['grid-row-start']<9)){
    return
    }
    if((voiture.style['grid-column-end']) != 9){
        voiture.style['grid-column-start']++
        voiture.style['grid-column-end']++
    }
}
function moveLeft(){
    if((voiture.style['grid-row-start']>= 2) &&  (voiture.style['grid-row-start']<5) || (voiture.style['grid-row-start']>= 6) &&  (voiture.style['grid-row-start']<9)){
    return
    }
        voiture.style['grid-column-start']--
        voiture.style['grid-column-end']--
   }
function moveBottom(){
    if((voiture.style['grid-column-start']>= 2) &&  (voiture.style['grid-column-start']<5) || (voiture.style['grid-column-start']>= 6) &&  (voiture.style['grid-column-start']<9)){
    return
    }
    if((voiture.style['grid-row-end']) != 9){
        voiture.style['grid-row-start']++
        voiture.style['grid-row-end']++
    }
   }
    function moveTop(){
        if((voiture.style['grid-column-start']>= 2) &&  (voiture.style['grid-column-start']<5) ||(voiture.style['grid-column-start']>= 6) &&  (voiture.style['grid-column-start']<9)){
    return
    }
        voiture.style['grid-row-start']--
        voiture.style['grid-row-end']--
   } 



    