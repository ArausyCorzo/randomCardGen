let cards = ['J', 'Q', 'K', 'A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let randNL = Math.floor(Math.random() * cards.length);

let icons = ['bi-suit-club-fill', 'bi-heart-fill', 'bi-diamond-fill', 'bi-suit-spade-fill'];
let randIcon = Math.floor(Math.random() * icons.length);

window.onload = () => {
    document.getElementById("number-letter").innerHTML = cards[randNL];
    document.querySelector('.bi').classList.add(icons[randIcon]);
    document.querySelector('.bi-two').classList.add(icons[randIcon]);

    if ((icons[randIcon] === 'bi-diamond-fill') || (icons[randIcon]) === 'bi-heart-fill'){
        document.querySelector('.bi').style.color = 'red';
        document.querySelector('.bi-two').style.color = 'red';
    }
}
