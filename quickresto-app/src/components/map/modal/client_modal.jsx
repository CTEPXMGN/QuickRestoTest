import './client_modal.css';
import { saveClientsData } from '../../../storage';

const ClientModal = ({
  modalActive,
  setModalActive,
  modalData,
  clientsData,
  setClientsData,
}) => {
  function removeClient(name) {
    const newModalData = clientsData.filter((item) => item.name != name);
    setClientsData(newModalData);
    saveClientsData(newModalData);
  }

  return (
    <div
      className={modalActive ? 'modal active' : 'modal'}
      onClick={() => setModalActive(false)}
    >
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <h3>Клиент</h3>
        <p>Имя: {modalData.name}</p>

        <p>Кол-во: {modalData.amount}</p>
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
