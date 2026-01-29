import Layout from "@/components/Layout";
import CurriculumHero from "@/components/curriculum/CurriculumHero";
import CurriculumOverview from "@/components/curriculum/CurriculumOverview";
import CurriculumTabs from "@/components/curriculum/CurriculumTabs";

const Curriculum = () => {
  return (
    <Layout>
      <CurriculumHero />
      <CurriculumOverview />
      <CurriculumTabs />
    </Layout>
  );
};

export default Curriculum;
