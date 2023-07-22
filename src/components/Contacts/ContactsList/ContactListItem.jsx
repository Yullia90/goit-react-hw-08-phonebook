import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selector';
import { deleteContact } from 'redux/operationsApi';

import {
  Item,
  Text,
  Btn,
  PersonOutline,
  CallOutline,
  IoTrashOut,
} from './ContactList.styled';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const IsLoading = useSelector(selectIsLoading);

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item key={id}>
      <Text>
        <PersonOutline size={22} />
        {name}: <CallOutline size={22} />
        {number}
      </Text>
      <Btn type="button" disabled={IsLoading} onClick={handleDelete}>
        <IoTrashOut size={20} />
      </Btn>
    </Item>
  );
};
