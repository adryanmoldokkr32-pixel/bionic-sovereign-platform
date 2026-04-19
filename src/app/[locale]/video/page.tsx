import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';

export default function VideoPage({ params }: { params: { locale: string } }) {
  return <VideoPlayer params={params} />;
}