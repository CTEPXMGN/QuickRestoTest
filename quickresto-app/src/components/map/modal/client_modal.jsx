import './client_modal.css';
import { saveClientsData } from '../../../storage';
import { useState } from 'react';

const ClientModal = ({
  modalActive,
  setModalActive,
  modalData,
  clientsData,
  setClientsData,
  editNameValue,
  setEditNameValue,
  editAmountValue,
  setEditAmountValue,
}) => {
  const [isEditName, setIsEditName] = useState(false);
  const [isEditAmount, setIsEditAmount] = useState(false);
  // const [editNameValue, setEditNameValue] = useState(modalData.name);
  // const [editAmountValue, setEditAmountValue] = useState(modalData.amount);

  function removeClient(id) {
    const newModalData = clientsData.filter((item) => item.id != id);
    setClientsData(newModalData);
    saveClientsData(newModalData);
  }

  function editClientData(id) {
    console.log(id);
    const editedClientData = clientsData.map((item) => {
      if (item.id === id) {
        // (item.name = editNameValue), item.amount === editAmountValue;
        console.log(item);
      }
    });
    // console.log(editedClientData);
    // setClientsData(editedClientData);
    // saveClientsData(editedClientData);
  }

  function changeNameValue(event) {
    setEditNameValue(event.target.value);
  }

  function changeAmountValue(event) {
    setEditAmountValue(event.target.value);
  }

  const inputName = (
    <input
      className="modal__input-name"
      type="text"
      value={editNameValue}
      // defaultValue={modalData.name}
      autoFocus={true}
      onBlur={() => {
        setIsEditName(false), editClientData(modalData.id);
      }}
      onChange={(event) => {
        changeNameValue(event);
      }}
    />
  );
  const textName = (
    <span onDoubleClick={() => setIsEditName(true)}>{modalData.name}</span>
  );

  const inputAmount = (
    <input
      className="modal__input-amount"
      type="text"
      value={editAmountValue}
      // defaultValue={modalData.amount}
      autoFocus={true}
      onBlur={() => setIsEditAmount(false)}
      onChange={(event) => {
        changeAmountValue(event);
      }}
    />
  );

  const textAmount = (
    <span onDoubleClick={() => setIsEditAmount(true)}>{modalData.amount}</span>
  );

  return (
    <div
      className={modalActive ? 'modal active' : 'modal'}
      onClick={() => {
        setModalActive(false), setIsEditName(false), setIsEditAmount(false);
      }}
    >
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <h3>Клиент</h3>
        <p>Имя: {isEditName ? inputName : textName}</p>

        <p>Кол-во: {isEditAmount ? inputAmount : textAmount}</p>
        <button
          className="modal__button-remove"
          onClick={() => {
            removeClient(modalData.id), setModalActive(false);
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default ClientModal;
