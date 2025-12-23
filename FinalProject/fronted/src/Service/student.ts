import type { SchoolClass } from "../Types/classTypes";

const apiUrl = import.meta.env.VITE_API_URL;

export const getAllStudentClasses = async (studentId: number): Promise<SchoolClass[]>=> {
  const res = await fetch(`${apiUrl}/student/classes?`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!res.ok) {
    throw new Error(`Couldn't get classes (${res.status})`);
  }
  const data = await res.json();
  return data.classes;;
};

    
