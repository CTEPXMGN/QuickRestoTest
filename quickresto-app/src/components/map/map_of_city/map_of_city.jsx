import './map_of_city.css';
import map from '../../../assets/tutzing.svg';
import initData from '../../../data_file/model.json';
import Clients from '../clients/clients';
import ClientModal from '../modal/client_modal';
import NewClientModal from '../new_client_modal/new_client_modal';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  removeUser,
  saveClientsData,
  getClientsData,
  hasCLientData,
} from '../../../storage';

export function id() {
  return nanoid();
}
const data = initData.map((item) => {
  return { ...item, ...{ id: id() } };
});

saveClientsData(hasCLientData() ? getClientsData() : data);

const MapOfCity = ({ setIsAuth }) => {
  const [modalActive, setModalActive] = useState(false);
  const [newModalActive, setNewModalActive] = useState(false);
  const [modalData, setModalData] = useState({});
  const [clientsData, setClientsData] = useState(getClientsData());
  const [newClientCoords, setNewClientCoords] = useState({});
  const [editNameValue, setEditNameValue] = useState('');
  const [editAmountValue, setEditAmountValue] = useState('');

  function getNewClientCoords(event) {
    const leftCoordinate =
      ((event.pageX - event.target.parentNode.offsetLeft) * 100) /
      event.target.offsetWidth;
    const topCoordinate =
      ((event.pageY - event.target.parentNode.offsetTop) * 100) /
      event.target.offsetHeight;

    setNewModalActive(true);
    setNewClientCoords({
      ...newClientCoords,
      ...{ y: topCoordinate, x: leftCoordinate },
    });
  }

  return (
    <div className="map-container">
      <button
        className="out-button"
        onClick={() => {
          setIsAuth(false), removeUser();
        }}
      >
        Выйти
      </button>
      <button
        className="clear-button"
        onClick={() => {
          setClientsData(data);
          saveClientsData(data);
        }}
      >
        Сброcить изменения
      </button>
      <Clients
        setModalActive={setModalActive}
        setModalData={setModalData}
        clientsData={clientsData}
        setEditNameValue={setEditNameValue}
        setEditAmountValue={setEditAmountValue}
      />
      <img
        src={map}
        className="map-img"
        onDoubleClick={(event) => getNewClientCoords(event)}
      />
      <ClientModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        modalData={modalData}
        clientsData={clientsData}
        setClientsData={setClientsData}
        editNameValue={editNameValue}
        setEditNameValue={setEditNameValue}
        editAmountValue={editAmountValue}
        setEditAmountValue={setEditAmountValue}
      />
      <NewClientModal
        newModalActive={newModalActive}
        setNewModalActive={setNewModalActive}
        newClientCoords={newClientCoords}
        clientsData={clientsData}
        setClientsData={setClientsData}
      />
    </div>
  );
};

export default MapOfCity;
