import './client_modal.css';
import { saveClientsData } from '../../../storage';
import { useState } from 'react';

const ClientModal = ({
  modalActive,
  setModalActive,
  modalData,
  clientsData,
  setClientsData,
}) => {
  const [isEditName, setIsEditName] = useState(false);
  const [isEditAmount, setIsEditAmount] = useState(false);
  const [editNameValue, setEditNameValue] = useState(modalData.name);
  const [editAmountValue, setEditAmountValue] = useState(modalData.amount);

  function removeClient(name) {
    const newModalData = clientsData.filter((item) => item.name != name);
    setClientsData(newModalData);
    saveClientsData(newModalData);
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
      onBlur={() => setIsEditName(false)}
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
            removeClient(modalData.name), setModalActive(false);
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default ClientModal;
