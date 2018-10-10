import {
    GithubModule
} from './github/github.module';

var AppModule = (function () {
    return {
        init: function () {
            console.log('AppModule');
            GithubModule.init();
        }
    }
}())

AppModule.init();