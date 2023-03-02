import './Gallery.css'
import Meta from '../../components/Meta'
import images from '../../data/images'

const Gallery = () => {
  return (
    <>
      <Meta title='Galerie' />
      <h1>Galerie</h1>
      <article className='gallery-container'>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </article>
    </>
  )
}

export default Gallery
