import './clients.css';
import data from '../../../data_file/model.json';
import { nanoid } from 'nanoid';

// console.log(data);

function id() {
  return nanoid();
}

function deliveryDetails(amount, name) {
  console.log(amount, name);
}

const Clients = ({ setModalActive, setModalData, clientsData }) => {
  const dataOfDelivery = clientsData.map((item) => {
    return (
      <div
        key={id()}
        className="point-of-delivery"
        style={{ top: `${item.y}%`, left: `${item.x}%` }}
        onClick={() => {
          deliveryDetails(item.amount, item.name),
            setModalActive(true),
            setModalData(item);
        }}
      ></div>
    );
  });
  return <div>{dataOfDelivery}</div>;
};

export default Clients;
