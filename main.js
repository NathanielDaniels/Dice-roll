

let diceRoll = () => {
    const dice = document.querySelector('.dice')

    const dot1 = document.querySelector('.dots-1')
    const dot2 = document.querySelector('.dots-2')
    const dot3 = document.querySelector('.dots-3')
    const dot4 = document.querySelector('.dots-4')
    const dot5 = document.querySelector('.dots-5')
    const dot6 = document.querySelector('.dots-6')
    let dotsArray = [dot1, dot2, dot3, dot4, dot5, dot6];
    
    dice.addEventListener('click', () => {
      let randomizer = dotsArray[Math.floor(Math.random() * 5) + 1];
      dotsArray.forEach(item => {
        if (item.classList.contains('active') ) {
          console.log(item);
          item.classList.remove('active');
          item.classList.add('de-active');
        }
      })
      randomizer.classList.add('active');
      randomizer.classList.remove('de-active');
    })
    
}
diceRoll()

