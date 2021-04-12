require('dotenv').config()
const URL = process.env.VUE_APP_URL_SERVER || 'http://localhost:3000/'
export default {
    MEDIA : process.env.VUE_APP_URL_MEDIA || 'http://localhost/handleMedia/',
    POSTS: {
        CREATE: URL + 'posts/create',
        EDIT: URL + 'posts/edit',
        DELETE: URL + 'posts/delete',
        GET: URL + 'posts/get',
        GET_ALL: URL + 'posts/getAll',
        GET_POSTS_BY_PERMISSION: URL + 'posts/getPostsByPermission',
        HOME: URL + 'posts/home'
    },
    CATEGORIES: {
        CREATE: URL + 'categories/create',
        EDIT: URL + 'categories/edit',
        DELETE: URL + 'categories/delete',
        GET: URL + 'categories/get',
        GET_ALL: URL + 'categories/getAllCategories',
    },
    REPORTS: {
        CREATE: URL + 'reports/create',
        EDIT: URL + 'reports/edit',
        DELETE: URL + 'reports/delete',
        GET: URL + 'reports/get',
    },
    USERS: {
        CREATE: URL + 'users/create',
        EDIT: URL + 'users/edit',
        DELETE: URL + 'users/delete',
        GET: URL + 'users/get',
        LOGIN: URL + 'users/login',
        LOGOUT: URL + 'users/logout',
        CHECK_LOGIN : URL + 'users/checkLogin',
        GET_ALL: URL + 'users/getUsersByPermission',
    }
}