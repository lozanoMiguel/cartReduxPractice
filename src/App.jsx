import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Purchase from './components/Purchase';
import ProductTable from './components/ProductTable';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path = '/' element={<ProductTable />} />
            <Route path='/purchase' element={<Purchase />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
