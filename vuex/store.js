import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'

Vue.use(Vuex)
const state = {
    notes: [],
    activeNote: {}
}

const setStorage = {
    // onInit (state) {
    //     // let localStorage = window.localStorage
    //     let localNotes = window.localStorage.getItem('notes')
    //     console.log(localNotes)
    //     state.notes = localNotes
    // },
    onMutation (mutation, state) {
        let localStorage = window.localStorage
        localStorage.setItem('notes', JSON.stringify(state.notes))
    }
}

// const getStorage = {
//     onMutation (mutation, state) {
//         
//         if(localNotes) {
//             state.notes.push(localNotes)
//             console.log(state.notes)
//         }
//     }
// }
// const getStorage = {
//     onMutation (mutations, state) {
//         let localStorage = window.localStorage
//         localStorage.getItem('notes')
//     }
// }
const mutations = {
    ADD_NOTE (state, localNotes) {
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
    mutations,
    middlewares: [setStorage]
})