import './clients.css';
import { nanoid } from 'nanoid';

function id() {
  return nanoid();
}

// function deliveryDetails(amount, name) {
//   // console.log(amount, name);
// }

const Clients = ({ setModalActive, setModalData, clientsData }) => {
  const dataOfDelivery = clientsData.map((item) => {
    return (
      <div
        key={id()}
        className="point-of-delivery"
        style={{ top: `${item.y}%`, left: `${item.x}%` }}
        onClick={() => {
          // deliveryDetails(item.amount, item.name),
          setModalData(item), setModalActive(true);
        }}
      ></div>
    );
  });

  // console.log(dataOfDelivery);
  return <>{dataOfDelivery}</>;
};

export default Clients;
