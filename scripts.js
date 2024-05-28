const buttom = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")


const listaCompleta = document.querySelector(".list-tasks")

let minhaListaDeItems = []

function adicionarNovaTarefa() {
    minhaListaDeItems.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ""

    mostrarTarefas()

}

function mostrarTarefas() {

    let novaLi = ""

    // [Lista, Comgumelo, Cavalo, Macaco]

    minhaListaDeItems.forEach((item, index) => {
        novaLi = novaLi + `
        
            <li class="task ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${index})">
            </li>
            `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(minhaListaDeItems))

}

function concluirTarefa(index) {
    minhaListaDeItems[index].concluida = !minhaListaDeItems[index].concluida

    mostrarTarefas()
}

function deletarItem(index) {
    minhaListaDeItems.splice(index, 1)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem("lista")

    if (tarefasDoLocalStorage) {
        minhaListaDeItems = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()
}

recarregarTarefas()
buttom.addEventListener("click", adicionarNovaTarefa)