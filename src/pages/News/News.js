import './News.css'
import Meta from '../../components/Meta'

const News = () => {
  return (
    <>
      <Meta title='News' />
      <article>
        <ul className='data-list'>
          {[...Array(11)].map((_, index) => (
            <li key={index} className='data-item'>
              <p className='news-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p>{10 + index}:00</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default News
