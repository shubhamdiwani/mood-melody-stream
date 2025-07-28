import { Settings, Download, History, Share, HelpCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const profileStats = [
    { label: "Playlists", value: "12" },
    { label: "Following", value: "45" },
    { label: "Followers", value: "128" }
  ];

  const menuItems = [
    { icon: Download, label: "Downloads", action: () => console.log("Downloads") },
    { icon: History, label: "Listening History", action: () => console.log("History") },
    { icon: Share, label: "Share App", action: () => console.log("Share") },
    { icon: Settings, label: "Settings", action: () => console.log("Settings") },
    { icon: HelpCircle, label: "Help & Support", action: () => console.log("Help") },
    { icon: LogOut, label: "Sign Out", action: () => console.log("Sign Out"), destructive: true }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 mb-4 border-4 border-white/20">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop" />
            <AvatarFallback className="text-2xl bg-white/20 text-white">JD</AvatarFallback>
          </Avatar>
          
          <h1 className="text-2xl font-bold text-white mb-2">John Doe</h1>
          <p className="text-white/80 mb-4">john.doe@example.com</p>
          
          <div className="flex items-center gap-6">
            {profileStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="category" className="h-16 flex-col">
              <Download className="h-5 w-5 mb-1" />
              <span className="text-sm">Downloads</span>
            </Button>
            <Button variant="category" className="h-16 flex-col">
              <History className="h-5 w-5 mb-1" />
              <span className="text-sm">History</span>
            </Button>
          </div>
        </section>

        {/* Menu Items */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Settings</h2>
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className={`w-full justify-start h-auto p-4 ${
                  item.destructive ? "text-red-500 hover:text-red-400 hover:bg-red-500/10" : ""
                }`}
                onClick={item.action}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;