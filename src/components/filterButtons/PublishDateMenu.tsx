import { FormRadiobuttonVariation } from '@digi/arbetsformedlingen';
import {
  DigiFormRadiobutton,
  DigiFormRadiogroup,
} from '@digi/arbetsformedlingen-react';
import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext.ts';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext.ts';
import { FilterActionType } from '../../reducers/FilterReducer.ts';

export const PublishDateMenu = () => {
  const filters = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);
  const publishDateText = [
    'Alla',
    'Idag',
    'Senaste 7 dagarna',
    'Senaste 30 dagarna',
  ];

  const getTodayDateTime = () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0);
    return currentDate.toLocaleString();
  };

  const calculatePublishDate = (daysAgo: number) => {
    if (daysAgo === 0) {
      return getTodayDateTime();
    } else {
      const currentTime = new Date();
      const pastTime = new Date(
        currentTime.getTime() - daysAgo * 24 * 60 * 60 * 1000,
      );
      pastTime.setHours(0, 0, 0);
      return pastTime.toLocaleString();
    }
  };

  const publishDateCode = [
    '',
    calculatePublishDate(0),
    calculatePublishDate(7),
    calculatePublishDate(30),
  ];

  const checkRadioButton = (id: string) => {
    if (filters.pubDate === id) {
      return true;
    }
    return false;
  };

  const setPublishDate = (selectedItem: string) => {
    dispatch({
      type: FilterActionType.SET_PUBLISHED,
      payload: selectedItem,
    });
  };

  return (
    <div className="filterMenuContainer">
      <div className="leftMenuContainer filterMenuColumn">
        <DigiFormRadiogroup afName="publishDate">
          {publishDateCode.map((type, index: number) => (
            <div key={index}>
              <DigiFormRadiobutton
                afLabel={publishDateText[index]}
                afVariation={FormRadiobuttonVariation.PRIMARY}
                onAfOnChange={() => {
                  setPublishDate(type.toString());
                }}
                afId={index.toString()}
                afChecked={checkRadioButton(type.toString())}
              ></DigiFormRadiobutton>
            </div>
          ))}
        </DigiFormRadiogroup>
      </div>
    </div>
  );
};
