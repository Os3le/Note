let addButton = document.getElementById('add-button');
let delButton = document.getElementById('delete-button');
let inputs = document.getElementById('inputs');
let blank = document.getElementById('blank');
let createdDelete = document.getElementsByClassName('delete-buttons');

let lists = []

addButton.onclick = function addnote() {

    lists.push(inputs.value);
    inputs.value = ""

    console.log(inputs.value, lists);


    let notes = document.createElement('li')
    notes.setAttribute('class', 'each-note');
    blank.appendChild(notes);

    let textInNotes = document.createElement('input');
    textInNotes.setAttribute('class', 'text-in-notes');

    let eachNoteDelete = document.createElement('button');
    eachNoteDelete.textContent = 'Delete';
    eachNoteDelete.setAttribute('class', 'delete-buttons');
    notes.append(textInNotes, eachNoteDelete);

    lists.forEach(e => {
        textInNotes.value = e;
        notes.setAttribute('id', `${e}`);
        eachNoteDelete.onclick = function deleteNote() {
            notes.remove();
            lists.splice(lists.indexOf(e), 1);
            console.log(lists);
        }
    });


}
delButton.onclick = function deleteNote() {
    blank.innerHTML = "";
}