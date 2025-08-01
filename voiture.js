function moveRight(){
    
    const voiture =document.getElementById('voiture')
    console.log(voiture.style);
    voiture.style['grid-column-start'] =1
    voiture.style['grid-column-end']=1
    voiture.style['grid-row-end'] =1
    voiture.style['grid-row-start']=1


    voiture.style['grid-column-start'] ='   

    voiture.style['grid-column-end']++

}



    