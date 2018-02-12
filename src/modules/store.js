import { createStore } from 'redux';
import reducers from 'reactTraining/src/modules/reducers';
import enhancer from 'reactTraining/src/modules/enhancer';

export default () => createStore(reducers, enhancer);
