const rolling = document.querySelector(".rolling")





let count = 0;

let imageShower = document.getElementById("imageShower");

let win = document.getElementById("display message");

let display = document.querySelector("win")

let scoring = document.getElementById("score");

rolling.addEventListener(`click`, (event) => {
    console.log(event);
    
        let i = Math.floor(Math.random() *6) + 1;        
        console.log(i)
        
        





if (i === 1) { 
    scoring.innerText = 0;
    count += 0;
    Text.innerHTML = "you lose"
    count =i - 1;
    }

    else if (i > 1) {
        console.log(scoring)
        scoring.innerText
        count += i;
        scoring.textContent = count;
        if(count>20){
            Text.innerHTML = "you win";
            scoring.innerText = 0;
            count = 0;
            imageShower.getElementById("imageShower").src = `./images/fireworks.png`
            

        }}



       




//    else if (i == 21) {

//     win.querySelector("win").innerHTML="You win!";

//     // win.textContent

// }



// images for changing

image_array = [

    `dice1.png`,
    `dice2.png`,
    `dice3.png`,
    `dice4.png`,
    `dice5.png`,
    `dice6.png`,
]





diceroll = image_array[i - 1]


    document.getElementById("imageShower").src = `./images/${diceroll}`
    



});



let reset = document.querySelector(".restart")

reset.addEventListener(`click`, (event) => {

    console.log(event);

    scoring.innerText = 0
    count = 0;
    document.getElementById("imageShower").src = `./images/dice1.png`
    


})
















// 1. Add content to you HTML e.g. Roll button, image for the dice, element to hold the player score, an
// element to display win/lose message, and a reset game button

// 2. Try and get a click event connected to the roll button
//  - for now just console log something in the event so when you click you get a console log back

// 3. Instead try to generate a rndom number when you click the button between 1 - 6
//  - you can console log this value for now when you click the button

// 4. Use that random number to add to a score variable and display that score to the screen

// 5. Display the correct dice image for the number you rolled e.g. if you roll a 3 then show the 3 face of 
//  a dice

// 6. Track if a 1 is generated, if it is then reset the score to 0 and display a lose message

// 7. If the score gets to over 21 then display a win message

// 8. If the player wins or loses then display the reset game button

// 9. Add an event listener to the reset button
//  - test this with a console log you should see when you click the button

// 10. Reset the game when the button is clicked e.g. reset score to 0, hide any win/lose messages, make sure 
//  the roll button is visible etc.