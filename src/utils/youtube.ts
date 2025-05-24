import { PlaylistData, Video } from '../types';

const API_KEY = 'AIzaSyBsYJBr6tFGsFsur_v9uo8JWs2RRHU97Yg';

export async function fetchPlaylistData(playlistId: string): Promise<PlaylistData> {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch playlist data');
  }

  const data = await response.json();
  
  const videos: Video[] = data.items.map((item: any) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.medium.url,
  }));

  return { videos };
} 