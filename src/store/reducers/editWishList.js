import * as actionTypes from '../actions/actionTypes';
const initialStates = {
  wishList: []
};

const editWishList = (state = initialStates, action) => {

  switch (action.type) {
    case actionTypes.addToWish:
      console.log('collection' + action.collection_id);
      const newWishListItem = {
        collection: {
          collection_id: action.collection_id,
          inWishList: true,
          description: 'test',
          image_url: 'image_url',
          res_count: 0,
          share_url: 'share_url',
          title: 'title',
          url: 'url'
        }
      }
      const newList = state.wishList.concat(newWishListItem);
      return {
        ...state,
        wishList: [...newList]
      }
    case actionTypes.removeFromWish:
      const remainingItems = state.wishList.filter(item => item.collection.collection_id !== action.collection_id);
      console.log(remainingItems);
      console.log(state.wishList)
      return {
        ...state,
        wishList: [...remainingItems]
      }
    case actionTypes.initWishList:
      console.log('init');

      console.log(action.wishList);
      return {
        ...state,
        wishList: action.wishList
      }
  }

  return state;

}

export default editWishList;