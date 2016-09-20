// let localStorage = window.localStorage

export const addNote = ({ dispatch, state }) => {
    dispatch('ADD_NOTE')
    console.log(state.notes)
}

export const editeNote = ({dispatch, state}, e) => {
    dispatch('Edite_NOTE', e.target.value)
    // localStorage.setItem('notes', JSON.stringify(state.notes))
}

export const delNote = ({ dispatch }) => {
    dispatch('DEL_NOTE')
}

export const toggleFav = ({ dispatch }) => {
    dispatch('TOGGLE_FAV')
}

export const setActive = ({ dispatch }, note) => {
    dispatch('SET_ACTIVE_NOTE', note)
}