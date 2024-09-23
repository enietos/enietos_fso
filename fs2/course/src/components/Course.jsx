
const PartsParser = ({ part }) => {
  return (
  <div>
      <p>{part.name}: {part.exercises}</p>
    </div>
  )
}

const CourseParser = ({ course }) => {
    return (
      <div>
      <h2>{course.name}</h2>
        {course.parts.map( (part) => (
          <PartsParser key={part.id} part={part} />
        ))}
      </div>
    )
  }

const ListParser = ({courses}) => {
  return (
    <div>
    {courses.map( (course) => (
      <CourseParser key={course.id} course={course} />
    ))}
    </div>
  )
}
export default ListParser