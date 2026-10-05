import { useState } from "react";

import v1 from "../../assets/videos/v1.mp4";
import v2 from "../../assets/videos/v2.mp4";
import v3 from "../../assets/videos/v3.mp4";
import v4 from "../../assets/videos/v4.mp4";

const DemoVideo = () => {
  const videos = [v1, v2, v3, v4];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="relative bg-slate-950 text-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <video
          key={videos[currentVideo]}
          src={videos[currentVideo]}
          autoPlay
          muted
          playsInline
          controls
          onEnded={handleVideoEnd}
          className="w-full h-[250px] sm:h-[320px] md:h-[400px] object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};

export default DemoVideo;
