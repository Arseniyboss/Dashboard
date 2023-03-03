import './Courses.css'
import Meta from '../../components/Meta'

const day = 24 * 60 * 60 * 1000

const Courses = () => {
  return (
    <>
      <Meta title='Kurse' />
      {/* <h1>Kurse</h1> */}
      <article className='course-container'>
        <section className='courses'>
          <p className='course-date'>
            {new Date().toLocaleDateString('ru-RU')}
          </p>
          <ul>
            <li className='course'>
              <p>Smart Homes Labor</p>
              <div className='course-details'>
                <p>F4.23</p>
                <p>08:45 - 12:05</p>
              </div>
            </li>
            <li className='course'>
              <p>Rechnungswesen</p>
              <div className='course-details'>
                <p>F4.06</p>
                <p>12:50 - 14:20</p>
              </div>
            </li>
            <li className='course'>
              <p>Webtechnologien</p>
              <div className='course-details'>
                <p>A6.10</p>
                <p>14-30 - 16:00</p>
              </div>
            </li>
          </ul>
        </section>
        <section className='courses'>
          <p className='course-date'>
            {new Date(Date.now() + day).toLocaleDateString('ru-RU')}
          </p>
          <ul>
            <li className='course'>
              <p>Gebäudesystemtechnik</p>
              <div className='course-details'>
                <p>F1.01</p>
                <p>09:40 - 12:05</p>
              </div>
            </li>
            <li className='course'>
              <p>Automation Networks</p>
              <div className='course-details'>
                <p>F4.23</p>
                <p>12:50 - 16:00</p>
              </div>
            </li>
          </ul>
        </section>
        <section className='courses'>
          <p className='course-date'>
            {new Date(Date.now() + day + day).toLocaleDateString('ru-RU')}
          </p>
          <ul>
            <li className='course'>
              <p>Biosignale</p>
              <div className='course-details'>
                <p>F4.22</p>
                <p>09:40 - 12:05</p>
              </div>
            </li>
            <li className='course'>
              <p>Rechnungswesen</p>
              <div className='course-details'>
                <p>B2.01</p>
                <p>12:50 - 14:20</p>
              </div>
            </li>
            <li className='course'>
              <p>Webtechnologien</p>
              <div className='course-details'>
                <p>A5.10</p>
                <p>14-30 - 16:00</p>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}

export default Courses
