const botonAgregar = document.getElementById('boton-agregar');
const input = document.getElementsByClassName('input');
const container = document.querySelector('.container');
// let inputItem;
// let botonEditar;
// let botonRemover;

class Item {
    constructor(newTask) {
        this.crearDiv(newTask)
    }

    crearDiv(newTask) {
        const inputItem = document.createElement('input')
        inputItem.setAttribute('type', 'text');
        inputItem.setAttribute('disabled', 'true');
        inputItem.setAttribute('value', newTask);
        inputItem.classList.add('item-input');
        const item = document.createElement('div');
        item.classList.add('item');
        const botonEditar = document.createElement('button', { class: 'boton-editar' });
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        const botonRemover = document.createElement('button', { class: 'boton-remover' });
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";

        item.append(inputItem, botonEditar, botonRemover);
        container.appendChild(item);
        console.log(inputItem)

        botonEditar.addEventListener('click', () => {
            if (inputItem.disabled) {
                inputItem.disabled = false;
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
            } else if (!inputItem.disabled) {
                botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>";
                inputItem.disabled = true;
            }
        })
        botonEditar.removeEventListener('click', () => {
            if (inputItem.disabled) {
                inputItem.disabled = false;
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
            } else if (!inputItem.disabled) {
                botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>";
                inputItem.disabled = true;
            }
        })

        botonRemover.addEventListener('click', () =>{
            item.remove()
        })
        botonRemover.removeEventListener('click', () =>{
            item.remove()
        })
    }
}

function chequearInput(){
    if(input[0].value !== ''){
        console.log(input[0].value)
        new Item(input[0].value);
        input[0].value = '';
    }
}

botonAgregar.addEventListener('click', chequearInput);
// botonAgregar.removeEventListener('click', chequearInput);
