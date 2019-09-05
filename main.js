//first gets container with matching id 'first year' and makes it hidden when page loads
document.getElementById('firstYear').style.visibility = 'hidden';

// create event click function that whenever the button id is 'sortButton' it will make the hidden container visible
const sortClick = (e) => {
    const sortID = e.target.id;
    if (sortID === 'sortButton') {
        document.getElementById('firstYear').style.visibility = 'visible';
    }    
}

// added an event listener to the 'sortButton' button that whenever it's clicked, it will run the 'sortClick' function
document.getElementById('sortButton').addEventListener('click', sortClick);