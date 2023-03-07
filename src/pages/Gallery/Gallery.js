import './Gallery.css'
import Meta from '../../components/Meta'
import images from '../../data/images'

const Gallery = () => {
  return (
    <>
      <Meta title='Galerie' />
      <article className='gallery-container'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className='gallery-image'
          />
        ))}
      </article>
    </>
  )
}

export default Gallery
