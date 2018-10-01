;
(function (window) {

    window.NotesModule = function () {
        this.template = new NotesTemplate();
        this.view = new NotesView('notes', this.template);
        this.model = new NotesModel();
        this.controller = new NotesController(this.model, this.view);
    }

    NotesModule.prototype.init = function () {
        this.controller.init();
    }

}(window));