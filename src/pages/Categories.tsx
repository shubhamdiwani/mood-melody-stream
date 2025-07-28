import { Heart, Music2, Sparkles, HandHeart } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";

const Categories = () => {
  const categories = [
    {
      id: "romantic",
      title: "Romantic",
      icon: Heart,
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      id: "garba",
      title: "Garba",
      icon: Sparkles,
      gradient: "bg-gradient-to-br from-orange-500 to-yellow-600"
    },
    {
      id: "sad",
      title: "Sad",
      icon: Music2,
      gradient: "bg-gradient-to-br from-blue-600 to-indigo-700"
    },
    {
      id: "devotional",
      title: "Devotional",
      icon: HandHeart,
      gradient: "bg-gradient-to-br from-amber-500 to-orange-600"
    }
  ];

  const genres = [
    { title: "Pop", color: "bg-gradient-to-br from-purple-500 to-pink-600" },
    { title: "Rock", color: "bg-gradient-to-br from-red-600 to-orange-600" },
    { title: "Hip Hop", color: "bg-gradient-to-br from-gray-700 to-gray-900" },
    { title: "Electronic", color: "bg-gradient-to-br from-cyan-500 to-blue-600" },
    { title: "Jazz", color: "bg-gradient-to-br from-yellow-600 to-amber-700" },
    { title: "Classical", color: "bg-gradient-to-br from-emerald-600 to-teal-700" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6">
        <h1 className="text-3xl font-bold text-white">Categories</h1>
        <p className="text-white/80 mt-2">Discover music by mood and genre</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Mood Categories */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Browse by Mood</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                icon={category.icon}
                gradient={category.gradient}
                onClick={() => console.log("Selected category:", category.title)}
              />
            ))}
          </div>
        </section>

        {/* Genres */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Genres</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {genres.map((genre) => (
              <div
                key={genre.title}
                className={`${genre.color} rounded-lg p-4 cursor-pointer transition-all duration-300 hover:scale-105`}
                onClick={() => console.log("Selected genre:", genre.title)}
              >
                <h3 className="text-white font-semibold text-center">{genre.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;