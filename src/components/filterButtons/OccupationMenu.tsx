import { DigiFormCheckbox } from '@digi/arbetsformedlingen-react';
import { FormCheckboxVariation } from '@digi/arbetsformedlingen';
import { useContext, useState } from 'react';
import { RegionsOccupationsContext } from '../../contexts/RegionsOccupationsContext.ts';
import { FilterDispatchContext } from '../../contexts/FilterDispatchContext.ts';
import { FilterActionType } from '../../reducers/FilterReducer.ts';
import { FilterContext } from '../../contexts/FilterContext.ts';

export const OccupationMenu = () => {
  const filters = useContext(FilterContext);
  const [checkedItems, setCheckedItems] = useState<string[]>(
    filters.occupationFieldSelected || [],
  );
  const [hoveredItem, setHoveredItem] = useState('');
  const { occupations } = useContext(RegionsOccupationsContext);
  const dispatch = useContext(FilterDispatchContext);

  const handleHover = (definition: string) => {
    setHoveredItem(definition);
  };

  const handleChange = (id: string, isChecked: boolean) => {
    setCheckedItems((prev) =>
      isChecked ? [...prev, id] : prev.filter((item) => item !== id),
    );

    const updatedCheckedItems = isChecked
      ? [...checkedItems, id]
      : checkedItems.filter((item) => item !== id);

    dispatch({
      type: FilterActionType.SET_OCCUPATION_FIELDS,
      payload: updatedCheckedItems,
    });
  };

  return (
    <div className="filterMenuContainer">
      <div className="leftMenuContainerOccupations filterMenuColumn">
        {occupations.map((occupation) => (
          <DigiFormCheckbox
            key={occupation['taxonomy/id']}
            afLabel={occupation['taxonomy/preferred-label']}
            afVariation={FormCheckboxVariation.SECONDARY}
            afChecked={checkedItems.includes(occupation['taxonomy/id'])}
            onMouseEnter={() => handleHover(occupation['taxonomy/definition'])}
            onMouseLeave={() => setHoveredItem('')}
            onAfOnChange={(e) => {
              const isChecked = (e.target as HTMLDigiFormCheckboxElement)
                .checked;
              handleChange(occupation['taxonomy/id'], isChecked);
            }}
          />
        ))}
      </div>
      <div className="rightMenuContainerOccupations filterMenuColumn">
        {hoveredItem}
      </div>
    </div>
  );
};
