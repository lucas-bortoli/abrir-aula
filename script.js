const Aulas = [
    /*
    {
        horario: '7:15',        --> igual o .value do elemento #aulahorario
        link: 'https://...',    --> igual o link dado em #aulalink
        jaFoiAberto: false      --> previne abrir novamente
    }
    */
]
let AulaWindow // = window.open(Aulas[x].link)

// código UI abaixo
const HabilitarPopupsBtn = document.querySelector('#habilitarPopups')
const AbrirPopupBtn = document.querySelector('#abrir-popup-agendar')

const PopupAula = document.querySelector('.popup')
const PopupFecharBtn = document.querySelector('#close-add-aula')
const PopupHorarioField = document.querySelector('#aulahorario')
const PopupLinkField = document.querySelector('#aulalink')
const PopupAgendarBtn = document.querySelector('#agendar-confirm')

const ListaAulasUl = document.querySelector('#lista-aulas')

const LoadAula = (link) => {
    // verificar se janela de aula está aberta
    if (AulaWindow && !AulaWindow.closed) {
        // abrir o link na janela existente
        AulaWindow.location.replace(link)
        return
    }

    // criar uma nova janela e abrir nela
    AulaWindow = window.open(link, '_blank', 'width=640,height=480')
}

const CreateClassListItem = (hr, link, index) => {
    const li = document.createElement('li')
        const horario = document.createElement('a')
        const removebtn = document.createElement('a')

    li.classList.add('class')
    horario.classList.add('horario')
    removebtn.classList.add('remove')
    horario.innerText = `${hr.split(':')[0].padStart(2, '0')}h${parseInt(hr.split(':')[1]) || ''}`
    removebtn.href = '#'
    horario.href = link
    horario.target = '_blank'
    removebtn.innerHTML = '&times;'
    removebtn.onclick = () => {
        // remover da lista
        Aulas.splice(index, 1)
        RefreshClassListItems()
    }

    li.appendChild(horario)
    li.appendChild(removebtn)
    ListaAulasUl.appendChild(li)
}

const RefreshClassListItems = () => {
    // limpar lista de aulas para ser atualizada na interface
    ListaAulasUl.innerHTML = ''

    if (Aulas.length == 0) {
        ListaAulasUl.innerText = 'Nenhuma aula agendada'
    }

    for (let i = 0; i < Aulas.length; i++) {
        const aula = Aulas[i]
        // atualizar lista de aulas na interface
        CreateClassListItem(aula.horario, aula.link, i)
    }
}

// função primária, executada periodicamente a cada 1 segundo
const mainLoop = setInterval(() => {
    const now = new Date()

    for (const aula of Aulas) {

        // se a aula já foi aberta, parar aqui
        if (aula.jaFoiAberto) continue
        
        // se o código chegou aqui, é porque a aula ainda não foi aberta
        // verificar se está na hora de abrir essa aula
        const aulaDate = new Date()
        aulaDate.setHours(aula.horario.split(':')[0])       // converter '13:30' para uma data válida em JavaScript
        aulaDate.setMinutes(aula.horario.split(':')[1])
        aulaDate.setSeconds(0)

        // verificar se o "agora" está além do horário de aula
        if (aulaDate < now) {
            console.log('Abrindo aula', aula)

            // abrir aula
            LoadAula(aula.link)
            aula.jaFoiAberto = true
        }
    }

    RefreshClassListItems()
}, 2000)

AbrirPopupBtn.addEventListener('click', () => {
    PopupHorarioField.selectedIndex = 0
    PopupLinkField.value = ''
    PopupAula.classList.remove('fechado')
})

PopupAgendarBtn.addEventListener('click', () => {
    // validar formulário
    try {
        const _ = new URL(PopupLinkField.value)
    } catch (_) {
        return alert('Link inválido!')
    }

    let v = PopupHorarioField.value

    if (v == '__') {
        v = (new Date()).getHours() + ':' + (new Date().getMinutes()+1)
    }

    // adicionar aula à lista
    Aulas.push({
        horario: v || PopupHorarioField.value,
        link: PopupLinkField.value,
        jaFoiAberto: false
    })

    PopupAula.classList.add('fechado')

    RefreshClassListItems()
})
PopupFecharBtn.addEventListener('click', () => {
    PopupHorarioField.selectedIndex = 0
    PopupLinkField.value = ''
    PopupAula.classList.add('fechado')
})

HabilitarPopupsBtn.addEventListener('click', () => {
    const scriptTag = document.createElement('script')
    scriptTag.text = `
    alert('Um popup será aberto. O seu navegador provavelmente irá bloqueá-lo, mas é importante que você permita que TODOS OS POPUPS NESSE SITE SEJAM ACEITOS. Esse procedimento é necessário por motivos técnicos impostos pelos navegadores.')
    setTimeout(() => {
        const wind = window.open('popup_setup.html', '_blank', 'width=640,height=480')
    }, 1100)
    `
    document.body.appendChild(scriptTag)
})

RefreshClassListItems()