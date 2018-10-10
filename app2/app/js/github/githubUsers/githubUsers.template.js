export var renderUsersList = function () {
  console.log('RENDER USERS LIST');
  console.log(window);

  $(window).on('gottenUsers', function (e, data) {
    // console.log(data.users[0].login);
    $(".gitUsers").html(function () {
      var showUsers = "<div class=\"show-users\">{{text}} <button" +
        " data-id=\"{{id}}\">More information</button></div>";
      var template = '';
      for (var i = 0; i < data.users.length; i++) {
        var item = showUsers;
        item = item.replace('{{text}}', data.users[i].login);
        item = item.replace('{{id}}', data.users[i].id);
        template += item;
      }
      return template;
    });

  });
};