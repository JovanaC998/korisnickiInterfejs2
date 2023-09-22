import { createStore } from 'vuex';
import UserModule from './Users/user-module.js';

const store = createStore({
    modules:{
        user:UserModule
    }
});

export default store;