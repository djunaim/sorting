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

const printToDOM = (divID, toPrint) => {
    document.getElementById(divID).innerHTML = toPrint;
    // have to be here once cards are printed to DOM so event listener can have something to attach to. And that the expel function only runs once there are carsd printed to the DOM
    expel();
} 

const students = [];


const studentCardPrint = (people) => {
    let domString = '<div class="row">';
    for (let i=0; i < people.length; i++) {
        const person = people[i];
        domString += `
        <div class="col-sm-4" id="${person.studentID}">
            <div class="card studentCard">
                <div class="card-body">
                    <h5 class="card-title">${person.name}</h5>
                    <p class="card-text">${person.house}</p>
                    <a href="#" class="btn btn-primary expelButton">Expel</a> 
                    <a href="#" class="btn btn-primary" class="expelButton">Expel</a>
                </div>
            </div> 
        </div>       
        ` 
    }      
    domString += '</div>';
    printToDOM('houseStudent', domString);
}


const studentSortClick = (e) => {
    const studentSort = e.target.id;
    const house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    if (studentSort === 'studentSortButton') {
        // assign value of input with id 'nameInput' to variable studentsNames 
        const studentName = document.getElementById('nameInput').value; 
        // have Math.random multiplied by 4 (for 4 houses) to get a random number between 0-3 (because positions of house array are 0-3) and round number to lowest whole number with Math.floor and assign value to variable randomNum 
        const randomNum = Math.floor(Math.random() * 4 );
        // use randomNum to get position of house at that point and assign value to variable randomHouse
        const randomHouse = house[randomNum];
        // add object to blank students array with .push method. 
        students.push({name: studentName, house: randomHouse});
        } 
    studentCardPrint(students);  
}

const expelClick = (e) => {
    // going into target, getting the innerHTML of the children at position 0 of the parentElement and assigning value to expelStudent
    const expelStudent = e.target.parentElement.children[0].innerHTML;
    for (let i=0; i < students.length; i++) {
        // if the name of the student at position i is equal to expelStudent, then run function 
        if (students[i].name === expelStudent) {
            // removes that object at position i
            students.splice(i, 1);
        }
        // print the new set of students array after splicing
        studentCardPrint(students);
    }
}
    

document.getElementById('studentSortButton').addEventListener('click', studentSortClick);

// create expel function to house expelButton so function will not run before there aren't any cards on the DOM yet
const expel = () => {
    // get all elements with class name 'expelButton' and assign to varible buttonExpel
    const buttonExpel = document.getElementsByClassName('expelButton');
    // create for loop that goes through all cards with the class name 'expelButton'
    for (let i=0; i<buttonExpel.length; i++) {
        // because getElementsByClassName returns an array of objects, need to assign position of where the buttonExpel is clicked to a variable
        const clickedThis = buttonExpel[i];
        // add a click event listener to the expel button that whenever it is clicked, run function expelClick
        clickedThis.addEventListener('click', expelClick);
    }
}