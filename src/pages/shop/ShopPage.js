import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/ShopAction';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/FirebaseUtility';

import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';

import WithSpinner from '../../components/with-spinner/WithSpinner';

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

export class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    console.log('called');
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
