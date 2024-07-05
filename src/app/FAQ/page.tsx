import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restore | FAQs",
  description: "Faqs",
  // other metadata
};

const Faq = () => {
  return (
    <>
      <Breadcrumb
        pageName="FAQs"
        description="Vous trouverz ici les questions les plus courantes pour aider à trouver vos documents rapidement et facilement."
      />
      <FAQ />
    </>
  );
};

export default Faq;
