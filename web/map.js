const dots = [
    {
        info: {
            name: "Athény",
            id: "Atheny",
            img: './imgs/atheny.jpg',
            mainText: "",
            person: [
                {name: "Antifón", id: "Antifon", headeImg: "./headImgs/Antifon.jpg", color: "white", textContent: [
                    "Byl starořecký řečník, logograf (autor soudních řečí) a politický myslitel.",
                    "Žil v <b>5. století př. n. l.</b> a působil v <b></b>.",
                    "Patřil mezi první <b>sofisty</b> a je považován za zakladatele profesionální <b>rétoriky</b>.",
                    "Psával <b>soudní řeči</b>, které si lidé kupovali pro svou obhajobu u soudu.",
                    "Byl zapojen do <b></b>.",
                    "Po pádu režimu byl <b>odsouzen za zradu</b> a popraven.",
                    "Dochovalo se několik jeho řečí, například <b>\"O vraždě Heroda\"</b>.",
                    "Jeho práce jsou důležité pro poznání <b>athénského práva a rétoriky</b>."
                ]},
                {name: "Amfikratés", id: "Amfikrates", headeImg: "./headImgs/noImage.jpg", color: "white", textContent: []},
                {name: "Isokratés", id: "Isokrates", headeImg: "./headImgs/noImage.jpg", color: "white", textContent: []},
                {name: "Kalliklés", id: "Kallikles", headeImg: "./headImgs/noImage.jpg", color: "white", textContent: []},
                {name: "Kratylos", id: "Kratylos", headeImg: "./headImgs/noImage.jpg", color: "green", textContent: []},
                {name: "Kritiás", id: "Kritias", headeImg: "./headImgs/Kritias.jpeg", color: "white", textContent: []},
                {name: "Polykratés", id: "Polykrates", headeImg: "./headImgs/Polykrates.jpg", color: "white", textContent: []},
                {name: "Solón", id: "Solon", headeImg: "./headImgs/Solon.jpg", color: "yellow", textContent: []},
                {name: "Theaitétos", id: "Theaitetos", headeImg: "./headImgs/Theaitos.jpg", color: "red", textContent: []},
                {name: "Theramenés", id: "Theramenes", headeImg: "./headImgs/Theramenes.jpg", color: "black", textContent: []}
            ]
        },
        history: [
            {year: [-800, -639], color: "black"},
            {year: [-638, -558], color: "yellow"},
            {year: [-557, -501], color: "black"},
            {year: [-500, -450], color: "green"},
            {year: [-449, -418], color: "white"},
            {year: [-417, -369], color: "red"},
            {year: [-368, -338], color: "white"},
            {year: [-337, -121], color: "black"},
            {year: [-120, -86], color: "white"},
            {year: [-85, 31], color: "black"},
        ]
    },
    {
        info: {
            name: "Milét",
            id: "Milet",
            img: './imgs/milet.png',
            mainText: "Milét byla <b>řecká polis v Malé Asii</b>. Rodiště <b>milétské školy filozofů</b> – <b>Thalés, Anaximandros, Anaximenés</b>. Známá <b>obchodem a kulturní výměnou</b> s Východem.",
            person: [
                {name: "Thalés", id: "Thales", headeImg: "./headImgs/Thales.png", color: "green", textContent: []},
                {name: "Anaximandros", id: "Anaximandros", headeImg: "./headImgs/Anaximandros.jpg", color: "green", textContent: []},
                {name: "Anaximenés", id: "Anaximenes", headeImg: "./headImgs/Anaximenes.jpg", color: "green", textContent: []},
                {name: "Archelaos", id: "Archelaos", headeImg: "./headImgs/Archelaos.png", color: "orange", textContent: []},
                {name: "Hekataios", id: "Hekataios", headeImg: "./headImgs/Hekataios.jpg", color: "white", textContent: []},
                {name: "Leukippos", id: "Luekippos", headeImg: "./headImgs/Leukippos.jpg", color: "blue", textContent: []}
            ]
        },
        history: [
            {year: [-800, -625], color: "black"},
            {year: [-624, -551], color: "green"},
            {year: [-550, -491], color: "white"},
            {year: [-490, -461], color: "blue"},
            {year: [-460, -399], color: "orange"},
            {year: [-398, 31], color: "black"}
        ]
    },
    {
        info: {
            name: "Priéné",
            id: "Priene",
            img: './imgs/priene.jpg',
            mainText: "",
            person: [
                {name: "Bias", id: "Bias", headeImg: "./headImgs/Bias.jpg", color: "yellow", textContent: []},
                {name: "Mandrolytos", id: "Mandrolytos", headeImg: "./headImgs/noImage.jpg", color: "green", textContent: []}
            ]
        },
        history: [
            {year: [-800, -601], color: "black"},
            {year: [-600, -575], color: "green"},
            {year: [-574, -530], color: "yellow"},
            {year: [-529, 31], color: "black"},
        ]
    },
    {
        info: {
            name: "Himéra",
            id: "Himera",
            img: './imgs/himera.jpg',
            mainText: "",
            person: [
                {name: "Idaeus", id: "Idaeus", headeImg: "./headImgs/noImage.jpg", color: "green", textContent: []},
                {name: "Petron", id: "Petron", headeImg: "./headImgs/noImage.jpg", color: "red", textContent: []}
            ]
        },
        history: [
            {year: [-800, -541], color: "black"},
            {year: [-540, -505], color: "green"},
            {year: [-504, -470], color: "red"},
            {year: [-469, 31], color: "black"}
        ]
    }
]

const colors = {
    white: "rgb(163, 157, 157)",
    green: "rgb(4, 167, 17)",
    blue: "rgb(43, 119, 206)",
    orange: "rgb(199, 133, 10)",
    black: "rgb(0,0,0)",
    yellow: "rgb(212, 195, 35)",
    red: "rgb(179, 12, 0)",
}

let year
const range = document.querySelector('#slider');
const currentTimeEl = document.querySelector('#currentTime');

function initTime(event) {
    year = Number(event.target.value);
    currentTimeEl.textContent = year;

    dots.forEach(dot => {
        dot.history.forEach(interval => {
            if (interval.year[0] <= year && interval.year[1] >= year) {
                const color = interval.color;
                const circleElement = document.querySelector("#" + dot.info.id);

                if (circleElement) {
                    circleElement.style.fill = colors[color];
                    if (color != "black") {
                        circleElement.style.r = 9
                        circleElement.style.filter = `
                        drop-shadow(0 0 10px ${colors[color]})
                        drop-shadow(0 0 10px ${colors[color]})
                        `;
                    } else {
                        circleElement.style.r = 8
                        circleElement.style.filter = 'none'
                    }
                }
            }
        });
    });
}

range.addEventListener('input', initTime)

year = -776
currentTimeEl.textContent = year

function initDot(event) {
    const clickedId = event.target.id;
    const e = dots.find(d => d.info.id === clickedId);
    if (!e) return

    const sideBar = document.querySelector('.sideBar')

    if (sideBar) {
        const h1 = sideBar.querySelector('.topContent h1')
        h1.textContent = e.info.name

        const img = sideBar.querySelector('img')
        img.src = e.info.img

        const cityText = sideBar.querySelector('.mainText p')
        cityText.innerHTML = e.info.mainText

        const pElement = document.querySelector('.fylozofove')
        pElement.innerHTML = ''

        e.info.person.forEach(fylozof => {
            const personDiv = document.createElement('div')
            personDiv.classList.add('person')
            personDiv.id = fylozof.id
            
            const pH3 = document.createElement('h3')
            pH3.textContent = fylozof.name

            const pImg = document.createElement('img')
            pImg.src = fylozof.headeImg
            pImg.alt = fylozof.name
            pImg.style.border = '5px solid ' + colors[fylozof.color]

            personDiv.appendChild(pH3)
            personDiv.appendChild(pImg)
            pElement.appendChild(personDiv)

            personDiv.addEventListener('mouseenter', () => {
                pH3.style.visibility = 'visible';
                pH3.style.opacity = '1';
            });

            personDiv.addEventListener('mouseleave', () => {
                pH3.style.visibility = 'hidden';
                pH3.style.opacity = '0';
            });

        })
    }

    document.querySelector('.fylozofove').addEventListener('click', (e) => {
        const person = e.target.closest('.person');
        if (!person) return;

        const popUpContainer = document.querySelector('.popUpContainer')
        const popUpWin = popUpContainer.querySelector('.popUpWin')
        popUpWin.innerHTML = ''

        const name = person.querySelector('h3').textContent;

        const nameContainer = document.createElement('div') 
        nameContainer.classList.add('nameContainer')

        const nameEl = document.createElement('h1')
        nameEl.textContent = name

        const underlineEl = document.createElement('div')
        underlineEl.classList.add('underline')

        const svgNS = "http://www.w3.org/2000/svg";

        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("id", "popUpBackButton");
        svg.setAttribute("viewBox", "0 0 32 32");

        const g = document.createElementNS(svgNS, "g");

        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", "M14.389 7.956v4.374l1.056 0.010c7.335 0.071 11.466 3.333 12.543 9.944-4.029-4.661-8.675-4.663-12.532-4.664h-1.067v4.337l-9.884-7.001 9.884-7zM15.456 5.893l-12.795 9.063 12.795 9.063v-5.332c5.121 0.002 9.869 0.26 13.884 7.42 0-4.547-0.751-14.706-13.884-14.833v-5.381z");

        svg.appendChild(g);
        svg.appendChild(path);

        popUpWin.appendChild(nameContainer)
        nameContainer.appendChild(nameEl)
        nameContainer.appendChild(underlineEl)

        const personId = person.id
        const dotData = dots.find(d => d.info.id === clickedId)
        const filozofData = dotData?.info.person.find(p => p.id === personId);
        const liData = filozofData.textContent 

        if(liData.length > 0) {
            const cardsDiv = document.createElement('div')
            cardsDiv.classList.add('flashCards')

            const ul = document.createElement('ul')

            popUpWin.appendChild(cardsDiv)
            cardsDiv.appendChild(ul)

            liData.forEach((liText) => {
                let liEl = document.createElement('li')
                liEl.innerHTML = liText  
                ul.appendChild(liEl)
            })
        }

        popUpWin.appendChild(svg);

        svg.addEventListener('click', () => {
            hidePopUp(popUpContainer)
        })

        showPopUp(popUpContainer)
    })

    showSideBar(sideBar)
}

function showSideBar (element) {
    element.classList.add('active')
    backButtonSideBar.classList.add('active')
}

function hideSideBar (element) {
    element.classList.remove('active')
    backButtonSideBar.classList.remove('active')
}

function showPopUp (element) {
    element.classList.add('active')
}

function hidePopUp (element) {
    element.classList.remove('active')
}

const circles = document.querySelectorAll('circle');

circles.forEach(circle => {
    circle.addEventListener('click', initDot);
});

const backButtonSideBar = document.querySelector('#sideBarBackButton')
backButtonSideBar.addEventListener('click', () => {
    hideSideBar(document.querySelector('.sideBar'))
})