import PaymentCard from './PaymentCard';

const PaymentsList = ({ payments }) => {
  return (
    <ul>
      {payments.map(payment => (
        <li key={payment.id}>
          <PaymentCard payment={payment} />
        </li>
      ))}
    </ul>
  );
};

export default PaymentsList;
