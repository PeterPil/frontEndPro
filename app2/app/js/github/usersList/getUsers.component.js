export var getUsers = function () {
  console.log('USERS LIST');
  // $.ajax({
  //     url: 'https://api.github.com/users',
  //     success: function (res) {
  //         console.log(res);
  //     }
  // })
  $.get('https://api.github.com/users', function (res) {

    $(window).trigger('gottenUsers', {
      users: res
    });
  })
};