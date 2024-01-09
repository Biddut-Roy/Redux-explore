// plan- 
// State- store 0 .{array , object or any type}
// action- increment , Decrement and Reset . {array function, return data {} under type , payload}
// reducer- array function 2 argument state and action - under switch condition case-1 (any-action set) to return {} and Default state show.
// create-Store- show data store variable.subscribe( under array function under console.log(store variable.getState()))
//  store data action to reducer condition data store set. store variable.dispatch(create_action())

// state

const { createStore } = require("redux")

const INCREMENT  = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const initialStateCounter = {
    count: 0
}

//  action 

const increment = () => {
    return {
        type:INCREMENT
    }
}

const Decrement = () => {
    return{
        type: DECREMENT
    }
}
const Reset = () => {
    return{
        type: RESET
    }
}

const UserUpdate = () => {
    return {
        type: 'user_update',
        payload: { name: 'John sing', email: 'tiskule23voum@gmail.com' }
    }
}

//  reducer 
const reCheckDataSlices = (state = initialStateCounter , action) => {
    switch (action.type) {
        case increment :
            return {
                ...state,
                count: action.count + 1
            }
        case Decrement :
            return {
                ...state,
                count: action.count - 1
            }
        case Decrement :
            return {
                ...state,
                count: 0
            }
    
        default:
            state
    }
}



// store create
const store = createStore(reCheckDataSlices)
store.subscribe(()=>{
    console.log(store.getState());
})
 store.dispatch(increment())
 store.dispatch(increment())
 store.dispatch(Decrement())