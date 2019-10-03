import React, { useState,useEffect } from "react";
import axios from 'axios';
import RestaurantCollectionItem from '../../components/RestCollectionItem/RestCollectionItem'
import styled from 'styled-components';

import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes'


const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

const RestaurantRating =(props)=> {
    // const [wishList, setWishList] = useState([]);
const pr = props;
    useEffect(() =>{
        let url = 'https://developers.zomato.com/api/v2.1/collections?city_id=259';
        let options = {
                    method: 'GET',
                    url: url,
                    headers: {
                        'Accept': 'application/json',
                        'user-key':'9a5df95a2b983bc3c79763d77008e60e',
                        'Content-Type': 'application/json'
                    }
                };
        axios(options)
        .then(response =>{
            let responseOK = response && response.status === 200;  
            if (responseOK) {
                //Code 1: Conver response data into HTML & save HTML into state collections
                // const collectionList = response.data.collections.map(item => {
                //     return(
                //         <ul style={{maxWidth:"40%",float:"left"}} key={item.collection.collection_id} >
                //             <li>ID:{item.collection.collection_id}</li>
                //             <li>collection Title:{item.collection.title}</li>
                //             <li>Restaurant Count:{item.collection.res_count}</li>
                //             <li>Description:{item.collection.description}</li>
                //             <li><img src={item.collection.image_url}  style={{maxWidth:"90%"}}  /></li>
                //         </ul>
                //     )
                // })
                // setCollections(collectionList);

                //Code 2: Conver response data into HTML & save HTML into state collections
                // setCollections([{collection: {collection_id: 1, res_count: 30}},{collection: {collection_id: 2, res_count: 40}}])

              // setWishList(response.data.collections)

              pr.initWishList(response.data.collections);
            }
        })
        .catch(error =>{console.log(error)})

    },[])
    
    return (
        <div>
            <h2>RestaurantRating</h2>
            {/* {collections[0]} */}
            <FlexContainer >
          {pr.wishList && pr.wishList.map(item =>(
                    <RestaurantCollectionItem 
                        onAddToWish={()=>props.onAddToWish(item.collection.collection_id)} 
                        onRemoveFromWish={()=>props.onRemoveFromWish(item.collection.collection_id)}
                        key={item.collection.collection_id} 
                        inWishList={()=>{
                            if(props.wishList[item.collection.collection_id] === undefined){
                                return false;
                            }else{
                                return props.wishList[item.collection.collection_id].inWishList
                            }
                        }}
                        collection={item.collection}
                    />
                ))}
            </FlexContainer>
        </div>
    )
}


const mapStatesToProps = state =>{
    return {
        wishList : state.edit.wishList,
        display : state.display.wishList
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAddToWish: (id)=>dispatch({type: actionTypes.addToWish, collection_id:id}),
        onRemoveFromWish: (id) =>dispatch({type:actionTypes.removeFromWish, collection_id:id}),
        onDisplayWishList: () =>dispatch({type: actionTypes.displayWishList}),
        initWishList: (wishList) => dispatch({ type: actionTypes.initWishList, wishList: wishList })
    }

}

export default connect(mapStatesToProps, mapDispatchToProps)(RestaurantRating);


