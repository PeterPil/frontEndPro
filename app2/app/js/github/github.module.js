import {
    GithubUsersComponent
} from './githubUsers/githubUsers.component';

export var GithubModule = (function () {
    return {
        init: function () {
            console.log('GithubModule');
            GithubUsersComponent.init();
        }
    }
}())