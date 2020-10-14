import React from 'react';
import {Route} from 'react-router';
import {connect} from 'react-redux';

import collectionsOverviewContainer from '../../components/collections-overview/collections-overview.component';
import CollectionsPageContainer from '../../pages/collection/collection.component.container';


import {fetchCollectionsStart} from '../../redux/shop/shop.actions';


class ShopPage extends React.Component{
    unsubscribeFromSnapshot = null;
    componentDidMount(){
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    }
    render(){
        const {match} = this.props;
              return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} 
                component={collectionsOverviewContainer}
                />
                <Route path={`${match.path}/:collectionId`} 
                component ={CollectionsPageContainer}
                />
              
            </div>
        );
    }
}
    
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart : ()=> dispatch(fetchCollectionsStart())
});



export default connect(null,mapDispatchToProps)(ShopPage);