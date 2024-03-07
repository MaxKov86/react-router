import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Payments from '../pages/Payments';
import Navigation from './Navigation/Navigation';
import NotFound from '../pages/NotFound';
import PaymentDetails from '../pages/PaymentDetails';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/payments/:paymentId" element={<PaymentDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
