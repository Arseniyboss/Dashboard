import './Calendar.css'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { subMonths, addMonths, isSameMonth, isSameDay, format } from 'date-fns'
import { getCalendarDates } from '../../helpers/getCalendarDates'
import Meta from '../../components/Meta'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const todaysDate = new Date()
  const month = format(currentDate, 'MMMM yyyy')
  const dates = getCalendarDates(currentDate)
  return (
    <>
      <Meta title='Calendar' />
      <article className='center-container'>
        <div className='calendar'>
          <section className='calendar-header'>
            <FaArrowLeft
              className='calendar-btn'
              onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            />
            <p className='calendar-month'>{month}</p>
            <FaArrowRight
              className='calendar-btn'
              onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            />
          </section>
          <section>
            <ul className='calendar-weekdays'>
              <li className='calendar-weekday'>Mon</li>
              <li className='calendar-weekday'>Tue</li>
              <li className='calendar-weekday'>Wed</li>
              <li className='calendar-weekday'>Thu</li>
              <li className='calendar-weekday'>Fri</li>
              <li className='calendar-weekday'>Sat</li>
              <li className='calendar-weekday'>Sun</li>
            </ul>
          </section>
          <section>
            <ul className='calendar-days'>
              {dates.map((date, index) => (
                <li
                  key={index}
                  className={`calendar-day 
                  ${!isSameMonth(date, currentDate) && 'other-month'}
                  ${isSameDay(date, todaysDate) && 'current-day'}
                  `}
                >
                  {date.getDate()}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </>
  )
}

export default Calendar
