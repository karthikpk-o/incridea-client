import TeamCard from "~/components/aboutUs/teamCard";
import { CONSTANT } from "~/constants";

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-8 bg-transparent pb-10 pt-12">
      <div className="px-4">
        <h1
          className={`text-center font-life-craft text-5xl text-white lg:text-7xl`}
        >
          The Core Team
        </h1>
        <p className="mt-5 text-center text-2xl font-bold text-white lg:text-3xl">
          Meet the people behind the scenes.
        </p>
      </div>
      <div className="mx-auto flex max-w-[80rem] flex-wrap justify-center gap-10 px-2">
        {Object.entries(CONSTANT.CORE_MEMBERS).map(([name, details], idx) => (
          <TeamCard
            key={idx}
            name={name}
            image={details.image}
            committee={details.committee}
            designation={details.designation}
            phone={`tel:${details.phone}`}
            email={`mailto:${details.email}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
