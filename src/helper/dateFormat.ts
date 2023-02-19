export default function dateFormat(data: string): Date {
  const [date, tempo] = data.split(" ")
  const [day, month, year] = date.split('/').map(Number)
  const [hours, minutes] = tempo.split(':').map(Number)
  return new Date(year, month - 1, day, hours, minutes)
}
