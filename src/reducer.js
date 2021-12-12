import * as actions from './actiontypes';
// []

let lastId = 0;

export default function reducer(state = [], action) {
    // switch (action.type) {
    //     case 'budAdded': 
    //         return [
    //             ...state, 
    //             {
    //                 id: ++lastId,
    //                 description: action.payload.description, 
    //                 resolved: false, 
    //             } 
                
    //         ];
    //     case 'bugRemoved':
    //         return state.filter(bug => bug.id !== action.playload.id);
    //     default: 
    //         return state;
    //}

    if (action.type === actions.BUG_ADDED)  {
        return [
            ...state, 
            {
                id: ++lastId,
                description: action.payload.description, 
                resolved: false, 
            } 
            
        ];

    }
    if (action.type === actions.BUG_REMOVED) {
        //const toBeRemoved = state.map(bug => console.log(action.payload.id));
        // console.log(toBeRemoved)
        return state.filter(bug => bug.id !== action.playload.id);

    }

    if (action.type === actions.BUG_RESOLVED) {
        return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
    }
    
    console.log(state, 'state in reducer')
    return state; 
    
}