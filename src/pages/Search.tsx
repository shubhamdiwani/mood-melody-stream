import { useState } from "react";
import { Search as SearchIcon, Clock, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SongCard from "@/components/SongCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());

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

  const recentSearches = [
    "Arijit Singh",
    "Bollywood Hits",
    "Ed Sheeran",
    "Lofi Hip Hop"
  ];

  const trendingSearches = [
    "Shape of You",
    "Kesariya",
    "As It Was",
    "Heat Waves"
  ];

  const searchResults = [
    {
      id: "1",
      title: "Perfect",
      artist: "Ed Sheeran",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
      duration: "4:23"
    },
    {
      id: "2",
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
      duration: "3:20"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6">
        <h1 className="text-3xl font-bold text-white mb-4">Search</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search songs, artists, albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
          />
        </div>
      </div>

      <div className="p-6 space-y-6">
        {searchQuery ? (
          /* Search Results */
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Search Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((song) => (
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
        ) : (
          <>
            {/* Recent Searches */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold text-foreground">Recent Searches</h2>
              </div>
              <div className="space-y-2">
                {recentSearches.map((search) => (
                  <Button
                    key={search}
                    variant="ghost"
                    className="w-full justify-start h-auto p-3 text-left"
                    onClick={() => setSearchQuery(search)}
                  >
                    <SearchIcon className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span>{search}</span>
                  </Button>
                ))}
              </div>
            </section>

            {/* Trending Searches */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-music-primary" />
                <h2 className="text-lg font-semibold text-foreground">Trending</h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {trendingSearches.map((search) => (
                  <Button
                    key={search}
                    variant="category"
                    className="h-auto p-4 text-left justify-start"
                    onClick={() => setSearchQuery(search)}
                  >
                    <TrendingUp className="h-4 w-4 mr-2 text-music-primary" />
                    <span className="truncate">{search}</span>
                  </Button>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;