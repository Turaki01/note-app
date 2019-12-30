// list of todo
let notes = getSavedNotes();

renderNotes(notes);


//add note 
document.querySelector('#add-note').addEventListener('click', (e) => {
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp(),
        updatedAt: timeStamp()
    });

    saveNotes(notes);

    renderNotes(notes);
});