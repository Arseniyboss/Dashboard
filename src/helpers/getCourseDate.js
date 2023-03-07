export const getCourseDate = (offset) => {
  if (offset) {
    return new Date(Date.now() + offset).toLocaleDateString('ru-RU')
  }
  return new Date().toLocaleDateString('ru-RU')
}
