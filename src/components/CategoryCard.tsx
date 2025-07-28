import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  gradient: string;
  onClick?: () => void;
}

const CategoryCard = ({ title, icon: Icon, gradient, onClick }: CategoryCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${gradient}`}
      onClick={onClick}
    >
      <div className="relative z-10">
        <Icon className="h-8 w-8 text-white mb-3 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
};

export default CategoryCard;