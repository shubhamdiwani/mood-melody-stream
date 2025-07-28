import { useState } from "react";
import { Heart, Download, Shuffle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import SongCard from "@/components/SongCard";

const Favorites = () => {
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set(["1", "2", "3"]));

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

  const favoriteSongs = [
    {
      id: "1",
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
      duration: "3:20"
    },
    {
      id: "2",
      title: "Perfect",
      artist: "Ed Sheeran", 
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
      duration: "4:23"
    },
    {
      id: "3",
      title: "Somebody Like You",
      artist: "Adele",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop",
      duration: "4:45"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
            <Heart className="h-10 w-10 text-white fill-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Favorites</h1>
            <p className="text-white/80">{favoriteSongs.length} songs</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="music" className="flex-1">
            <Play className="h-4 w-4 mr-2" />
            Play All
          </Button>
          <Button variant="player" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
            <Shuffle className="h-4 w-4 mr-2" />
            Shuffle
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-6">
        {favoriteSongs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favoriteSongs.map((song) => (
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
        ) : (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No favorites yet</h3>
            <p className="text-muted-foreground">Start liking songs to build your collection</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;