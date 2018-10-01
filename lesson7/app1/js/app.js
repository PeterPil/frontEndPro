;
(function (window) {

    var AppModule = function () {
        this.notesModule = new NotesModule();
    }

    AppModule.prototype.init = function () {
        this.notesModule.init();
    }

    var app = new AppModule()
    app.init();

}(window));