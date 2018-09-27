;
(function (window) {

    window.NotesModule = function () {
        this.view = new NotesView();
        this.model = new NotesModel();
        this.controller = new NotesController(this.model, this.view);
    }

    NotesModule.prototype.init = function () {
        this.controller.init();
    }

}(window));