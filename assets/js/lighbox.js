

const imagenes=document.querySelectorAll('.img-galeria');
const imagenesLight=document.querySelector('.agregar-imagen');
const contenedorLigth=document.querySelector('.imagen-light');
const hamburguer1 = document.querySelector(".hamburguer");

imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{

        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLigth.addEventListener('click',(e)=>{
    if(e.target !=imagenesLight){
        imagenesLight.classList.toggle("showImage");
        contenedorLigth.classList.toggle("show");
        hamburguer1.style.opacity='1';
    }
})

const aparecerImagen =(imagen)=>{
    imagenesLight.src=imagen;
    imagenesLight.classList.toggle("showImage");
    contenedorLigth.classList.toggle("show");
    hamburguer1.style.opacity='0';
}
