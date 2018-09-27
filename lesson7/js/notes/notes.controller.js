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
        this.model.addNote(function (notesList) {
          self.view.render('showNotes', notesList);
        });
    }


}(window));