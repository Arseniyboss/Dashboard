import { getCourseDate } from '../helpers/getCourseDate'

const day = 24 * 60 * 60 * 1000

const courses = [
  {
    date: getCourseDate(),
    list: [
      {
        name: 'Smart Homes Labor',
        room: 'F4.23',
        time: '08:45 - 12:05',
      },
      {
        name: 'Rechnungswesen',
        room: 'F4.06',
        time: '12:50 - 14:20',
      },
      {
        name: 'Webtechnologien',
        room: 'A6.10',
        time: '14-30 - 16:00',
      },
    ],
  },
  {
    date: getCourseDate(day),
    list: [
      {
        name: 'Gebäudesystemtechnik',
        room: 'F1.01',
        time: '09:40 - 12:05',
      },
      {
        name: 'Automation Networks',
        room: 'F4.23',
        time: '12:50 - 16:00',
      },
    ],
  },
  {
    date: getCourseDate(day * 2),
    list: [
      {
        name: 'Biosignale',
        room: 'F4.22',
        time: '09:40 - 12:05',
      },
      {
        name: 'Rechnungswesen',
        room: 'B2.01',
        time: '12:50 - 14:20',
      },
      {
        name: 'Webtechnologien',
        room: 'A5.10',
        time: '14-30 - 16:00',
      },
    ],
  },
]

export default courses
