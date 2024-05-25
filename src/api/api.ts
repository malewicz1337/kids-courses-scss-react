import axios from "axios";
import { Course } from "../types";

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

export const getCourses = async (): Promise<ApiResponse<Course[]>> => {
  try {
    const response = await axios.get("https://logiclike.com/docs/courses.json");
    return { data: response.data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message || "Something went wrong" };
  }
};
