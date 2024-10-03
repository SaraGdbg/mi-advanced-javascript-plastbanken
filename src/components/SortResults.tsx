import { DigiContextMenu } from '@digi/arbetsformedlingen-react';

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

  const handleChange = (e) => {
    console.log('handleChange');
  };

  return (
    <>
      <DigiContextMenu
        afTitle="Sortera efter"
        afMenuItems={menuItems}
        onAfChangeItem={(e) => {
          console.log('Valt alternativ', e.detail.item, e.detail.idx);
          handleChange(e);
        }}
      ></DigiContextMenu>
    </>
  );
};
