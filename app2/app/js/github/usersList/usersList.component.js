import {
  getUsers
} from "./getUsers.component";
import {
    renderUsersList
} from "../githubUsers/githubUsers.template";

export var UsersListComponent = (function () {


  return {
        init: function () {
            console.log('UsersListComponent');
            getUsers();
            renderUsersList();
        }
    }
}());