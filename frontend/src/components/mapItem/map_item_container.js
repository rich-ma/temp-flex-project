import {
  connect
} from 'react-redux';
import MapItem from './map_item';
import {
  fetchLocations
} from '../../actions/location_actions';

const mSTP = (state, ownProps) => ({
    locations: Object.values(state.entities.locations),
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
  fetchLocations: () => dispatch(fetchLocations()),
})



export default connect(mSTP, mDTP)(MapItem);