
export const initialState = null

export const reducer = ( state , action ) =>{
     
    if(action.type==="CLEAR")
    return null;
    if( action.type === "USER") {
        return action.payload ;
    }
    if( action.type === "GRAPH") {
        return { 
            ...state,
            graph : action.payload.graph
        
        } ;
    }
   
    return state ;
}