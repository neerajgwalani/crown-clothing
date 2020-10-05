import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component'
import {Route} from 'react-router-dom';
import {selectCollection}from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import './collection.styles.scss';
const CollectionPage=({collection})=>{
const{title,items}=collection;
return( 

     <div className='collection-page'>
         <div className='title'>{title}</div>
         <div className='items'>
             {items.map(item=>(
                 <CollectionItem key={item.id} item={item}/>
             ))}
         </div>
     </div>
 );
};
export const mapStateToProps=(state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
 export default connect(mapStateToProps)(CollectionPage);