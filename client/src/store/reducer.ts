import { combineReducers } from 'redux';
import deployments, { DeploymentsState } from './deployments/reducer';
import templates, { TemplatesState } from './templates/reducer';

export type State = {
  deployments: DeploymentsState,
  templates: TemplatesState,
};

const reducer = combineReducers({
  deployments,
  templates,
});

export default reducer;
