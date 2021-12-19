document.addEventListener('DOMContentLoaded', () => {
    // card option
    const cardsArray = [
        {
            name: 'fries',
            img: 'js/images/fries.png'
        }, 
        {
            name: 'cheeseburger',
            img: 'js/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'js/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'js/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'js/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'js/images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'js/images/fries.png'
        }, 
        {
            name: 'cheeseburger',
            img: 'js/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'js/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'js/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'js/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'js/images/hotdog.png'
        },
    ]
    
    cardsArray.sort(()=>0.5 - Math.random());
    console.log(cardsArray);

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen =[]
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard(){
        for (let i = 0; i< cardsArray.length; i++){
           const card = document.createElement('img')
           card.setAttribute('src', 'js/images/blank.png')
           card.setAttribute('data-id', i)
           card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    

    function flipCard(){
       let cardId= this.getAttribute('data-id')
       cardsChosen.push(cardsArray[cardId].name)
       cardsChosenIds.push(cardId)

       this.setAttribute('src', cardsArray[cardId].img)
       if(cardsChosen.length === 2){
           setTimeout(checkForMatch, 500)
       }

    }

    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
  
        if (optionOneId== optionTwoId){
            alert('You have clicked the same image')
            cards[optionOneId].setAttribute('src', 'js/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'js/images/blank.png')
        } else if (cardsChosen[0]=== cardsChosen[1]){
            alert('you have found a match')
            cards[optionOneId].setAttribute('src', 'js/images/white.png')
            cards[optionTwoId].setAttribute('src', 'js/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'js/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'js/images/blank.png')

            alert('sorry try again')
        }

        cardsChosen =[]
        cardsChosenIds = []
        resultDisplay.textContent= cardsWon.length
        if(cardsWon.length === 6){
            resultDisplay.textContent=' congrats, you won'
        }


        console.log(cardsChosen)
        console.log(cardsWon)

    }

    createBoard();
})

