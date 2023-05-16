import { titleEditVotes, setTitles } from "./actionTypes"

const INITIAL_STATE = {}

export const titleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case setTitles:
            return action.allTitles.reduce((accumulator, currentVal) => {
                const { id, title, description, votes } = currentVal
                return ({ ...accumulator, [id]: { title, description, votes, id } })
            }, {})
        case titleEditVotes:
            if (action.postid in state) {
                const newObj = { ...state, [action.postid]: { ...state[action.postid], votes: action.votes } }
                const sortedObj = sortObj(newObj)

                return sortedObj
            } else { return state }

        default:
            return state
    }

    function sortObj(obj) {
        const sortedEntries = Object.entries(obj).sort(([, a], [, b]) => {
            const valueA = a.votes;
            const valueB = b.votes;

            if (valueA < valueB) {
                return 1;
            } else if (valueA > valueB) {
                return -1;
            } else {
                return 0;
            }
        });
        let finalSortedObj = sortedEntries.reduce((acc, val) => {
            return ({ ...acc, [val[0]]: { ...val[1] } })
        }, {})
        console.log('final obje', finalSortedObj)
        return finalSortedObj

    }
}
