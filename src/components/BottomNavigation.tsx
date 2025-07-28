import { NavLink } from "react-router-dom";
import { Home, Search, Heart, User, Grid3X3 } from "lucide-react";

const BottomNavigation = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/categories", icon: Grid3X3, label: "Categories" },
    { to: "/search", icon: Search, label: "Search" },
    { to: "/favorites", icon: Heart, label: "Favorites" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-player border-t border-music-accent/30 backdrop-blur-lg z-50">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 py-2 px-1 transition-all duration-300 ${
                isActive
                  ? "text-music-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={`h-5 w-5 mb-1 ${isActive ? "scale-110" : ""} transition-transform duration-300`} />
                <span className="text-xs font-medium">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;