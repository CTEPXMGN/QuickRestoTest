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
        className="delivery-point"
        style={{
          top: `calc(${item.y}% - 0.7em)`,
          left: `calc(${item.x}% - 0.7em)`,
        }}
        onClick={handlerClickPoint}
      ></div>
    );
  });

  return <>{dataOfDelivery}</>;
};

export default Clients;
