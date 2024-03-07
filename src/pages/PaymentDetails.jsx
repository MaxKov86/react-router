import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPaymentDetails } from '../payment-api';

const PaymentDitails = () => {
  const [payment, setPayment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { paymentId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getPaymentDetails(paymentId);
        console.log(data);
        setPayment(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, [paymentId]);
  return (
    <>
      <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {payment && (
          <ul>
            <li>Card Owner:{payment.cardOwner}</li>
            <li>Card Type: {payment.cardType}</li>
            <li>Card Number: {payment.cardNumber}</li>
          </ul>
        )}
      </ul>
    </>
  );
};

export default PaymentDitails;
