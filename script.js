// Define an array of lottery ticket numbers
const lotteryTickets = [80, 60, 10, 5, 18, 30]

// Get a reference to the search button
var searchButton = document.getElementById('search-button');

//Add event listener to the search button
searchButton.addEventListener('click',function(){
    //Select a random lottery ticket number
    let winner = lotteryTickets[Math.floor(Math.random() * lotteryTickets.length)];

        // Winner is stored and show in lottery-winner so call the lottery winner by using 'id' random winners pop
        document.getElementById('lottery-winner').innerHTML = winner;

        //Display winner on the page in red color
        document.getElementById('front-page').style.color = 'red' 
        document.getElementById('front-page').innerHTML = 'The  Luckiest winner is : '+ winner;
        
        //Display winner to the console
        console.log('The lucky winner is :'+  winner);
})
