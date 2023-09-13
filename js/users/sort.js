function sort(){
    const sort = document.querySelector('.sort')

    document.addEventListener('click', openList)

    function openList(e){
        if(e.target.closest('.sort__btn')){
            sort.classList.toggle('sort--open') 
        }
        if(!e.target.closest('.sort')){
            sort.classList.remove('sort--open') 
        }
    }
}

export {sort}