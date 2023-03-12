import './NotFound.css'
import { Link } from 'react-router-dom'
import Meta from '../../components/Meta'

const NotFound = () => {
  return (
    <>
      <Meta title='Not Found' />
      <article className='center-container error-container'>
        <img src='/images/404.svg' alt='404' className='error-image' />
        <h1 className='error-text'>Page not found</h1>
        <Link to='/'>
          <button className='home-button'>Back Home</button>
        </Link>
      </article>
    </>
  )
}

export default NotFound
