/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

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

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
