import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import Section from "../components/utils/Section";
import Tweets from "../components/tweets/Tweets";
import DefaultLayout from "../Wrapper/DefaultWrapper";

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Features />
      <Section
        mt="12"
        title="Hustle, Skill Up and Get Hired."
        subtitle="Make things happen"
        text="Hustle in life and Skilled Up. Make things happen and get hired by top companies."
      />
      <Tweets />
    </DefaultLayout>
  );
};

export default Home;
