import { Link } from 'react-router-dom';

const PaymentCard = ({ payment }) => {
  return (
    <div>
      <p>Amount:{payment.amount}</p>
      <p>Description:{payment.description}</p>
      <Link to={`/payments/${payment.id}`}>Details</Link>
    </div>
  );
};

export default PaymentCard;
