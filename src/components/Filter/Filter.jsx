import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/features/filterContactsSlice';

import { Label, Input } from './Filter.styled';
import { useTranslation } from 'react-i18next';

const Filter = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleInput = e => {
    const normalizeFilter = e.target.value.toLowerCase();

    dispatch(setFilter(normalizeFilter));
  };
  return (
    <Label>
      {t('Find contacts by name')}

      <Input type="text" onInput={handleInput} />
    </Label>
  );
};

export default Filter;
