import {
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  eachDayOfInterval,
} from 'date-fns'

export const getCalendarDates = (currentDate) => {
  const firstWeekStart = startOfWeek(startOfMonth(currentDate), {
    weekStartsOn: 1,
  })
  const lastWeekEnd = endOfWeek(endOfMonth(currentDate), {
    weekStartsOn: 1,
  })
  const dates = eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd })
  return dates
}
