import { useEffect, useState } from "react";
import gsap from "gsap";
import { type NextPage } from "next";
import Clock from "~/components/galleryComponents/clock";
import Inc22 from "~/components/galleryComponents/scenes/Inc22";
import Inc23 from "~/components/galleryComponents/scenes/Inc23";
import Inc24 from "~/components/galleryComponents/scenes/Inc24";
import Inc25 from "~/components/galleryComponents/scenes/Inc25";
import {
  PiClockClockwiseBold,
  PiClockCounterClockwiseBold,
} from "react-icons/pi";

export const angleToScenes: { [key: number]: number[] } = {
  0: [Math.PI],
  1: [(3 * Math.PI) / 2, -Math.PI / 2],
  2: [2 * Math.PI, 0],
  3: [Math.PI / 2],
};

const Gallery: NextPage = () => {
  const [activeYear, setActiveYear] = useState<number>(0);
  const [changedYear, setChangedYear] = useState<number>(0);

  // const backgroundImages: string[] = [
  //   "/assets/galleryBg/inc22-gallerybg.jpg",
  //   "/assets/galleryBg/inc23-gallerybg.jpg",
  //   "/assets/galleryBg/inc24-gallerybg.jpg",
  // ];

  const images22: string[] = [
    "https://cxyw63cg3t.ufs.sh/f/rcOPZjbdsKD64Sgn2E7gjUQEnHRB6acYe3z07wmr1FZphyNP",
    "https://cxyw63cg3t.ufs.sh/f/rcOPZjbdsKD6dNwH6gQNk6Mso8WuK2jgRcmrVZdx5zTyB4lS",
    "https://cxyw63cg3t.ufs.sh/f/rcOPZjbdsKD6R0y97VshMbdqu9Dv5sClAGzH4NFEa8xgrwZW",
    "https://cxyw63cg3t.ufs.sh/f/rcOPZjbdsKD6oXcQEjTAjvGsfIbWS4wiz2DCtNxYrhE6q3UR",
    "https://cxyw63cg3t.ufs.sh/f/rcOPZjbdsKD63kfzz9uyGThZ7z4KLvCYJEoXsRPUlefFnuwk",
    "https://cxyw63cg3t.ufs.sh/f/rcOPZjbdsKD656UKEcozf8HJFAlsQ20KwyZNUIoLmOVecu4g",
    "assets/galleryBg/inc24-gallerybg.jpg",
    "assets/galleryBg/inc23-gallerybg.jpg",
    "assets/galleryBg/inc22-gallerybg.jpg",
  ];

  const handleClockClick = (angle: number) => {
    const year = Object.entries(angleToScenes).find(([key, value]) =>
      value.includes(angle),
    );
    setActiveYear(Number(year?.[0]) ?? 0);
  };

  const years = [2022, 2023, 2024, 2025] as const;
  const imageCounts = [21, 12, 26, 0] as const;

  const generateImagePaths = (
    year: number,
    count: number,
    extension: string,
  ): string[] => {
    return Array.from(
      { length: count },
      (_, i) => `gallery/${year}/${i + 1}.${extension}`,
    );
  };
  const img2022 = generateImagePaths(years[0], imageCounts[0], "jpg");
  const img2023 = generateImagePaths(years[1], imageCounts[1], "jpg");
  const img2024 = generateImagePaths(years[2], imageCounts[2], "jpg");

  const renderActiveYearComponent = (): JSX.Element | null => {
    const components = [
      <Inc22 imgArr={images22} key={0} />,
      <Inc23 imgArr={images22} key={1} />,
      <Inc24 imgArr={images22} key={2} />,
      <Inc25 key={3} />,
    ];
    return components[activeYear] ?? null;
  };

  useEffect(() => {
    gsap.fromTo(
      "#active-year-content",
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
    );

    return () => {
      gsap.to("#active-year-content", { opacity: 0, duration: 0.6 });
    };
  }, [activeYear]);

  const handleYearChange = (direction: number) => {
    const newYear = (activeYear + direction + years.length) % years.length;
    setActiveYear(newYear);
    setChangedYear(newYear);
  };

  return (
    <>
      <section className="fixed flex h-screen w-full flex-col overflow-hidden bg-transparent">
        <div
          className="relative h-screen w-full z-0 overflow-hidden"
          // style={{
          //   backgroundImage: `url(${backgroundImages[activeYear]})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          {/* Clock */}
          <div className="absolute transform h-auto translate-y-10 z-20 top-20 md:top-28 left-[50%] -translate-x-1/2 flex">
            <p className="absolute left-[50%] font-life-craft -translate-x-1/2 -translate-y-full text-white sm:text-5xl text-3xl w-screen text-center tracking-widest">
              INCRIDEA &nbsp;{years[activeYear]}
            </p>
            <div
              className={`absolute -translate-x-[40px] self-center cursor-pointer bg-[#23854b] border-2 border-[#faae30] rounded-full p-1 ${activeYear === 0 ? "hidden" : ""}`}
              onClick={() => handleYearChange(-1)}
            >
              <PiClockCounterClockwiseBold
                fill="#ebe5e3"
                className="sm:size-8 size-7"
              />
            </div>
            <Clock onClockClick={handleClockClick} year={changedYear} />
            <div
              className={`absolute sm:translate-x-[230px] translate-x-[200px] self-center cursor-pointer bg-[#23854b] border-2 border-[#faae30] rounded-full p-1 ${activeYear === 3 ? "hidden" : ""}`}
              onClick={() => handleYearChange(1)}
            >
              <PiClockClockwiseBold
                fill="#ebe5e3"
                className="sm:size-8 size-7"
              />
            </div>
          </div>

          <div id="active-year-content" className="relative h-full w-full z-10">
            {renderActiveYearComponent()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
