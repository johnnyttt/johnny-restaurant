import React from 'react';

const RestCollectionItem = (props) => {
    const {
        collection_id, 
        title,
        description,
        image_url,
        share_url,
        url,
        res_count
    } = props.collection;
    return (
        <div>
            <ul style={{maxWidth:"40%",float:"left"}} key={collection_id} >
                <li>ID:{collection_id}</li>
                <li>collection Title:{title}</li>
                <li>Restaurant Count:{res_count}</li>
                <li>Description:{description}</li>
                <li><img src={image_url}  style={{maxWidth:"90%"}}  /></li>
            </ul>
        </div>
    )
}

export default RestCollectionItem;