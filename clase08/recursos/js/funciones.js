 window.addEventListener('scroll',function(){
    let altoPantalla = window.innerHeight;
    console.log ('alto pantalla' + altoPantalla);

    let scrollRecorrido = this.document.documentElement.scrollTop;
    console.log('scroll recorrido' + scrollRecorrido);

    let listaDetalle = this.document.querySelectorAll('#secDetalles article');

    //Aplicar la fincionalidad a cada detalle

    listaDetalle.forEach(function(item, index, listado){
        let alturaArticle = listado[index].offsetTop;
        console.log('Posicion Superior ' + index + '::' + alturaArticle);
        if((alturaArticle*0.6) < scrollRecorrido){
            listado[index].style.display = 'block';
        }
        else{
            listado[index].style.display = 'none'
        }

    });

    

});

var listaimagenes = document.querySelectorAll('#secDetalles article figure');
let cantidadimagenes = listaimagenes.length;
console.log('cantidad de article:' + cantidadimagenes);
for (let i = 0; i <cantidadimagenes; i++){
    if (listaimagenes[i].classList.contains('visible')){
        listaimagenes[i].classList.remove('visible');
    }
    listaimagenes[i].classList.add('oculta');
}
let menulista = document.querySelectorAll('#boton li');
for (let j=0; j<menulista.length; j++){
    menulista[j].onclick = function(){
        for (let k=0;k<listaimagenes.length; k++){
            if (listaimagenes[k].classList.contains('visible')){
                listaimagenes[k].classList.remove('visible');
                listaimagenes[k].classList.add('oculta');
            }
        }
    if (listaimagenes[j].classList.contains('oculta')){
        listaimagenes[j].classList.remove('oculta');
    }
    listaimagenes[j].classList.add('visible');
    listaArticle[j].classList.add('escala');
    };
}

