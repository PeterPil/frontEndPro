;
(function (window) {

    window.NotesController = function (model, view) {
        this.model = model;
        this.view = view;
    }

    NotesController.prototype.init = function () {
        var self = this;
        this.model.getNotes(function (notesList) {
            self.view.render('showNotes', notesList);
        });
        this.view.listen('addingNote', function (newNoteText) {
            self.addNote(newNoteText);
        });

        this.view.listen('removingNote', function (noteId) {
            self.removeNote(noteId);
        });

        this.view.listen('searchNote', function (newNoteText) {
            self.searchNote(newNoteText);
        });
    }

    NotesController.prototype.addNote = function (newNoteText) {
        var self = this;
        self.model.addNote(newNoteText, function (notesList) {
            self.view.render('showNotes', notesList);
        })
    }

    NotesController.prototype.removeNote = function (id) {
        var self = this;
        self.model.removeNote(id, function (notesList) {
            self.view.render('showNotes', notesList);
        })
    }
  NotesController.prototype.searchNote = function (noteText) {
    var self = this;
    self.model.searchNote(noteText, function (notesList) {
      self.view.render('showSearchNotes', notesList);
    })
  }


}(window));