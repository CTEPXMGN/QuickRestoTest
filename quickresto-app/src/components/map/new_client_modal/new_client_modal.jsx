import './new_client_modal.css';
import { useState } from 'react';
import { saveClientsData } from '../../../storage';
import { id } from '../map_of_city/map_of_city';

const NewClientModal = ({
  newModalActive,
  setNewModalActive,
  newClientCoords,
  clientsData,
  setClientsData,
}) => {
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');

  function addClient() {
    if (inputName && inputAmount > 0) {
      const newClient = {
        ...{ name: inputName, amount: inputAmount, id: id() },
        ...newClientCoords,
      };
      const newClientsData = [...clientsData, newClient];
      setClientsData(newClientsData);
      saveClientsData(newClientsData);
    } else {
      alert('Заполните все поля');
    }
  }

  function changeNameValue(event) {
    setInputName(event.target.value);
  }

  function changeAmountValue(event) {
    setInputAmount(event.target.value);
  }

  return (
    <div
      className={newModalActive ? 'modal-new active' : 'modal-new'}
      onClick={() => setNewModalActive(false)}
    >
      <div
        className="modal-new__content"
        onClick={(event) => event.stopPropagation()}
      >
        <h3>Новый клиент</h3>
        <p>
          Имя:
          <input
            type={'text'}
            value={inputName}
            onChange={(event) => {
              changeNameValue(event);
            }}
          />
        </p>
        <p>
          Кол-во:
          <input
            type={'text'}
            value={inputAmount}
            onChange={(event) => {
              changeAmountValue(event);
            }}
          />
        </p>
        <button
          className="modal-new__button-add"
          onClick={() => {
            addClient(),
              setInputName(''),
              setInputAmount(''),
              setNewModalActive(false);
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default NewClientModal;
