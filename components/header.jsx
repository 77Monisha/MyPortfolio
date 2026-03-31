import { Button } from "./ui/button";

const Header = async () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between  px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      <div>Monisha</div>
      <ul className="flex flex-row gap-10">
        <a href="#experience" className="hover:text-amber-400 transition">
          Experience
        </a>
        <a href="#projects" className="hover:text-amber-400 transition">
          Projects
        </a>
        <a href="#skills" className="hover:text-amber-400 transition">
          Skills
        </a>
        <a href="#contact" className="hover:text-amber-400 transition">
          Contact
        </a>
      </ul>
      <Button className="bg-linear-to-br from-stone-100 via-stone-300 to-stone-500 font-semibold cursor-pointer">
        Download resume
      </Button>
    </nav>
  );
};

export default Header;
