import * as actionTypes from '../actions/actionTypes';

const initialWishList = {
    wishList:[]
}

const displayWishList = (state = initialWishList, action) =>{
    switch(action.type){
        case actionTypes.displayWishList:
            return{
                ...state,
                wishList: state.wishList
            }
    }
    return state;

}

export default displayWishList;