import { DigiContextMenu } from '@digi/arbetsformedlingen-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from '../../contexts/FilterContext';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext';
import { createQueryString } from '../../utils/createQueryString.ts';
import { ContextMenuEventItem, DigiContextMenuCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { FilterActionType } from '../../reducers/FilterReducer';

export const FilterButtonEmploymentType = () => {

  const navigate = useNavigate();
  const filters = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);

  interface IMenuItems {
    id: number;
    title: string;
  }

  const menuItems: IMenuItems[] = [
    {
      id: 0,
      title: 'Alla',
    },
    {
      id: 1,
      title: 'Heltid',
    },
    {
      id: 2,
      title: 'Deltid',
    }
  ];

  const handleSelection = (e: DigiContextMenuCustomEvent<ContextMenuEventItem>) => {
    const selectedItem = e.detail.item.id as number;

    dispatch({
      type: FilterActionType.SET_WORKING_HOURS_TYPE,
      payload: selectedItem,
    });

    const updatedFilters = { ...filters, workingHoursType: selectedItem };
    const searchText = createQueryString(updatedFilters);

    navigate(`/annonser/${searchText}`);
  };

  return (
    <>
          <DigiContextMenu
        afTitle="Anställningsform"
        afMenuPosition="right-bottom"
        afMenuItems={menuItems}
        afActiveItem={0}
        onAfChangeItem={handleSelection}
      ></DigiContextMenu>  
    </>
  );
};