;
(function (window) {

    window.NotesTemplate = function () {
        this.noteTemplate = '<div class="notes__item">{{text}} <button' +
          ' data-id="{{id}}">Remove</button></div>';
        this.searchNoteTempl = '<p>{{text}} - {{id}}</p>'
    }

    NotesTemplate.prototype.getNotesList = function (data) {
        var template = '';
        for (var i = 0; i < data.length; i++) {
            var item = this.noteTemplate;
            item = item.replace('{{text}}', data[i].text);
            item = item.replace('{{id}}', data[i].id);
            template += item;
        }
        return template;
    }
  NotesTemplate.prototype.getSearchNotesList = function (data) {
    var template = '';
    for (var i = 0; i < data.length; i++) {
      var item = this.searchNoteTempl;
      item = item.replace('{{text}}', data[i].text);
      item = item.replace('{{id}}', data[i].id);
      template += item;
      if(data[i] == null) {
          console.log('nothing find');
          return;
      }
    }

    return template;
  }

}(window));