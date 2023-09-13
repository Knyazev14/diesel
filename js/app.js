import {sort} from './users/sort.js'
import { useDynamicAdapt } from './users/dynamicAdapt.js'
import {modal} from './users/deleteUser.js'



const users = document.querySelector('.users');
const descBlocks = users.querySelectorAll('.users__desc');

descBlocks.forEach((block, index) => {
    if (index % 2 === 0) { // Проверяем, является ли индекс четным
        block.style.backgroundColor = '#ECECEC'; // Меняем цвет фона
    }
});




useDynamicAdapt()
sort()
modal()