import './Courses.css'
import Meta from '../../components/Meta'
import courses from '../../data/courses'

const Courses = () => {
  return (
    <>
      <Meta title='Kurse' />
      <article>
        {courses.map((courses, index) => (
          <section key={index} className='data-list'>
            <p className='course-date'>{courses.date}</p>
            <ul>
              {courses.list.map((course, index) => (
                <li key={index} className='data-item course'>
                  <p>{course.name}</p>
                  <div className='course-details'>
                    <p>{course.room}</p>
                    <p>{course.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </article>
    </>
  )
}

export default Courses
