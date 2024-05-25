import { useState, useEffect } from "react";
import { getCourses } from "../api/api";
import TagFilter from "./TagFilter";
import CourseCard from "./ui/CourseCard";
import { Course } from "../types";
import "../styles/CourseList.scss";

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState("Все темы");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await getCourses();
      if (error) {
        setError(error);
        return;
      }

      if (data) {
        setCourses(data);
        setFilteredCourses(data);
        const allTags = Array.from(
          new Set(data.flatMap((course) => course.tags)),
        );
        setTags(["Все темы", ...allTags]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedTag === "Все темы") {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(
        courses.filter((course) => course.tags.includes(selectedTag)),
      );
    }
  }, [selectedTag, courses]);

  return (
    <article className="course-list">
      <TagFilter
        tags={tags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <section className="courses">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </section>
      )}
    </article>
  );
};

export default CourseList;
