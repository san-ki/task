import react, { useContext } from 'react';
import { appContext } from '../AppContext';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Product = () => {
  const { curProduct, productCount, setProductCount } = useContext(appContext);
  let { title, price, description: desc, image, rating } = curProduct;
  return (
    <div className='d-flex border rounded p-3'>
      <div className='p-3'>
        <Image src={image} style={{ width: '100px'}} />
      </div>
      <div>
        <div className='h5'>{title}</div>
        <p style={{ width: '200px', textAlign: 'left' }} >{desc}</p>
        <Button onClick={() => {setProductCount(productCount + 1)}}>Add To Cart</Button>
      </div>
    </div>
  ) 
}

export { Product };