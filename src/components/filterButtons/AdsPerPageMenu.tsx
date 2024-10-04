import { ContextMenuEventItem } from '@digi/arbetsformedlingen';
import { DigiContextMenu } from '@digi/arbetsformedlingen-react';
import { DigiContextMenuCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext.ts';
import { useNavigate } from 'react-router-dom';
import { createQueryString } from '../../utils/createQueryString.ts';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext.ts';
import { FilterActionType } from '../../reducers/FilterReducer.ts';

interface IMenuItems {
  id: number;
  title: string;
}

export const AdsPerPageMenu = () => {
  const navigate = useNavigate();
  const filters = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);

  const menuItems: IMenuItems[] = [
    {
      id: 0,
      title: '10 resultat per sida',
    },
    {
      id: 1,
      title: '25 resultat per sida',
    },
    {
      id: 2,
      title: '50 resultat per sida',
    },
    {
      id: 3,
      title: '100 resultat per sida',
    },
  ];

  const idToValue = ['10', '25', '50', '100'];
  const initialSelectedItem = idToValue.indexOf(filters.limit.toString());

  const handleSelection = (
    e: DigiContextMenuCustomEvent<ContextMenuEventItem>,
  ) => {
    const selectedItem = e.detail.item.id as number;
    const selectedValue = Number(idToValue[selectedItem]);

    dispatch({
      type: FilterActionType.SET_LIMIT,
      payload: selectedValue,
    });

    localStorage.setItem('adsPerPageLimit', selectedValue.toString());

    const updatedFilters = { ...filters, limit: selectedValue, offset: 0 };
    const searchText = createQueryString(updatedFilters);

    navigate(`/annonser/${searchText}`);
  };

  return (
    <>
      <DigiContextMenu
        afTitle="Välj antal resultat per sida"
        afMenuPosition="right-bottom"
        afMenuItems={menuItems}
        afActiveItem={initialSelectedItem.toString()}
        onAfChangeItem={handleSelection}
      ></DigiContextMenu>
    </>
  );
};
