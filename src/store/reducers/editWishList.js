import * as actionTypes from '../actions/actionTypes';
const initialStates ={
    inWishList:false
};

const editWishList = (state = initialStates, action)=>{

    switch(action.type){
        case actionTypes.addToWish:
            return{
                ...state,
                inWishList:true
            }
        case actionTypes.removeFromWish:
            return{
                ...state,
                inWishList:false
            }
    }
    return state;
    
}

export default editWishList;