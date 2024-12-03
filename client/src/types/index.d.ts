declare global {
   
    interface Course {
      courseId: string;
      teacherId: string;
      teacherName: string;
      title: string;
      description?: string;
      category: string;
      image?: string;
      price?: number; // Stored in cents (e.g., 4999 for $49.99)
      level: "Beginner" | "Intermediate" | "Advanced";
      status: "Draft" | "Published";
      sections: Section[];
      enrollments?: Array<{
        userId: string;
      }>;
    }
  
    interface SearchCourseCardProps {
      course: Course;
      isSelected?: boolean;
      onClick?: () => void;
    }

    interface AccordionSectionsProps {
      sections: Section[];
    }
    
  interface SelectedCourseProps {
    course: Course;
    handleEnrollNow: (courseId: string) => void;
  }

  interface HeaderProps {
    title: string;
    subtitle: string;
    rightElement?: ReactNode;
  }



  }
  
  export {};