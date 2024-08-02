import css from "./SearchBox.module.css";
import { selectFilter, changeFilter } from "../../redux/filter/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const name = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.searchWrapper}>
      <label htmlFor="searchInpId" className={css.searchLabel}>
        Find contacts by name
      </label>
      <input
        className={css.searchInp}
        type="text"
        value={name}
        onChange={handleChange}
        id="searchInpId"
      />
    </div>
  );
};

export default SearchBox;
