import react from 'react';
import Image from 'react-bootstrap/Image';
import img from '../assets/prof.png';

const Profile = () => {
  return (
    <div className='d-flex border rounded p-3'>
      <div>
        <Image src={img} style={{ width: '100px'}} />
      </div>
      <div className='ms-2'>
        <div className='h5'>Name</div>
      </div>
    </div>
  ) 
}

export { Profile };