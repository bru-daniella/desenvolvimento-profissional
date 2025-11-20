import { useEffect, useState } from 'react';
import productsApi from '~/services/api'
import { Table } from 'react-bootstrap';
import type Product from '~/models/product';
export function Grid() {

  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    const getAll = async () => {
      let products = await productsApi.getAll()
      setProducts(products)
    }

    getAll();
  }, [])
  return (
    <div className='row'>
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {
              products?.map(({ id, name, price }) => (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>
                    <a className='btn btn-success' href={'/products/' + id + '/details'}>Detalhes</a>
                  </td>
                </tr>
              )
              )
            }
          </tbody>
        </Table>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
}


