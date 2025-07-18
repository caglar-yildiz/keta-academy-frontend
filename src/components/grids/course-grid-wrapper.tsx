"use client"

import { StrapiCourse } from "@/lib/strapi"
import CourseCard from "../course-card"
import DynamicGrid from "../dynamic-grid"
import { Calculator } from "lucide-react"

interface CourseGridProps {
  courses: StrapiCourse[]
  grades: string[]
  topics: string[]
  title?: React.ReactNode
  showProgress?: boolean
}

export default function CourseGrid({ 
  courses, 
  grades, 
  topics, 
  title = "📚 Dersler",
  showProgress = false
}: CourseGridProps) {
  return (
    <DynamicGrid
      items={courses}
      searchFields={['title', 'description']}
      filterConfigs={[
        {
          field: 'grades',
          label: 'Sınıf',
          type: 'select',
          options: grades,
          allLabel: 'Tüm Sınıflar'
        },
        {
          field: 'subject.title',
          label: 'Konu',
          type: 'select',
          options: topics,
          allLabel: 'Tüm Konular'
        }
      ]}
      renderItem={(course) => (
        <CourseCard 
          key={course.id} 
          course={course} 
          showProgress={showProgress}
        />
      )}
      title={title}
      emptyStateConfig={{
        icon: <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />,
        title: 'Ders bulunamadı',
        description: 'Filtreleri değiştirerek dersleri bulabilirsiniz.'
      }}
    />
  )
} 