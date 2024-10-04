import { DigiContextMenu } from '@digi/arbetsformedlingen-react';
import {
  ContextMenuEventItem,
  DigiContextMenuCustomEvent,
} from '@digi/arbetsformedlingen/dist/types/components';

export const SortResults = () => {
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
  //Add type to event
  const handleChange = (
    e: DigiContextMenuCustomEvent<ContextMenuEventItem>,
  ) => {
    if (e.detail.idx === 2) {
      console.log('det funkar');
      console.log(e.detail.item.id);
    }
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
    console.log(selectedSorting);
  };

  // vill skicka in en string: relevance, pubdate-desc, pubdate-asc som payload
  // vill göra en dispatch med valt värde
  // skapa en funktion som sätter en varibel typ selectedsorting
  // skicka med den variabeln i dispatchen  till filterreducern: FilterActionType.SET_SORT_BY;
  // får tillbaka filtrerat resultat
  // visa på sidan via navigate

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
