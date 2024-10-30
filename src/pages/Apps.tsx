import { Code, Image, Gamepad2 } from "lucide-react";

export default function Apps() {
  const apps = [
    {
      name: "VS Code",
      icon: <Code className="w-12 h-12 mb-4" />,
      description: "Code editing. Redefined.",
      category: "Development"
    },
    {
      name: "Photoshop",
      icon: <Image className="w-12 h-12 mb-4" />,
      description: "Professional image editing",
      category: "Design"
    },
    {
      name: "Cyberpunk 2077",
      icon: <Gamepad2 className="w-12 h-12 mb-4" />,
      description: "Open-world action adventure",
      category: "Gaming"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Featured Apps</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <div
              key={app.name}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200 border border-gray-700"
            >
              <div className="flex flex-col items-center text-center">
                {app.icon}
                <h3 className="text-xl font-semibold text-white mb-2">{app.name}</h3>
                <span className="px-3 py-1 text-sm bg-purple-600 rounded-full mb-3">
                  {app.category}
                </span>
                <p className="text-gray-400">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}