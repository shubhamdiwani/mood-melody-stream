import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Music, Play, Users, Heart } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-center">
          <Music className="h-12 w-12 mx-auto mb-4 text-music-primary" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-music-dark/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <Music className="h-16 w-16 mx-auto mb-4 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              NoorBeats
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover, stream, and enjoy unlimited music. Your perfect soundtrack awaits.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/auth')}
              className="bg-white text-music-dark hover:bg-white/90 text-lg px-8 py-6 h-auto"
            >
              Get Started
            </Button>
            <Button 
              onClick={() => navigate('/auth')}
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-music-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose NoorBeats?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-music-accent/30 rounded-lg border border-music-accent/50">
              <Play className="h-12 w-12 mx-auto mb-4 text-music-primary" />
              <h3 className="text-xl font-semibold mb-2">Unlimited Streaming</h3>
              <p className="text-muted-foreground">
                Stream millions of songs without limits or interruptions.
              </p>
            </div>
            
            <div className="text-center p-6 bg-music-accent/30 rounded-lg border border-music-accent/50">
              <Users className="h-12 w-12 mx-auto mb-4 text-music-primary" />
              <h3 className="text-xl font-semibold mb-2">Social Playlists</h3>
              <p className="text-muted-foreground">
                Create and share playlists with friends and discover new music.
              </p>
            </div>
            
            <div className="text-center p-6 bg-music-accent/30 rounded-lg border border-music-accent/50">
              <Heart className="h-12 w-12 mx-auto mb-4 text-music-primary" />
              <h3 className="text-xl font-semibold mb-2">Personalized</h3>
              <p className="text-muted-foreground">
                Get recommendations tailored to your unique taste in music.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Listening?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of music lovers who have already discovered their new favorite songs on NoorBeats.
          </p>
          <Button 
            onClick={() => navigate('/auth')}
            className="bg-gradient-primary text-white hover:opacity-90 text-lg px-8 py-6 h-auto"
          >
            Start Your Musical Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
