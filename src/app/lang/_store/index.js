import KEY from '../../const/storeKey'
const { ACTIONS, _LANGUAGES } = KEY
const ACTION = ACTIONS._LANGUAGES
import langEn from '../en'
import langVi from '../vi'

export default {
    KEY_NAME: _LANGUAGES,
    ACTION,
    namespaced: true,
    state: {
        lang: localStorage.getItem('lang') && localStorage.getItem('lang').toLowerCase() == 'en' ? langEn : langVi,
        currentLanguage: null
    },
    getters: {
        lang: state => state.lang,
    },
    mutations: {
        CHANGE_LANGUAGES(state, lang) {
            state.lang = String(lang).toLowerCase() == 'en' ? langEn : langVi
            localStorage.setItem('lang', String(lang).toLowerCase())
        }
    },
    actions: {
        CHANGE_LANGUAGES({ commit }, lang) {
            commit(ACTION.CHANGE_LANGUAGES, lang);
        }
    }
}
