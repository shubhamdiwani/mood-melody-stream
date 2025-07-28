import { Play, Heart, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SongCardProps {
  title: string;
  artist: string;
  image: string;
  duration?: string;
  isLiked?: boolean;
  onPlay?: () => void;
  onLike?: () => void;
}

const SongCard = ({ title, artist, image, duration, isLiked, onPlay, onLike }: SongCardProps) => {
  return (
    <div className="group bg-gradient-card rounded-xl p-4 border border-music-accent/20 hover:border-music-accent/40 transition-all duration-300 hover:shadow-card">
      <div className="relative mb-3">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover rounded-lg"
        />
        <Button
          variant="music"
          size="icon"
          className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          onClick={onPlay}
        >
          <Play className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{title}</h3>
          <p className="text-sm text-muted-foreground truncate">{artist}</p>
          {duration && (
            <p className="text-xs text-muted-foreground mt-1">{duration}</p>
          )}
        </div>
        
        <div className="flex items-center gap-1 ml-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={onLike}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;