import React from "react";

const features = [
  {
    id: "01",
    title: "User-Friendly Interface",
    description:
      "Our platform offers seamless task management to boost your efficiency.",
    icon: "/assets/UI.png",
  },
  {
    id: "02",
    title: "Collaborate & Share Effortlessly",
    description:
      "Invite team members to work together and achieve your goals faster.",
    icon: "/assets/share.png",
  },
  {
    id: "03",
    title: "Effortless Collaboration",
    description:
      "Invite team members to work together and achieve your goals faster.",
    icon: "/assets/Collab.png",
  },
  {
    id: "04",
    title: "Seamless Access",
    description: "Stay connected and manage your tasks on the go with ease.",
    icon: "/assets/Access.png",
  },
];

const FeatureCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[80%] min-h-[280px] mb-[4rem]">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="bg-[#F7F7F7] rounded-xl shadow-sm p-6 text-left relative"
        >
          <div className="flex justify-center items-center mb-4 bg-[#FFFFFF] w-[80px] h-[80px]">
            <img src={feature.icon} alt={feature.title} className="h-[50px]" />
          </div>

          <h3 className="text-lg font-bold text-[#0A1D56] min-h-[48px]">
            {feature.title}
          </h3>

          <div className="flex justify-start gap-2 my-2">
            <div className="w-10 h-1 bg-[#FF3E54] rounded" />
            <div className="w-4 h-1 bg-[#FF3E54] rounded" />
          </div>

          <p className="text-sm text-[#333]">{feature.description}</p>

          <div className="absolute top-4 right-4 text-3xl font-[800] text-[#E4E7EC]">
            {feature.id}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
