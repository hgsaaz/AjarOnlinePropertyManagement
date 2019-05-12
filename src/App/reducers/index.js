import { combineReducers } from 'redux';
import firebase from './firebaseReducer'

export default combineReducers({
    firebaseUser: firebase
})