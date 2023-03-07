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

  function removeClient(id) {
    const newModalData = clientsData.filter((item) => item.id != id);
    setClientsData(newModalData);
    saveClientsData(newModalData);
  }

  function editClientData(id) {
    const editedClientData = clientsData.map((item) => {
      if (item.id === id) {
        return { ...item, name: editNameValue, amount: editAmountValue };
      }
      return item;
    });
    setClientsData(editedClientData);
    saveClientsData(editedClientData);
  }

  function changeNameValue(event) {
    setEditNameValue(event.target.value);
  }

  function changeAmountValue(event) {
    setEditAmountValue(event.target.value);
  }

  function handlerClickRemove() {
    return removeClient(modalData.id), setModalActive(false);
  }

  function handlerClickCloseModal() {
    return setModalActive(false), setIsEditName(false), setIsEditAmount(false);
  }

  function handlerBlurEditName() {
    return setIsEditName(false), editClientData(modalData.id);
  }

  function handlerBlurEditAmount() {
    return setIsEditAmount(false), editClientData(modalData.id);
  }
  const inputName = (
    <input
      className="modal__input-name"
      type="text"
      value={editNameValue}
      autoFocus={true}
      onBlur={handlerBlurEditName}
      onChange={(event) => {
        changeNameValue(event);
      }}
    />
  );
  const textName = (
    <span onDoubleClick={() => setIsEditName(true)}>{editNameValue}</span>
  );

  const inputAmount = (
    <input
      className="modal__input-amount"
      type="text"
      value={editAmountValue}
      autoFocus={true}
      onBlur={handlerBlurEditAmount}
      onChange={(event) => {
        changeAmountValue(event);
      }}
    />
  );

  const textAmount = (
    <span onDoubleClick={() => setIsEditAmount(true)}>{editAmountValue}</span>
  );

  return (
    <div
      className={modalActive ? 'modal active' : 'modal'}
      onClick={handlerClickCloseModal}
    >
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <h3>Клиент</h3>
        <p>Имя: {isEditName ? inputName : textName}</p>

        <p>Кол-во: {isEditAmount ? inputAmount : textAmount}</p>
        <button className="modal__button-remove" onClick={handlerClickRemove}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default ClientModal;
