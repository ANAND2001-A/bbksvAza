import React, { useRef, useEffect, useState } from "react";
import { videoData } from "../components/data/videoData";
import { X } from "lucide-react";

const VideoSlider = () => {
  const videoRefs = useRef([]);
  const [activeVideo, setActiveVideo] = useState(null);

  // ✅ Auto play when visible (mobile friendly)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  // ✅ Hover play (desktop)
  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) video.pause();
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Our Videos
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videoData.map((item, index) => (
          <div
            key={item.id}
            className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white cursor-pointer"
            onClick={() => setActiveVideo(item.video)}
          >
            <div className="relative">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                muted
                playsInline
                loop
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="bg-white/90 p-3 rounded-full text-black text-lg">
                  ▶
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="p-4">
              <h3 className="text-sm md:text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Fullscreen Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-5 right-5 text-white bg-white/20 p-2 rounded-full"
          >
            <X />
          </button>

          {/* Video */}
          <video
            src={activeVideo}
            controls
            autoPlay
            className="w-full max-w-4xl rounded-xl shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default VideoSlider;