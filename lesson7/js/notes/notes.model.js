;
(function (window) {

    var NOTES_LIST = [{
            id: 1,
            text: 'Some text 1'
        },
        {
            id: 2,
            text: 'Some text 2'
        },
        {
            id: 3,
            text: 'Some text 3'
        }
    ]

    window.NotesModel = function () {}

    NotesModel.prototype.getNotes = function (cb) {
        cb(NOTES_LIST);
    }

    NotesModel.prototype.addNote = function (newNoteText) {
        var note = {
            id: new Date(),
            text: newNoteText
        }
        NOTES_LIST.push(note);
    }

}(window));