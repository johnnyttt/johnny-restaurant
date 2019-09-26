import React, { useState,useEffect } from "react";
import axios from 'axios';
import RestaurantCollectionItem from '../../components/RestCollectionItem/RestCollectionItem'



const RestaurantRating =(props)=> {
    const [collections, setCollections] = useState('');

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

                setCollections(response.data.collections)


            }
        })

    },[])




    return (
        <div>
            <h2>RestaurantRating</h2>
            {console.log(collections[0])}

            {/* {collections[0]} */}

            {/* {collections.map(collection =>(
                <RestaurantCollectionItem collection={collection} />
            ))} */}
        </div>
    )
}

export default RestaurantRating;


