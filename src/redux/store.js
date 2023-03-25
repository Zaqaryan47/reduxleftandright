import { createStore } from "redux";


const store = createStore(function(state,action){
    
    if(action.type == 'changeName'){

        return{
            ...state,
            user:{
                name:action.payload.name,
                
            },
        }
    };

    if(action.type === 'changeColor'){
        return {
            ...state,
              colors:{

                color:action.payload.color,
           }
        }
    };
    if(action.type === 'changeColor1'){
        return {
            ...state,
            colors1:{

                color:action.payload.color,
           }
        }
    };
    if(action.type === 'changeColor2'){
        return {
            ...state,
            colors2:{

                color:action.payload.color,
           }
        
        }
    };
    if(action.type == 'changeBorder'){
        return {
            ...state,
            borders:{

                border:action.payload.border,
           }
        }
    };

    if(action.type == 'add'){
        return{
            ...state,
            user1:{
                name:action.payload.name
            }
            
        }
    };


return state

},{

    user:{
        name:'Jack',
    },
    user1:{
        name:'jon',
    },
    colors:{
        color:'',
    },
    colors1:{
        color:'',
    },
    colors2:{
        color:'',
    },
    borders:{
        border:'',
    }




})

export default store