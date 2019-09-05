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
    document.getElementById(divID).innerHTML += toPrint;
}

const studentsNames = document.getElementById('nameInput').value;
const students = [
    {
       studentsNames: '',
       house: '', 
    },
];

const studentCardPrint = (people) => {
    let domString = '<div class="row">';
    for (let i=0; i < people.length; i++) {
        const person = people[i];
        domString += `
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">${person.name}</h5>
                <p class="card-text">${person.house}</p>
                <a href="#" class="btn btn-primary">Expel</a>
            </div>
        </div>
        `
    }
    domString += '</div>';
    students.push(domString);
    printToDOM('houseStudent', domString);
}

const studentSortClick = (e) => {
    const studentSort = e.target.id;
    studentArr = [];
    if (studentSort === 'studentSortButton') {
        studentArr.push(studentsNames);
    }
    studentCardPrint(students);
}

document.getElementById('studentSortButton').addEventListener('click', studentSortClick);