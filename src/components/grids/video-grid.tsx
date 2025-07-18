"use client"

import DynamicGrid from "@/components/dynamic-grid"
import VideoCard from "@/components/video-card"
import { StrapiVideo } from "@/lib/strapi"
import { Play } from "lucide-react"

interface VideoGridProps {
  items: StrapiVideo[]
  title?: string
  showRelatedData?: boolean
}

export default function VideoGrid({ 
  items, 
  title = "Videolar",
  showRelatedData = false
}: VideoGridProps) {
  return (
    <DynamicGrid
      items={items}
      searchFields={['title']}
      filterConfigs={[]}
      renderItem={(video: StrapiVideo) => (
        <VideoCard 
          key={video.id} 
          video={video} 
          showRelatedData={showRelatedData}
        />
      )}
      title={title}
      emptyStateConfig={{
        icon: <Play className="h-12 w-12 text-gray-400 mx-auto mb-4" />,
        title: 'Video bulunamadı',
        description: 'Aradığınız kriterlere uygun video bulunamadı.'
      }}
    />
  )
} 