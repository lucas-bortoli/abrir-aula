// Aulas predefinidas; domingo é index 0, segunda index 1, ..., sábado index 6
const Predefinidas = [
    [], // domingo
    [   // segunda
        { hr: '7:15', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1663546/external' },
        { hr: '8:00', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1663548/external' },
        { hr: '8:45', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1663555/external' },
        { hr: '9:30', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1663561/external' },
        { hr: '10:35', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1663563/external' },
        { hr: '11:20', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1663567/external' },
    ],
    [   // terça
        { hr: '7:15', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668074/external' },
        { hr: '8:00', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668082/external' },
        { hr: '8:45', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668085/external' },
        { hr: '9:30', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668093/external' },
        { hr: '10:35', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668095/external' },
        { hr: '11:20', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668101/external' },
        { hr: '13:30', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668102/external' },
        { hr: '15:00', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668103/external' },
        { hr: '16:30', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668105/external' },
    ],
    [   // quarta
        { hr: '7:15', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668177/external' },
        { hr: '8:00', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668179/external' },
        { hr: '8:45', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668185/external' },
        { hr: '9:30', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668188/external' },
        { hr: '10:35', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1668213/external' },
        // 11:20 é o mesmo link
    ],
    [   // quinta
        { hr: '7:15', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669747/external' },
        { hr: '8:00', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669751/external' },
        { hr: '8:45', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669758/external' },
        { hr: '9:30', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669764/external' },
        { hr: '10:35', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669767/external' },
        { hr: '11:20', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669770/external' },
        { hr: '13:30', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669777/external' },
        { hr: '15:00', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669780/external' },
        { hr: '15:45', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669783/external' },
    ],
    [   // sexta
        { hr: '7:15', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669895/external' },
        { hr: '8:00', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669897/external' },
        { hr: '8:45', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669900/external' },
        { hr: '9:30', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669907/external' },
        { hr: '10:35', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669915/external' },
        { hr: '11:20', link: 'https://pearson.lti.elos.vc/rooms/298c3c9cc20c99ee05fb6741f84de6882c851acd/scheduled_meetings/1669918/external' },
    ],
    [], // sábado
]

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
    AulaWindow = window.open(link, '_blank')//, 'width=640,height=480')
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

            // abrir aula, passando os parâmetros para ela
            LoadAula(aula.link + location.search)

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

setTimeout(() => {
    // adicionar aulas pré-programadas
    const dia = (new Date()).getDay()
    const aulas_do_dia = Predefinidas[dia]
    
    for (const aula of aulas_do_dia) { Aulas.push({ horario: aula.hr, link: aula.link, jaFoiAberto: false }) }
}, 500)

setInterval(() => {
    if (AulaWindow) AulaWindow.postMessage(location.search, '*')
}, 500)
