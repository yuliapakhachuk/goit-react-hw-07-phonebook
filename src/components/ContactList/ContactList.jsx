import { ListElement } from '../ListElement/ListElement';
import useItemsSlice from 'redux/itemsSlice/itemsHook';
import { StyledList } from './StyledContactList';

export const ContactList = () => {
  const { filteredItems, error, isLoading } = useItemsSlice();

  return (
    <>
      {error && (
        <p>
          Oops! Something went wrong! Refresh page and try again, please.
        </p>
      )}
      {isLoading ? (
        <b>Loading...</b>
      ) : (
        <StyledList>
          {filteredItems.map(contact => (
            <ListElement key={contact.id} contact={contact} />
          ))}
        </StyledList>
      )}
    </>
  );
};
