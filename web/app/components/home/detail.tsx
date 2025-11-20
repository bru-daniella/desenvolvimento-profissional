import { useEffect, useState } from 'react';
import productsApi from '~/services/api'
import { Table } from 'react-bootstrap';
import type Product from '~/models/product';
import { useParams } from 'react-router';

export function Detail() {
  const [product, setProduct] = useState<Product>()
  
  const idStr = useParams().id;
  useEffect(() => {
    const get = async () => {
      const id = Number.parseInt(idStr!)
      let product = await productsApi.getOne(id)
      setProduct(product)
    }

    get();
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
                <tr>
                  <td>{product?.id}</td>
                  <td>{product?.name}</td>
                  <td>{product?.price}</td>
                </tr>
            }
          </tbody>
        </Table>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
}


