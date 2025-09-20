import React from "react";
import { Activity, Users, TrendingUp, Navigation, Command } from "lucide-react";

const TrackingSection = () => {
  const features = [
    {
      icon: Activity,
      title: "Hashtag Growth",
      description: "Follow a hashtag growth total posts, videos and images.",
      color: "bg-red-500",
    },
    {
      icon: Command,
      title: "Influencers by Hashtag",
      description:
        "Identify the most influential people posting with your hashtag.",
      color: "bg-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Most Influential Post",
      description:
        "See the most influential posts on hashtag you are following on.",
      color: "bg-yellow-500",
    },
    {
      icon: Navigation,
      title: "Hashtag Location",
      description:
        "Visualize where people are posting using your hashtag made.",
      color: "bg-green-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Track any hashtag(s) Performance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't waste time on search manual tasks. Let Automation do it for
            you. Simplify workflows, reduce errors, and save time.
          </p>
        </div>

        {/* Grid Wrapper */}
        <div className="flex flex-wrap justify-evenly gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" rounded-xl p-6 text-left hover:shadow-lg hover:bg-white transition-shadow duration-300 w-[258px] h-[300px] flex flex-col "
            >
              <div
                className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-dmsans font-bold text-title mb-5 text-left">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-left flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
