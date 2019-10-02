import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes'


const CollectionBox = styled.ul`
    max-width:28%;
`;
const mapStatesToProps = state =>{
    return {
        inWishList : state.edit.inWishList,
        display : state.display.wishList
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAddToWish: ()=>dispatch({type: actionTypes.addToWish}),
        onRemoveFromWish: () =>dispatch({type:actionTypes.removeFromWish}),
        onDisplayWishList: () =>dispatch({type: actionTypes.displayWishList})
    }

}

const RestCollectionItem = (props) => {
    const {
        collection_id, 
        title,
        description,
        // image_url,
        // share_url,
        // url,
        res_count
    } = props.collection;
    
    return (
            <CollectionBox key={collection_id} >
                <li>ID:{collection_id}</li>
                <li>collection Title:{title}</li>
                <li>Restaurant Count:{res_count}</li>
                <li>Description:{description}</li>
                {props.inWishList ? <button onClick={()=>props.onRemoveFromWish}>Remove Wishlist</button> : <button onClick={()=>props.onAddToWish}>Add Wishlist</button> }
                {/* <li><img src={image_url}  style={{maxWidth:"90%"}}  /></li> */}
            </CollectionBox>
    )
}




export default connect(mapStatesToProps, mapDispatchToProps)(RestCollectionItem);