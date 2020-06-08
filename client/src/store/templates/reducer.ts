import { TemplateDTO, TemplatesAction, TemplatesActionType } from './actions';

export type TemplatesState = {
  isFetching: boolean;
  items: TemplateDTO[];
  errors: string[];
};

const initialState: TemplatesState = {
  isFetching: false,
  items: [],
  errors: [],
};

const templates = (state = initialState, action: TemplatesAction): TemplatesState => {
  switch (action.type) {
    case TemplatesActionType.FETCHING_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case TemplatesActionType.FETCHING_SUCCEED:
      return {
        isFetching: false,
        items: action.payload,
        errors: action.errors,
      };
    case TemplatesActionType.FETCHING_FAILED:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default templates;
