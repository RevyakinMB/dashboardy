import React from 'react';
import { Input, InputProps } from 'semantic-ui-react';
// import { debounce } from 'lodash';

const QuickSearch: React.VFC<InputProps> = (props) => {
  // TODO: propagate styles from the outside
  // TODO: use debounce
  const {
    name = 'search',
    icon = 'search',
    ...restProps
  } = props;
  return (
    <Input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
      icon={icon}
      name={name}
    />
  );
};

export default QuickSearch;
