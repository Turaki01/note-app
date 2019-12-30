// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// function to save notes to local storage
const saveNotes = function(note) {
    localStorage.setItem('notes', JSON.stringify(note));
}

//function to return time stamp
const timeStamp = function() {
    return moment().valueOf();
}


//function to render notes
const renderNotes = function(notes) {
    const note =  notes.forEach(note => {
        
        const noteEl = generateDOM(note);
        document.querySelector('#note-col').appendChild(noteEl);
    });

    return note;
}

// function to generate note DOM
const generateDOM = function(note) {
    const noteEl = document.createElement('div')
    const cardDiv = document.createElement('div');
    const rowDiv = document.createElement('div');
    const  noteTitle = document.createElement('h5');
    const noteBody = document.createElement('p');


    rowDiv.setAttribute('class', 'col-md-4');

    cardDiv.setAttribute('class', 'card p-3 mb-md-4');

    if(note.title === '') {
        noteTitle.textContent = 'Unnamed'
    }

    if(note.body === '') {
        noteBody.textContent = 'No body content yet'
    }

    cardDiv.appendChild(noteTitle);

    cardDiv.appendChild(noteBody);

    rowDiv.appendChild(cardDiv);

    return noteEl.appendChild(rowDiv);

}