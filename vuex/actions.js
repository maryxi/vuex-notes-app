export const addNote = ({ dispatch }) => {
    dispatch('ADD_NOTE')
}

export const editeNote = ({dispatch}, e) => {
    dispatch('Edite_NOTE', e.target.value)
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