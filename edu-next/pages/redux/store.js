import { createStore } from 'redux';
import { rootReducer } from './reducers/rootreducer';

const myStore = createStore(rootReducer);

export default myStore;