;
(function (window) {

    window.NotesView = function () {};

    NotesView.prototype.render = function (renderCommand, data) {
        var renderCommands = {
            showNotes: function () {
                let showNotesList = document.querySelector('.notes');
                if (showNotesList.getAttribute("data-module") === 'notes') {
                    for (let i = 0; i < data.length; i++){
                      showNotesList.innerHTML +=
                        `<div class="notes__list"><p class="notes__id">${data[i].id}</p><p class="notes__text">
${data[i].text}</p></div>`;
                    }
                }

            }
        };
        renderCommands[renderCommand]();
    }

}(window));