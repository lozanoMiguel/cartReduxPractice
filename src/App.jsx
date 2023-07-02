import './App.css'

function App() {
  return (
    <>
    <h1 className='text-center'>Shop cart</h1>
      <div className='container mt-5'>
        <table class="table">
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
              <td>50</td>
              <td className='text-center'>
                <button className='btn btn-success text-center'>Add</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Zapatillas offWhite</td>
              <td>290$</td>
              <td>20</td>
              <td className='text-center'>
                <button className='btn btn-success text-center'>Add</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Guitarra Gibson LesPaul</td>
              <td>1950$</td>
              <td>5</td>
              <td className='text-center'>
                <button className='btn btn-success text-center'>Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
