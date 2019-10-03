import * as actionTypes from '../actions/actionTypes';
const initialStates = {
  collectionList:[],
  wishList: []
};

const editWishList = (state = initialStates, action) => {

  switch (action.type) {
    case actionTypes.addToWish:
      console.log('add collection ' + action.collection_id);
      const newWishListItem = {
        collection: {
          collection_id: action.collection_id,
          inWishList: true
        }
      }
      const newList = state.wishList.concat(newWishListItem);
      return {
        ...state,
        wishList: [...newList]
      }
    case actionTypes.removeFromWish:
      const remainingItems = state.wishList.filter(item => item.collection.collection_id !== action.collection_id);
      console.log('wish list remaining' + remainingItems);
      return {
        ...state,
        wishList: [...remainingItems]
      }
    case actionTypes.initCollectionList:
      console.log('init new collection');

      console.log(action.collectionList);
      return {
        ...state,
        collectionList: action.collectionList
      }
  }

  return state;

}

export default editWishList;