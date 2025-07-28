import { Play, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
  songCount: number;
  onPlay?: () => void;
}

const PlaylistCard = ({ title, description, image, songCount, onPlay }: PlaylistCardProps) => {
  return (
    <div className="group bg-gradient-card rounded-xl p-4 border border-music-accent/20 hover:border-music-accent/40 transition-all duration-300 hover:shadow-card">
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover rounded-lg"
        />
        <Button
          variant="music"
          size="icon"
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl"
          onClick={onPlay}
        >
          <Play className="h-5 w-5" />
        </Button>
      </div>
      
      <div>
        <h3 className="font-bold text-lg text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Music className="h-3 w-3" />
          <span>{songCount} songs</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;