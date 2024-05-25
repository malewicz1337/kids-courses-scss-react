import { Course } from "../../types";
import "../../styles/CourseCard.scss";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <section className="course">
      <img
        src={course.image}
        alt={course.name}
        style={{ backgroundColor: course.bgColor }}
        width={200}
        height={200}
      />
      <p>{course.name}</p>
    </section>
  );
};

export default CourseCard;
