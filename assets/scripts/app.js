const addM_modal = document.getElementById("addmodal");
const addMovie = document.getElementById("addMovie");
const backdrop = document.getElementById("backdrop");
const btnCancelMovie= document.querySelector('.btn--passive');
const btnAddNewMovie= document.querySelector('.btn--success');

const movieData=[]

const addAMovie=()=>{
    addM_modal.classList.add('visible');
    toggleBackdrop();

};

const toggleBackdrop=()=>{
    backdrop.classList.toggle('visible');
};

const closeModal =()=>{
    addM_modal.classList.remove('visible');
    backdrop.classList.remove('visible');
    clearInputs();
};

const closeBackdrop=()=>{
    addM_modal.classList.remove('visible');
    backdrop.classList.remove('visible');
};

const newMovie=()=>{
    const title = document.querySelector('#title').value.trim;
    const url= document.querySelector('#image-url').value.trim;
    const rating = document.querySelector('#rating').value;
    if(title !==""){
        if(url !==""){
            if(rating < 1 || rating <5){
                let movieObj = {
                    title : title,
                    url: url,
                    Rating: rating
                }
                movieData.push(movieObj);
            }else{
                alert('invalid rating selected')
            }
        }else{
            alert('some fields are empty')

        }
    }else{
        alert('No movies added')

    }
    clearInputs();

};

const clearInputs=()=>{
    document.querySelector('#title').value ="";
    document.querySelector('#image-url').value ="";
    document.querySelector('#rating').value ="";


};




addMovie.addEventListener('click', addAMovie);
backdrop.addEventListener('click', closeBackdrop);
btnAddNewMovie.addEventListener('click', newMovie);
btnCancelMovie.addEventListener('click', closeModal);

