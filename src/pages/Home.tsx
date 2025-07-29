import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Clock, Heart, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import SongCard from "@/components/SongCard";
import PlaylistCard from "@/components/PlaylistCard";

const Home = () => {
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You've been signed out of your account.",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "An error occurred while signing out.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-center">
          <Heart className="h-12 w-12 mx-auto mb-4 text-music-primary" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const toggleLike = (songId: string) => {
    setLikedSongs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(songId)) {
        newSet.delete(songId);
      } else {
        newSet.add(songId);
      }
      return newSet;
    });
  };

  const featuredPlaylists = [
    {
      id: "1",
      title: "Today's Top Hits",
      description: "The biggest songs right now",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      songCount: 50
    },
    {
      id: "2", 
      title: "Chill Vibes",
      description: "Relax and unwind with these calm tracks",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
      songCount: 32
    }
  ];

  const recentlyPlayed = [
    {
      id: "1",
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
      duration: "3:20"
    },
    {
      id: "2",
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
      duration: "2:21"
    },
    {
      id: "3",
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop",
      duration: "2:58"
    }
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">{getGreeting()}</h1>
            <p className="text-white/80 text-sm">Welcome back, {user.email?.split('@')[0]}!</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={handleSignOut}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Quick access buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="player" className="justify-start h-12 bg-white/20 border-white/30 text-white hover:bg-white/30">
            <Heart className="h-4 w-4 mr-3" />
            Liked Songs
          </Button>
          <Button variant="player" className="justify-start h-12 bg-white/20 border-white/30 text-white hover:bg-white/30">
            <Clock className="h-4 w-4 mr-3" />
            Recently Played
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Featured Playlists */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredPlaylists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                title={playlist.title}
                description={playlist.description}
                image={playlist.image}
                songCount={playlist.songCount}
                onPlay={() => console.log("Playing playlist:", playlist.title)}
              />
            ))}
          </div>
        </section>

        {/* Recently Played */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Recently Played</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentlyPlayed.map((song) => (
              <SongCard
                key={song.id}
                title={song.title}
                artist={song.artist}
                image={song.image}
                duration={song.duration}
                isLiked={likedSongs.has(song.id)}
                onPlay={() => console.log("Playing song:", song.title)}
                onLike={() => toggleLike(song.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;