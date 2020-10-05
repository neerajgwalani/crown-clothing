import React  from 'react';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import './collection-overview.styles.scss';
const CollectionsOverview=({collections})=>(
    <div className="collection-overview">
    {
        collections.map(({id,...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
        }
    </div>
);
const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);