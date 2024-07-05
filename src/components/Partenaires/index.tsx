import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";



const Partenaire = () => {
  return (
    <section
      id="partenaire"
      className="py-10 md:py-20 lg:py-25"
    >
      <div className="container">
        <SectionTitle
          title="Nos Partenaires"
          paragraph="Ceux qui non seulement nous font confiance mais croient aussi en nos connaissances, notre savoir-faire, notre esprit d'équipe et notre détermination."
          center
          width="700px"
          mb="50px"
        />

        <div className="flex justify-center items-center">
          <div className="grid  gap-x-8 gap-y-10 ">
            <Image src="/images/partenaires/cmr.png" alt="image" width={150} height={150}/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partenaire;
