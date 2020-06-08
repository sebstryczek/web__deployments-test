import { TypedUseSelectorHook, useSelector as _useSelector } from 'react-redux';
import { State } from './reducer';

const useSelector: TypedUseSelectorHook<State> = _useSelector;

export default useSelector;
