import { createStore } from 'redux';
import reducers from 'reactTraining/src/modules/reducers';

export default () => createStore(reducers);
