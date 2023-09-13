function modal(){

    let modal = document.querySelector('.delete-modal')
    let modalAdd = document.querySelector('.add-modal')
    let modalEdit = document.querySelector('.edit-modal')
    const selectForm = document.querySelectorAll('.form__select')
    const body = document.querySelector('body')


    selectForm.forEach(item=>{
        item.addEventListener('click', function(e){
            if(e.target.closest('.form__select-btn')){
                item.classList.toggle('active')
            }
        })
    })

    document.addEventListener('click', openModal)


    function openModal(e){
        console.log(e.target)
        if(e.target.closest('.delete')){
            modal.classList.add('modal-open')
        }
        if(!e.target.closest('.modal-delete') && !e.target.closest('.delete') || e.target.closest('.modal-delete__close')){
            modal.classList.remove('modal-open')
        }
        if(e.target.closest('.edit')){
            modalEdit.classList.add('modal-open')
        }
        if(!e.target.closest('.modal-edit') && !e.target.closest('.edit') || e.target.closest('.modal-delete__close')){
            modalEdit.classList.remove('modal-open')
        }
        if(e.target.closest('.add')){
            modalAdd.classList.add('modal-open')
            body.classList.add('body--close') 
        }
        if(e.target.closest('.modal-delete__close')){
            modalAdd.classList.remove('modal-open')
        }
    }
}

export {modal}