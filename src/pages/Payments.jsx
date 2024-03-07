import PaymentsList from '../components/PaymentsList';
import { getPayments } from '../payment-api';
import { useEffect, useState } from 'react';

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getPayments();
        setPayments(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      <PaymentsList payments={payments} />
    </>
  );
};
export default Payments;
