import React, { useCallback, useMemo, useState } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

import QuickSearch from './QuickSearch';
import styles from './index.module.scss';

interface Props {
  filters: {
    search?: string;
    dcFilter?: number[];
    groupFilter?: number[];
  };
  onFiltersChange: (arg: {
    type: 'search' | 'dc' | 'group';
    payload: string | number[];
  }) => void;
}

const DistributionCenterFilters: React.FC<Props> = ({
  filters,
  onFiltersChange,
}) => {
  const dcOptions = [
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
  ];

  const groupOptions = [
    { key: 'g1', value: 'g1', text: 'Group #1' },
    { key: 'g2', value: 'g2', text: 'Group #2' },
    { key: 'g3', value: 'g3', text: 'Group #3' },
  ];

  const dcFilter = useMemo(() => filters.dcFilter || [], [filters.dcFilter]);
  const groupFilter = useMemo(() => filters.groupFilter || [], [filters.groupFilter]);

  const onChange = useCallback(
    (event, { name, value }) => onFiltersChange({
      type: name,
      payload: value,
    }),
    [onFiltersChange],
  );

  const onInputChange = useCallback(
    (value) => onFiltersChange({
      type: 'search',
      payload: value,
    }),
    [onFiltersChange],
  );

  const [isShown, setIsShown] = useState(true);
  const onShowHideClick = useCallback(
    () => setIsShown(!isShown),
    [setIsShown, isShown],
  );

  const duplicateInput = useCallback(
    (value) => {
      const newValue = value
        ? value.split('').map((v: string) => `${v}${v}`).join('')
        : value;
      onFiltersChange({
        type: 'search',
        payload: newValue,
      });
    },
    [onFiltersChange],
  );
  const [doDuplication, setDoDuplication] = useState(false);
  const onSearchHanderUpdateClick = useCallback(
    () => setDoDuplication(!doDuplication),
    [setDoDuplication, doDuplication],
  );

  return (
    <div className={styles.filters}>
      Search text:
      { filters.search }

      <Dropdown
        className={styles.dropdownFilter}
        multiple
        name="dc"
        onChange={onChange}
        options={dcOptions}
        placeholder="DC..."
        value={dcFilter}
      />

      <Dropdown
        className={styles.dropdownFilter}
        multiple
        name="group"
        onChange={onChange}
        options={groupOptions}
        placeholder="Group..."
        value={groupFilter}
      />

      <div className={styles.spacer} />

      { isShown && (
        <QuickSearch
          name="search"
          onInputChange={doDuplication ? duplicateInput : onInputChange}
          placeholder="Type to filter..."
          value={filters.search || ''}
        />
      )}

      <Button
        onClick={onShowHideClick}
      >
        { isShown ? 'Hide' : 'Show' }
      </Button>

      <Button
        onClick={onSearchHanderUpdateClick}
      >
        { doDuplication ? 'Don\'t do duplication.' : 'Do duplicate!' }
      </Button>
    </div>
  );
};

export default DistributionCenterFilters;
