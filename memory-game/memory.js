document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'blue',
            img: 'img/blue.jpg'
        },
        {
            name: 'blue',
            img: 'img/blue.jpg'
        },
        {
            name: 'brown',
            img: 'img/brown.jpg'
        },
        {
            name: 'brown',
            img: 'img/brown.jpg'
        },
        {
            name: 'dove',
            img: 'img/dove.jpg'
        },
        {
            name: 'dove',
            img: 'img/dove.jpg'
        },
        {
            name: 'duck',
            img: 'img/duck.jpg'
        },
        {
            name: 'duck',
            img: 'img/duck.jpg'
        },
        {
            name: 'eagle',
            img: 'img/eagle.jpg'
        },
        {
            name: 'eagle',
            img: 'img/eagle.jpg'
        },
        {
            name: 'hen',
            img: 'img/hen.jpg'
        },
        {
            name: 'hen',
            img: 'img/hen.jpg'
        },
        {
            name: 'hummingbird',
            img: 'img/hummingbird.jpg'
        },
        {
            name: 'hummingbird',
            img: 'img/hummingbird.jpg'
        },
        {
            name: 'owl',
            img: 'img/owl.jpg'
        },
        {
            name: 'owl',
            img: 'img/owl.jpg'
        },
        {
            name: 'parrot',
            img: 'img/parrot.jpg'
        },
        {
            name: 'parrot',
            img: 'img/parrot.jpg'
        },
        {
            name: 'red',
            img: 'img/red.jpg'
        },
        {
            name: 'red',
            img: 'img/red.jpg'
        },
        {
            name: 'swan',
            img: 'img/swan.jpg'
        },
        {
            name: 'swan',
            img: 'img/swan.jpg'
        },
        {
            name: 'tucan',
            img: 'img/tucan.jpg'
        },
        {
            name: 'tucan',
            img: 'img/tucan.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')

    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'img/back.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
          grid.appendChild(card)
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            
            cards[optionOneId].setAttribute('src', 'img/done.png')
            cards[optionTwoId].setAttribute('src', 'img/done.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/back.jpg')
            cards[optionTwoId].setAttribute('src', 'img/back.jpg')
           
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})