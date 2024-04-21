import Nav from "../components/Nav";
import { BsEnvelopeFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="mb-10">
      <div className="md:flex">
        <h1 className="text-2xl pb-3 md:text-5xl font-bold hover:bg-gradient-to-r from-indigo-500  to-pink-500 bg-clip-text hover:text-transparent hover:duration-1000">
          <a href="/">Neej Laureta</a>
        </h1>
        <div className="ml-auto flex space-x-9">
          <Nav />
        </div>
      </div>
      <p className="text-sm md:text-base mt-3">👩‍💻 Virtual Assistant | 👩‍⚕️ Pharmacist | 👩‍🏫 Teacher</p>
      <div className="text-sm flex space-x-2">
        <a href="mailto:neejlaureta@gmail.com">
          <BsEnvelopeFill className="size-5 text-gray-600" />
        </a>
        <p>neejlaureta@gmail.com</p>
      </div>
    </div>
  );
};

export default Header;
