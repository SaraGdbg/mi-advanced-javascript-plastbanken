import { DigiContextMenu } from '@digi/arbetsformedlingen-react';
import {
  ContextMenuEventItem,
  DigiContextMenuCustomEvent,
} from '@digi/arbetsformedlingen/dist/types/components';
import { FilterActionType } from '../reducers/FilterReducer';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext';
import { FilterDispatchContext } from '../contexts/FilterDispatchContext';
import { createQueryString } from '../utils/createQueryString';
import { PaginationContext } from '../contexts/PaginationContext.ts';

export const SortResults = () => {
  const { resetPagination } = useContext(PaginationContext);
  //TODO: logic to only be able to check one of the checkboxes at a time
  // TODO: dispatches for each choice

  interface IMenuItems {
    id: number;
    title: string;
  }

  const menuItems: IMenuItems[] = [
    {
      id: 0,
      title: 'Relevans',
    },
    {
      id: 1,
      title: 'Datum fallande',
    },
    {
      id: 2,
      title: 'Datum stigande',
    },
  ];

  const navigate = useNavigate();
  const filters = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);

  //Add type to event
  const handleChange = (
    e: DigiContextMenuCustomEvent<ContextMenuEventItem>,
  ) => {
    let selectedSorting: string = '';
    switch (e.detail.item.id) {
      case 0:
        selectedSorting = 'relevance';
        break;
      case 1:
        selectedSorting = 'pubdate-desc';
        break;
      case 2:
        selectedSorting = 'pubdate-asc';
        break;
    }

    dispatch({
      type: FilterActionType.SET_SORT_BY,
      payload: selectedSorting,
    });

    const updatedFilters = { ...filters, sortBy: selectedSorting, offset: 0 };
    const searchText = createQueryString(updatedFilters);
    console.log('updated filters:', updatedFilters);
    resetPagination();
    navigate(`/annonser/${searchText}`);
  };

  return (
    <>
      <DigiContextMenu
        afTitle="Sortera efter"
        afMenuItems={menuItems}
        onAfChangeItem={handleChange}
      ></DigiContextMenu>
    </>
  );
};
