import axios from 'axios';
import { Dispatch } from 'redux';

export type DeploymentDTO = {
  _id: string,
  url: string,
  templateName: string,
  version: string,
  deployedAt: Date,
};

export type CreateDeploymentDTO = Pick<DeploymentDTO, 'url' | 'templateName' | 'version'>;

export enum DeploymentsActionType {
  FETCHING_STARTED = '@DEPLOYMENTS__FETCHING_STARTED',
  FETCHING_SUCCEED = '@DEPLOYMENTS__FETCHING_SUCCEED',
  FETCHING_FAILED = '@DEPLOYMENTS__FETCHING_FAILED',
}

export type DeploymentsAction = {
  type: DeploymentsActionType;
  payload: DeploymentDTO[];
  errors: string[];
};

const fetchDeploymentsStarted = () => ({
  type: DeploymentsActionType.FETCHING_STARTED,
  payload: [],
  errors: [],
});

const fetchDeploymentsSucceed = (payload: DeploymentDTO[]) => ({
  type: DeploymentsActionType.FETCHING_SUCCEED,
  payload,
  errors: [],
});

const fetchDeploymentsFailed = (errors: string[]) => ({
  type: DeploymentsActionType.FETCHING_FAILED,
  payload: [],
  errors,
});

const fetchDeployments = () => (
  async (dispatch: Dispatch<DeploymentsAction>) => {
    dispatch(fetchDeploymentsStarted());
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/deployments`);
      dispatch(fetchDeploymentsSucceed(result.data));
    } catch (error) {
      dispatch(fetchDeploymentsFailed([error.message]));
    }
  }
);

const addDeployment = (deploymentData: CreateDeploymentDTO) => (
  async (dispatch: Dispatch<DeploymentsAction>) => {
    dispatch(fetchDeploymentsStarted());
    try {
      const result = await axios.post(`${process.env.REACT_APP_API_URL}/deployments`, deploymentData);
      dispatch(fetchDeploymentsSucceed(result.data));
    } catch (error) {
      dispatch(fetchDeploymentsFailed([error.message]));
    }
  }
);

const deleteDeployment = (id: string) => (
  async (dispatch: Dispatch<DeploymentsAction>) => {
    dispatch(fetchDeploymentsStarted());
    try {
      const result = await axios.delete(`${process.env.REACT_APP_API_URL}/deployments/${id}`);
      dispatch(fetchDeploymentsSucceed(result.data));
    } catch (error) {
      dispatch(fetchDeploymentsFailed([error.message]));
    }
  }
);

export default {
  fetchDeployments,
  addDeployment,
  deleteDeployment,
};
