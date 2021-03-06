import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Input, InputProps } from 'semantic-ui-react';
import { debounce, DebouncedFunc } from 'lodash';

interface QuickSearchProps extends InputProps {
  onInputChange: (value: string) => void;
}

const QuickSearch: React.VFC<QuickSearchProps> = (props) => {
  // TODO: propagate styles from the outside
  const {
    name = 'search',
    icon = 'search',
    value,
    onInputChange,
    ...restProps
  } = props;

  const [inputValue, setInputValue] = useState(value);

  const debouncedHandler = useRef<DebouncedFunc<(v: string) => void>>();
  useEffect(() => {
    debouncedHandler.current = debounce(onInputChange, 1000);

    return () => {
      if (debouncedHandler.current) {
        debouncedHandler.current.cancel();
      }
    };
  }, [onInputChange]);

  const onChange = useCallback(
    (event, { value: newInputValue }) => {
      setInputValue(newInputValue);
      if (debouncedHandler.current) {
        debouncedHandler.current(newInputValue);
      }
    },
    [setInputValue],
  );

  return (
    <Input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
      value={inputValue}
      onChange={onChange}
      icon={icon}
      name={name}
    />
  );
};

export default QuickSearch;
