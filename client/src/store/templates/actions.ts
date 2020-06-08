import axios from 'axios';
import { Dispatch } from 'redux';

export type TemplateDTO = {
  _id: string,
  name: string,
  versions: string[],
};

export enum TemplatesActionType {
  FETCHING_STARTED = '@TEMPLATES__FETCHING_STARTED',
  FETCHING_SUCCEED = '@TEMPLATES__FETCHING_SUCCEED',
  FETCHING_FAILED = '@TEMPLATES__FETCHING_FAILED',
}

export type TemplatesAction = {
  type: TemplatesActionType;
  payload: TemplateDTO[];
  errors: string[];
};

const fetchTemplatesStarted = () => ({
  type: TemplatesActionType.FETCHING_STARTED,
  payload: [],
  errors: [],
});

const fetchTemplatesSucceed = (payload: TemplateDTO[]) => ({
  type: TemplatesActionType.FETCHING_SUCCEED,
  payload,
  errors: [],
});

const fetchTemplatesFailed = (errors: string[]) => ({
  type: TemplatesActionType.FETCHING_FAILED,
  payload: [],
  errors,
});

const fetchTemplates = () => (
  async (dispatch: Dispatch<TemplatesAction>) => {
    dispatch(fetchTemplatesStarted());
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/templates`);
      dispatch(fetchTemplatesSucceed(result.data));
    } catch (error) {
      dispatch(fetchTemplatesFailed(error.message));
    }
  }
);

export default {
  fetchTemplates,
};
