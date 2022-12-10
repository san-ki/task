import react, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Navigate, Link } from 'react-router-dom';

import { appContext } from '../AppContext';

const Item = ({ data }) => {
  let { title, price, description: desc, image, rating } = data;
  const { setCurProduct } = useContext(appContext);
  return (
    <div 
    className="m-2 p-2 d-flex flex-column border rounded"  
    style={{ width: 300, height: 400, textDecoration: 'none' }} 
    onClick={() => {
      setCurProduct(data);
      Navigate('/product');
    }}
    >
        <Link to='/product'>
          <img style={{ width: 200, height: 300 }} src={image} alt='Product Image'/>
        </Link>
        <div className='item-name'>
          {title}
        </div>
      </div>

    // <Card className="m-2 p-2 d-flex"  style={{ width: 300, height: 300 }}>
    //   <Card.Img src={image} style={{width: 100}} onClick={() => setCurProduct(data)}/>
    //     <Card.Body className='text-primary text-decoration-none'>{title}</Card.Body>
    // </Card>
  ) 
}

export { Item };