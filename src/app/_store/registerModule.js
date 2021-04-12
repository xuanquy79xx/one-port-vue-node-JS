import STORE from './index'
export default async function () {
    return await new Promise(resolve => {
        Promise.all([
            import('../lang/_store'),
            import('../pages/test/_store'),
        ]).then(data => {
            data.forEach(store => {
                STORE.registerModule(store.default.KEY_NAME, store.default)
            })
            resolve()
        });
    })
}
