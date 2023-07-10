import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { decrementOff, decrementGibson, decrementStanley, incrementOff, incrementGibson, incrementStanley } from '../actions'


export default function ProductTable() {

  const gibsonStock = useSelector(state => state.gibson);
  const stanleyStock = useSelector(state => state.stanley);
  const offwhiteStock = useSelector(state => state.off);
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  
  const addGibson = () =>{
    dispatch(decrementGibson())
    dispatch(incrementGibson())
  }

  const addOff = () =>{
    dispatch(decrementOff())
    dispatch(incrementOff())
  }

  const addStanley = () =>{
    dispatch(decrementStanley())
    dispatch(incrementStanley())
  }

  return (
    <>
    <h1 className='text-center'>Shop cart</h1>
        <div className='container mt-5'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
                <th scope="col">Stock</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Termo Stanley</td>
                <td>22$</td>
                <td>{ stanleyStock }</td>
                <td className='text-center'>
                  <button className='btn btn-success text-center' onClick={()=> addStanley()}>Add</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Zapatillas offWhite</td>
                <td>290$</td>
                <td>{ offwhiteStock }</td>
                <td className='text-center'>
                  <button className='btn btn-success text-center' onClick={()=> addOff()}>Add</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Guitarra Gibson LesPaul</td>
                <td>1950$</td>
                <td>{ gibsonStock }</td>
                <td className='text-center'>
                  <button className='btn btn-success text-center' onClick={()=> addGibson()}>Add</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='text-center'>
            <button className='btn btn-success' onClick={()=>navigate('/purchase')}>Purchase</button>  
          </div>
        </div>
        </>
  )
}
