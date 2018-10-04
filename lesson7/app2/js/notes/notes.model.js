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

    NotesModel.prototype.addNote = function (newNoteText, cb) {
        var note = {
            id: new Date().getTime(),
            text: newNoteText
        }
        NOTES_LIST.push(note);
        cb(NOTES_LIST);
    }

    NotesModel.prototype.removeNote = function (id, cb) {
        for (var i = 0; i < NOTES_LIST.length; i++) {
            if (NOTES_LIST[i].id === id) {
                NOTES_LIST.splice(i, 1);
                cb(NOTES_LIST);
                return;
            }
        }
    }
  NotesModel.prototype.searchNote = function (noteText, cb) {
    let NOTES_SEARCH_LIST = [];
    for (var i = 0; i < NOTES_LIST.length; i++) {
      if (NOTES_LIST[i].text === noteText) {
        NOTES_SEARCH_LIST.push(NOTES_LIST[i]);
      }
    }
    cb(NOTES_SEARCH_LIST);
    return;
  }

}(window));