const JAMENDO_BASE_URL = 'https://api.jamendo.com/v3.0';
const CLIENT_ID = '496b4a2f';

export interface JamendoTrack {
  id: string;
  name: string;
  duration: number;
  artist_name: string;
  album_name: string;
  image: string;
  audio: string;
  audiodownload: string;
}

export interface JamendoResponse<T> {
  headers: {
    status: string;
    code: number;
    error_message?: string;
  };
  results: T[];
}

class JamendoAPIService {
  private async makeRequest<T>(endpoint: string, params: Record<string, string | number> = {}): Promise<JamendoResponse<T>> {
    const url = new URL(`${JAMENDO_BASE_URL}/${endpoint}`);
    
    // Add client_id to all requests
    url.searchParams.append('client_id', CLIENT_ID);
    
    // Add other parameters
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`Jamendo API error: ${response.status}`);
    }

    return response.json();
  }

  // Get tracks with specified limit
  async getTracks(limit: number = 10): Promise<JamendoTrack[]> {
    const response = await this.makeRequest<JamendoTrack>('tracks', {
      format: 'json',
      limit,
      include: 'musicinfo'
    });
    
    return response.results;
  }

  // Search for tracks
  async searchTracks(query: string, limit: number = 20): Promise<JamendoTrack[]> {
    const response = await this.makeRequest<JamendoTrack>('tracks', {
      search: query,
      limit,
      format: 'json',
      include: 'musicinfo'
    });
    
    return response.results;
  }

  // Get popular tracks
  async getPopularTracks(limit: number = 20): Promise<JamendoTrack[]> {
    const response = await this.makeRequest<JamendoTrack>('tracks', {
      order: 'popularity_total',
      limit,
      format: 'json',
      include: 'musicinfo'
    });
    
    return response.results;
  }

  // Get tracks by genre
  async getTracksByGenre(genre: string, limit: number = 20): Promise<JamendoTrack[]> {
    const response = await this.makeRequest<JamendoTrack>('tracks', {
      tags: genre,
      limit,
      format: 'json',
      include: 'musicinfo'
    });
    
    return response.results;
  }

  // Get track details
  async getTrackById(trackId: string): Promise<JamendoTrack | null> {
    const response = await this.makeRequest<JamendoTrack>('tracks', {
      id: trackId,
      format: 'json',
      include: 'musicinfo'
    });
    
    return response.results[0] || null;
  }
}

export const jamendoApi = new JamendoAPIService();