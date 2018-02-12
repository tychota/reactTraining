import { applyMiddleware } from 'redux';
import { navMiddleware } from './Nav';

export default applyMiddleware(navMiddleware);
