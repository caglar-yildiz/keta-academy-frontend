"use client";

import { StrapiCourse } from "@/lib/strapi";
import CourseCard from "@/components/course-card";
import DynamicListing from "./dynamic-listing";

interface ListCoursesProps {
    courses: StrapiCourse[];
    title: React.ReactNode;
}

export default function ListCourses({ courses, title }: ListCoursesProps) {
    return (
        <DynamicListing
            items={courses}
            title={title}
            renderItem={(course) => (
                <CourseCard 
                    key={course.id} 
                    course={course} 
                    showProgress={false}
                />
            )}
            maxItems={3}
            gridColumns={{ md: 2, lg: 3 }}
        />
    )
} 