import react, {useState, useEffect, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './CommonCss.css';
import { appContext } from '../AppContext';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState(null);
  const [productData, setProductData] = useState([]);
  const { setAllProducts, productCount } = useContext(appContext);
  console.log('product', productData.length);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(resp => {
        console.log(resp.data);
        let data = resp.data.map(d => ({value: d, label: d}))
        console.log(data);
        setOptions(data);
        setCategories(resp.data);
      })
      .catch(e => {
        console.log(e);
      })
  }, [])

  useEffect(() => {
    if (category) {
      axios
        .get('https://fakestoreapi.com/products/category/' + category.value)
        .then(resp => {
          console.log(resp.data);
          // setCategories(resp.data);
          setAllProducts(resp.data);
        })
        .catch(e => {
          console.log(e);
        })
    }
  }, [category])

  function handleCategoryChange(e) {
    setCategory(e);
  }

  return (
    <div>
      <div className='d-flex justify-content-around'>
        <Link to='/'>
          <i className="bi bi-house" style={{ fontSize: '2em'}}></i>
        </Link>
        {/* <Form.Select 
          onChange={handleCategoryChange} 
          size='sm' 
          style={{ width: '200px'}}
          value={category}
        >
          <option value={'0'} >Select Item</option>
          {
            categories.map(cat => (
              <option value={cat} key={cat}>{cat}</option>
            ))
          }
        </Form.Select> */}
        <Select 
          styles={{ 
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: 400
            })
          }}
          onChange={handleCategoryChange}
          options={options}
        />
        <div>
        <i class="bi bi-cart" style={{ fontSize: '2em'}}></i> {productCount > 0 ? productCount : null}
        <Link to='/profile'>
          <i class="bi bi-person-fill ms-2" style={{ fontSize: '2em'}}></i>
        </Link>
        </div>
      </div>
    </div>
  ) 
}

export { NavBar };