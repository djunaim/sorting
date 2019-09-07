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
        // assign value of input type with id 'nameInput' to variable studentsNames 
        const studentName = document.getElementById('nameInput').value; 
        const randomNum = Math.floor(Math.random() * 4 );
        const randomHouse = house[randomNum];
        students.push({name: studentName, house: randomHouse, studentID: students.length + 1 });
        } 
    studentCardPrint(students);  
}

const expelClick = (e) => {
    const expelStudent = e.target.parentElement.children[0].innerHTML;
    console.log(expelStudent);
    for (let i=0; i < students.length; i++) {
        console.log(students[i], expelStudent);
        if (students[i].name === expelStudent) {
            students.splice(i, 1);
        }
        studentCardPrint(students);
    }
}
    

document.getElementById('studentSortButton').addEventListener('click', studentSortClick);
const expel = () => {
    const buttonExpel = document.getElementsByClassName('expelButton');
    console.log(buttonExpel);
    for (let i=0; i<buttonExpel.length; i++) {
        const clickedThis = buttonExpel[i];
        clickedThis.addEventListener('click', expelClick);
    }
}