import React from 'react'
import { useSelector } from 'react-redux'

export default function Purchase() {

  const client = useSelector( state => state.client )
  /*const product = Object.keys(client).map((keyName, i)=>(
    <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
      Dapibus ac facilisis in
      <span class="badge badge-primary badge-pill">2</span>
    </li>
  ))*/

  return (
    <div>
      <h1 className='text-center'>Tu compra</h1>
      <div className='container'>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <p>Termo Stanley</p>
            {client.stanley}
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <p>Off White</p>
            {client.off}
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <p>Gibson Les Paul</p>
            {client.gibson}
            
          </li>
        </ul>
      </div>
    </div>
  )
}
