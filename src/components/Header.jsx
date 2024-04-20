import Nav from "../components/Nav";

const Header = () => {
  return (
    <div className="mb-10">
      <div className="md:flex">
        <h1 className="text-2xl pb-3 md:text-5xl font-bold hover:bg-gradient-to-r from-indigo-500  to-pink-500 bg-clip-text hover:text-transparent hover:duration-1000">
          <a href="/">Neej Laureta</a>
        </h1>
        <div className="ml-auto">
          <Nav />
        </div>
      </div>
      <p className="text-sm md:text-base mt-3">
        👩‍💻 Virtual Assistant | 👩‍⚕️ Pharmacist | 👩‍🏫 Teacher
      </p>
    </div>
  );
};

export default Header;
