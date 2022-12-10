import react, {useState, useEffect, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './CommonCss.css';
import { Item } from './Item';
import { appContext } from '../AppContext';

const Home = () => {
  const { allProducts } = useContext(appContext);

  return (
    <div>
      <div className='d-flex mt-5 justify-content-center align-items-center'>
        {
          allProducts.length > 0 ?
            <div className='d-flex flex-wrap'>
              {
                allProducts.map((product, id) => (
                  <Item key={id} data={product} />
                ))
              }
            </div>
          : <div>Please Select Category</div>
        }
      </div>
    </div>
  ) 
}

export { Home };