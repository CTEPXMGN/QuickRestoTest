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
    return (
      <div
        key={id()}
        className="point-of-delivery"
        style={{ top: `${item.y}%`, left: `${item.x}%` }}
        onClick={() => {
          setModalData(item),
            setModalActive(true),
            setEditNameValue(item.name),
            setEditAmountValue(item.amount);
        }}
      ></div>
    );
  });

  return <>{dataOfDelivery}</>;
};

export default Clients;
