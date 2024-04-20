import Header from "../components/Header";
import Summary from "../components/Summary";
import ExperienceCard from "../components/ExperienceCard";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="font-poppins md:container md:mx-auto my-14 px-4">
      <Header />
      <Summary />
      <hr className="my-3" />
      <ExperienceCard />
      <hr className="my-3" />
      <Footer />
    </div>
  );
};

export default LandingPage;
