import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { useContext } from 'react';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext.ts';
import { FilterActionType } from '../../reducers/FilterReducer.ts';

export const ResetFilter = () => {
  const dispatch = useContext(FilterDispatchContext);

  const handleClick = () => {
    dispatch({
      type: FilterActionType.RESEST_FILTER,
      payload: undefined,
    });
  };

  return (
    <>
      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.SECONDARY}
        afFullWidth={false}
        onClick={handleClick}
      >
        Rensa filter
      </DigiButton>
    </>
  );
};
