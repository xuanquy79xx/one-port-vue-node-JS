import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const ALL_ROUTER = [
    {
        path: '/',
        component: () => import('../pages/test/index.vue'),
        hidden: true,
        // children: [
        //     {
        //         path: '/',
        //         component: () => import('../pages/homePage/views/index.vue'),
        //         meta: {
        //             title: 'Note Pro'
        //         }
        //     },
        //     {
        //         path: '/post/:id',
        //         component: () => import('../pages/homePage/views/postDetail.vue'),
        //         meta: {
        //             title: 'Note Pro'
        //         }
        //     }
        // ]
    },
    // {
    //     path: '/login',
    //     component: () => import('../pages/login/layout'),
    //     meta: {
    //         title: 'Note Pro'
    //     }
    // },
    // {
    //     path: '/dashboard',
    //     component: () => import('../pages/dashboard/layout/layout.vue'),
    //     hidden: true,
    //     children: [
    //         {
    //             path: '/dashboard/posts',
    //             component: () => import('../pages/dashboard/views/posts/index.vue'),
    //             meta: {
    //                 title: 'Quản lí bài viết | Note Pro'
    //             }
    //         },
    //         {
    //             path: '/dashboard/posts/:_id',
    //             component: () => import('../pages/dashboard/views/posts/index.vue'),
    //             meta: {
    //                 title: 'Quản lí bài viết | Note Pro'
    //             }
    //         },
    //         {
    //             path: '/dashboard/categories',
    //             component: () => import('../pages/dashboard/views/categories'),
    //             meta: {
    //                 title: 'Quản lí bài viết | Note Pro'
    //             }
    //         },
    //         {
    //             path: '/dashboard/reports',
    //             component: () => import('../pages/dashboard/views/reports'),
    //             meta: {
    //                 title: 'Quản lí bài viết | Note Pro'
    //             }
    //         },
    //         {
    //             path: '/dashboard/users',
    //             component: () => import('../pages/dashboard/views/users'),
    //             meta: {
    //                 title: 'Quản lí bài viết | Note Pro'
    //             }
    //         },
    //         // {
    //         //     path: '/dashboard/statistics',
    //         //     component: () => import('../pages/dashboard/views/statistics'),
    //         //     meta: {
    //         //         title: 'Quản lí bài viết | Note Pro'
    //         //     }
    //         // },
    //     ]
    // },
    // {
    //     path: '*',
    //     component: () => import('../pages/notfound/layout/index.vue'),
    //     hidden: true,
    // },
];
var router = new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: ALL_ROUTER,
});

export default router;
