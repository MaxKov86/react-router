import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/dogs">Collection</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/dogs" element={<div>Collection</div>} />
      </Routes>
    </>
  );
}

export default App;
