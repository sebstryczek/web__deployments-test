import { DeploymentDTO, DeploymentsAction, DeploymentsActionType } from './actions';

export type DeploymentsState = {
  isFetching: boolean;
  items: DeploymentDTO[];
  errors: string[];
};

const initialState: DeploymentsState = {
  isFetching: false,
  items: [],
  errors: [],
};

const deployments = (state = initialState, action: DeploymentsAction): DeploymentsState => {
  switch (action.type) {
    case DeploymentsActionType.FETCHING_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case DeploymentsActionType.FETCHING_SUCCEED:
      return {
        isFetching: false,
        items: action.payload,
        errors: action.errors,
      };
    case DeploymentsActionType.FETCHING_FAILED:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default deployments;
