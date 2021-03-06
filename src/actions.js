import * as actions from './actiontypes';


// export default function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED, 
//         payload: {
//             description: "Bug1"
//         }
//     }
// }

export const bugAdded = description => ({
    type: actions.BUG_ADDED, 
    payload: {
        description
    }
})

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED, 
    payload: {
        id: id
    }
})