import React, { useCallback, useMemo } from 'react';
import { Dropdown } from 'semantic-ui-react';

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

  return (
    <div className={styles.filters}>
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

      <QuickSearch
        name="search"
        onInputChange={onInputChange}
        placeholder="Type to filter..."
        value={filters.search || ''}
      />
    </div>
  );
};

export default DistributionCenterFilters;
