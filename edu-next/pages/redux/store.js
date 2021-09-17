import { createStore } from 'redux';
import { rootReducer } from './reducers/rootreducer';

const myStore = createStore(rootReducer );
myStore.subscribe(() => {
    console.log("updated store : ", myStore.getState());
});
export default myStore;