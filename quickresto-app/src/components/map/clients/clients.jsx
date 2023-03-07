import { id } from '../map_of_city/map_of_city';
import './clients.css';

const Clients = ({
  setModalActive,
  setModalData,
  clientsData,
  setEditNameValue,
  setEditAmountValue,
}) => {
  const dataOfDelivery = clientsData.map((item) => {
    function handlerClickPoint() {
      return (
        setModalData(item),
        setModalActive(true),
        setEditNameValue(item.name),
        setEditAmountValue(item.amount)
      );
    }

    return (
      <div
        key={id()}
        className="point-of-delivery"
        style={{ top: `${item.y}%`, left: `${item.x}%` }}
        onClick={handlerClickPoint}
      ></div>
    );
  });

  return <>{dataOfDelivery}</>;
};

export default Clients;
