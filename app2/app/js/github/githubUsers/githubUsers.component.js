import {
    UsersListComponent
} from '../usersList/usersList.component';

export var GithubUsersComponent = (function () {
    return {
        init: function () {
            console.log('GithubUsersComponent');
            UsersListComponent.init();
        }
    }
}())