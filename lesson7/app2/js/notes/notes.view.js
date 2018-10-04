;
(function (window) {

    window.NotesView = function (moduleName, template) {
        this.moduleName = moduleName;
        this.templateBuilder = template;

        this.moduleContainer = '[data-module="' + this.moduleName + '"] ';
        this.$notesList = document.querySelector(this.moduleContainer + '.notes__list');
        this.$notesAdderBtn = document.querySelector(this.moduleContainer + '.notes__adder-btn');
        this.$notesAdderText = document.querySelector(this.moduleContainer + '.notes__adder-text');
        this.$notesSearchBtn = document.querySelector(this.moduleContainer + '.notes__search-btn');
    };

    NotesView.prototype.render = function (renderCommand, data) {
        var self = this;
        var renderCommands = {
            showNotes: function () {
                // !!! ДЗ !!! отрисовать заметки в HTML
                self.$notesList.innerHTML = self.templateBuilder.getNotesList(data);


            },
            showSearchNotes: function () {
              self.$notesList.innerHTML = self.templateBuilder.getSearchNotesList(data);
            }
        };
        renderCommands[renderCommand]();
    }

    NotesView.prototype.listen = function (eventName, cb) {
        var self = this;
        switch (eventName) {

            case 'addingNote':
                self.$notesAdderBtn.addEventListener('click', function () {
                    var noteText = self.$notesAdderText.value;

                    cb(noteText);
                })
                break;
          case 'removingNote':
            addEventListener('click', function (e) {
              getNoteAtribute(e, cb);
            } );
                break;
          case 'searchNote':
            self.$notesSearchBtn.addEventListener('click', function () {
              var noteText = self.$notesAdderText.value;

              cb(noteText);
            })
              break;
          default:
                break;

        }


    }

}(window));