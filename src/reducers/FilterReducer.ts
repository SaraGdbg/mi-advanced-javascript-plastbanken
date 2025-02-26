import { IFilterJobs } from '../models/IFilterJobs.ts';

const storedLimit = localStorage.getItem('adsPerPageLimit');
const DEFAULT_LIMIT = storedLimit ? Number(storedLimit) : 10;

export enum FilterActionType {
  SET_QUERY_FROM_INPUT = 'SET_QUERY_FROM_INPUT',
  TOGGLE_REMOTE = 'TOGGLE_REMOTE',
  TOGGLE_DRIVING_LICENSE = 'TOGGLE_DRIVING_LICENSE',
  SET_MUNICIPALITIES = 'SET_MUNICIPALITIES',
  SET_REGIONS = 'SET_REGIONS',
  SET_OCCUPATION_FIELDS = 'SET_OCCUPATION_FIELDS',
  SET_WORKING_HOURS_TYPE = 'SET_WORKING_HOURS_TYPE',
  SET_SORT_BY = 'SET_SORT_BY',
  SET_PUBLISHED = 'SET_PUBLISHED',
  SET_LIMIT = 'SET_LIMIT',
  SET_OFFSET = 'SET_OFFSET',
  RESEST_FILTER = 'RESET_FILTER',
}

interface ISetQueryFromInputAction {
  type: FilterActionType.SET_QUERY_FROM_INPUT;
  payload: string;
}

interface IToggleRemoteAction {
  type: FilterActionType.TOGGLE_REMOTE;
  payload: boolean;
}

interface IToggleDrivingLicenseAction {
  type: FilterActionType.TOGGLE_DRIVING_LICENSE;
  payload: boolean;
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

interface ISetPublishedAction {
  type: FilterActionType.SET_PUBLISHED;
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

interface IResetFilterAction {
  type: FilterActionType.RESEST_FILTER;
  payload: undefined;
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
  | ISetPublishedAction
  | ISetLimitAction
  | ISetOffsetAction
  | IResetFilterAction;

export const defaultFilterState: IFilterJobs = {
  queryFromInput: '',
  isRemote: false,
  requiresDrivingLicense: true,
  municipalitiesSelected: [],
  regionsSelected: [],
  occupationFieldSelected: [],
  workingHoursType: '',
  sortBy: '',
  pubDate: '',
  limit: DEFAULT_LIMIT,
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
      return { ...filter, sortBy: action.payload, offset: 0 };
    }
    case FilterActionType.SET_PUBLISHED: {
      return { ...filter, pubDate: action.payload };
    }
    case FilterActionType.SET_LIMIT: {
      localStorage.setItem('adsPerPageLimit', action.payload.toString());
      return { ...filter, limit: action.payload, offset: 0 };
    }
    case FilterActionType.SET_OFFSET: {
      return { ...filter, offset: action.payload };
    }
    case FilterActionType.RESEST_FILTER: {
      return {
        ...defaultFilterState,
        regionsSelected: [],
        municipalitiesSelected: [],
      };
    }

    default:
      return filter;
  }
};
