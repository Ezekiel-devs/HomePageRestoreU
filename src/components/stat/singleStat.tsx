import { Stat } from "@/types/stat";

const SingleStat = ({ stat }: { stat: Stat }) => {
  const { icon, designation, paragraph } = stat;

  return (
    <div className="w-full text-center items-center">
      <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">{icon}</div>
        <h3 className=" text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
            {designation}
        </h3>
        <p className="border-b border-body-color border-opacity-10 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleStat;
