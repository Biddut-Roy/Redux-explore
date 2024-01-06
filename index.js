const { createStore } = require("redux")


// state


const initialCounterState = {
    Count: 0
}
const initialUserState = {
    users: [
        {name: 'John', email: 'tiskule@gmail.com'}
    ]
}

//  action 

const incrementCount = () =>{
    return{
        type:'INCREMENT',
    }
}

const decrementCount = () =>{
    return{
        type:'DECREMENT',
    }
}
const UserUpdate = () =>{
    return{
        type:'user_update',
        payload:   {name: 'John sing', email: 'tiskule23voum@gmail.com'}
    }
}

//  reducer 
const updateReducer = (state=initialCounterState , action) =>{
    switch (action.type) {
        case 'INCREMENT':
            return{
                ...state,
                Count: action.Count + 1
            }
            case 'DECREMENT':
            return{
                ...state,
                Count: action.Count + 1
            }

        default:
           state;
    }
}

// store create

const store = createStore(updateReducer)
 store.subscribe(()=>{
    console.log(store.getState());
 })

 store.dispatch(incrementCount())