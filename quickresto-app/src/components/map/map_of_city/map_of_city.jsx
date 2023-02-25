import './map_of_city.css';
import map from '../../../assets/tutzing.svg';
import data from '../../../data_file/model.json';
import Clients from '../clients/clients';
import ClientModal from '../modal/client_modal';
import NewClientModal from '../new_client_modal/new_client_modal';
import { useState } from 'react';
import {
  removeUser,
  saveClientsData,
  getClientsData,
  hasCLientData,
} from '../../../storage';

saveClientsData(hasCLientData() ? getClientsData() : data);

console.log(getClientsData());

const MapOfCity = ({ setIsAuth }) => {
  const [modalActive, setModalActive] = useState(false);
  const [newModalActive, setNewModalActive] = useState(false);
  const [modalData, setModalData] = useState({});
  const [clientsData, setClientsData] = useState(getClientsData());
  const [newClientCoords, setNewClientCoords] = useState({});

  function getNewClientCoords(event) {
    const leftCoordinate =
      (event.clientX - event.target.parentNode.offsetLeft) / 10;
    const topCoordinate =
      (event.clientY - event.target.parentNode.offsetTop) / 10;
    setNewModalActive(true);
    setNewClientCoords({
      ...newClientCoords,
      ...{ x: topCoordinate, y: leftCoordinate },
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
        Сброить изменения
      </button>
      <Clients
        setModalActive={setModalActive}
        setModalData={setModalData}
        clientsData={clientsData}
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
