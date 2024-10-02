import { IFilterJobs } from '../models/IFilterJobs.ts';

export enum FilterActionType {
  SET_QUERY_FROM_INPUT = 'SET_QUERY_FROM_INPUT',
  TOGGLE_REMOTE = 'TOGGLE_REMOTE',
  TOGGLE_DRIVING_LICENSE = 'TOGGLE_DRIVING_LICENSE',
  SET_MUNICIPALITIES = 'SET_MUNICIPALITIES',
  SET_REGIONS = 'SET_REGIONS',
  SET_OCCUPATION_FIELDS = 'SET_OCCUPATION_FIELDS',
  SET_WORKING_HOURS_TYPE = 'SET_WORKING_HOURS_TYPE',
  SET_SORT_BY = 'SET_SORT_BY',
  SET_LIMIT = 'SET_LIMIT',
  SET_OFFSET = 'SET_OFFSET',
}

interface ISetQueryFromInputAction {
  type: FilterActionType.SET_QUERY_FROM_INPUT;
  payload: string;
}

interface IToggleRemoteAction {
  type: FilterActionType.TOGGLE_REMOTE;
  payload: undefined;
}

interface IToggleDrivingLicenseAction {
  type: FilterActionType.TOGGLE_DRIVING_LICENSE;
  payload: undefined;
}

interface ISetMunicipalitiesAction {
  type: FilterActionType.SET_MUNICIPALITIES;
  payload: string[];
}

interface ISetRegionsAction {
  type: FilterActionType.SET_REGIONS;
  payload: string[];
}

interface ISetOccupationFieldsAction {
  type: FilterActionType.SET_OCCUPATION_FIELDS;
  payload: string[];
}

interface ISetWorkingHoursTypeAction {
  type: FilterActionType.SET_WORKING_HOURS_TYPE;
  payload: string;
}

interface ISetSortByAction {
  type: FilterActionType.SET_SORT_BY;
  payload: string;
}

interface ISetLimitAction {
  type: FilterActionType.SET_LIMIT;
  payload: number;
}

interface ISetOffsetAction {
  type: FilterActionType.SET_OFFSET;
  payload: number;
}

export type FilterAction =
  | ISetQueryFromInputAction
  | IToggleRemoteAction
  | IToggleDrivingLicenseAction
  | ISetMunicipalitiesAction
  | ISetRegionsAction
  | ISetOccupationFieldsAction
  | ISetWorkingHoursTypeAction
  | ISetSortByAction
  | ISetLimitAction
  | ISetOffsetAction;

export const defaultFilterState: IFilterJobs = {
  queryFromInput: '',
  isRemote: false,
  requiresDrivingLicense: false,
  municipalitiesSelected: [],
  regionsSelected: [],
  occupationFieldSelected: [],
  workingHoursType: '',
  sortBy: '',
  limit: 10,
  offset: 0,
};

export const FilterReducer = (
  filter: IFilterJobs,
  action: FilterAction,
): IFilterJobs => {
  switch (action.type) {
    case FilterActionType.SET_QUERY_FROM_INPUT: {
      return { ...filter, queryFromInput: action.payload };
    }
    case FilterActionType.TOGGLE_REMOTE: {
      return { ...filter, isRemote: !filter.isRemote };
    }
    case FilterActionType.TOGGLE_DRIVING_LICENSE: {
      return {
        ...filter,
        requiresDrivingLicense: !filter.requiresDrivingLicense,
      };
    }
    case FilterActionType.SET_MUNICIPALITIES: {
      return { ...filter, municipalitiesSelected: action.payload };
    }
    case FilterActionType.SET_REGIONS: {
      return { ...filter, regionsSelected: action.payload };
    }
    case FilterActionType.SET_OCCUPATION_FIELDS: {
      return { ...filter, occupationFieldSelected: action.payload };
    }
    case FilterActionType.SET_WORKING_HOURS_TYPE: {
      return { ...filter, workingHoursType: action.payload };
    }
    case FilterActionType.SET_SORT_BY: {
      return { ...filter, sortBy: action.payload };
    }
    case FilterActionType.SET_LIMIT: {
      return { ...filter, limit: action.payload };
    }
    case FilterActionType.SET_OFFSET: {
      return { ...filter, offset: action.payload };
    }

    default:
      return filter;
  }
};
