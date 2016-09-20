import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    notes: [],
    activeNote: {}
}

const mutations = {
    ADD_NOTE (state) {
        const newNote = {
            text: 'this is a newNote',
            fav: false
        }
        state.notes.push(newNote)
        state.activeNote = newNote
    },
    Edite_NOTE (state, text) {
        state.activeNote.text = text
    },
    DEL_NOTE (state) {
        state.activeNote = state.notes[0]
        state.notes.$remove(state.activeNote)
    },
    TOGGLE_FAV (state) {
        state.activeNote.fav = !state.activeNote.fav
    },
    SET_ACTIVE_NOTE (state, note) {
        state.activeNote = note
    }
}

export default new Vuex.Store({
    state,
    mutations
})