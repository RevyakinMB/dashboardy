import React, { useCallback, useReducer } from 'react';

import DistributionCenterFilters from './filters';

interface DCFilters {
  search?: string;
  dcFilter?: number[];
  groupFilter?: number[];
}

const initialFilters: DCFilters = {
  search: undefined,
  dcFilter: undefined,
  groupFilter: undefined,
};

const DistributionCenters: React.FC = () => {
  const filtersReducer = useCallback((state, action) => {
    switch (action.type) {
      case 'search':
        return {
          ...state,
          search: action.payload ? action.payload : undefined,
        };
      case 'dc':
        return {
          ...state,
          dcFilter: action.payload.length ? action.payload : undefined,
        };
      case 'group':
        return {
          ...state,
          groupFilter: action.payload ? action.payload : undefined,
        };
      default:
        throw new Error('Unknown action.');
    }
  }, []);
  const [filters, onFiltersChange] = useReducer(filtersReducer, initialFilters);

  return (
    <div>
      <DistributionCenterFilters
        filters={filters}
        onFiltersChange={onFiltersChange}
      />
      <div>TODO1</div>
    </div>
  );
};

export default DistributionCenters;
