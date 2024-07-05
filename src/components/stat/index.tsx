import statData from "./statData";
import SectionTitle from "../Common/SectionTitle";
import SingleStat from "./singleStat";

const Stats = () => {
  return (
    <section className="relative z-10 py-10 md:py-20 lg:py-25">
      <div className="container">
        <SectionTitle
          title="RestoreU en chiffres"
          paragraph=""
          center
          mb="50px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {statData.map((stat) => (
            <SingleStat key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
