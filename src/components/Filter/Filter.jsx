import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filtered } from 'Redux/Filter/slice';

import { FilterContainer, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  
  const dispatch = useDispatch();

  const handelFilterChange = e => {
    dispatch(filtered(e.target.value));
  };

  return (
    <FilterContainer>
      <span>Find contacts by name</span>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handelFilterChange}
      />
    </FilterContainer>
  );
};

export default Filter;

Filter.propTypes = {
  handelFilterChange: PropTypes.func,
  filter: PropTypes.string,
};
