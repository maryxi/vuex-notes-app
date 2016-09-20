// import Vuex from 'vuex'

const localStorageMiddleware = {
    onMutation (mutation, state) {
        let localStorage = window.localStorage
        localStorage.setItem('notes', JSON.stringify(state.notes))
    }
}