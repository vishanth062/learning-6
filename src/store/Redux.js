import { createSlice, configureStore } from '@reduxjs/toolkit'


const initialData = JSON.parse(localStorage.getItem('data')) || [];


const initialValue=initialData.length

const val={data:initialData,BUTTON:true}




const counter =createSlice({
    initialState:initialValue,
    name:'counter',
    reducers:{
        increment:(state)=>state+1,
        decrement:(state)=>state-1,
        getValue: (state) => {
            state = JSON.parse(localStorage.getItem('data')).length;
             return state; // Return the updated state
          },
         
    }
    
})
export const {increment,decrement,getValue}=counter.actions;


const cart=createSlice({
    initialState:val,
    name:'cart',
    reducers:{
        incrementData:(state,action)=>{
            state.data = [...state.data, action.payload]; 
      localStorage.setItem('data', JSON.stringify(state.data));
     
        },

        decrementData:(state,action)=>{

            const index=state.data.findIndex(DATA=>DATA.id===action.payload.id)
            if(index!==-1){
                const newData = [
                    ...state.data.slice(0, index),
                    ...state.data.slice(index + 1)
                ];
                localStorage.setItem('data',JSON.stringify(newData))
                return{...state,data:newData}
            }
            //console.log(temp,"well")
            return state
           
            

                
            },
            toggale:(state)=>{
                state.BUTTON=(!state.BUTTON)
            },

            remove:(state,action)=>{
              const newData=state.data.filter((DATA)=>DATA.id!==action.payload.id)
              localStorage.setItem('data',  JSON.stringify([...newData]))
               return{
                ...state,
                data:newData
               }
               
            }

        }
    }
)
export const {incrementData,decrementData,toggale,remove}=cart.actions;

const store=configureStore({
    reducer:{
    counter:counter.reducer,
    cart:cart.reducer
    }
})

export default store


