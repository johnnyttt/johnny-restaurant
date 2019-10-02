import * as actionTypes from '../actions/actionTypes';
const initialStates ={
    wishList: []
};

const editWishList = (state = initialStates, action)=>{

    switch(action.type){
        case actionTypes.addToWish:
            const newWishListItem = {
                 id: action.collection_id,
                 inWishList:true
            }
            return{
                ...state,
                wishList:state.wishList.concat(newWishListItem)
            }
        case actionTypes.removeFromWish:
            return{
                ...state,
                wishList:state.wishList.filter(item => item.collection_id!==action.collection_id)
            }
    }
    return state;
    
}

export default editWishList;