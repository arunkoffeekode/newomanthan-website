"use client";
import Image from "next/image";
import landscapeImg from "@/img/landscape.jpg";

const CinematicBanner = () => {
  return (
    <>
      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1)    translate(0px,   0px);  }
          25%  { transform: scale(1.08) translate(-15px, -8px); }
          50%  { transform: scale(1.12) translate(10px, -12px); }
          75%  { transform: scale(1.08) translate(-8px,   5px); }
          100% { transform: scale(1)    translate(0px,   0px);  }
        }

        @keyframes fadeInBanner {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .ken-burns-img {
          animation: kenBurns 18s ease-in-out infinite;
          will-change: transform;
          transform-origin: center center;
        }

        .cinematic-banner {
          animation: fadeInBanner 1.5s ease forwards;
        }
      `}</style>

      <div
        className="
          cinematic-banner
          relative w-full overflow-hidden
          h-55
          sm:h-75
          md:h-95
          lg:h-120
          xl:h-140
          2xl:h-150
        "
      >
        {/* Animated image */}
        <div className="ken-burns-img absolute inset-0 w-full h-full scale-110">
          <Image
            src={landscapeImg}
            alt="Cinematic landscape"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Vignette — edges dark, center clear */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.25) 100%)",
          }}
        />

        {/* Top & bottom letterbox fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.15) 100%)",
          }}
        />
      </div>
    </>
  );
};

export default CinematicBanner;
