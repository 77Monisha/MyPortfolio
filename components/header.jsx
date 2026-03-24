import { Button } from "./ui/button";

const Header = async () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between  px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      <div>Monisha</div>
      <ul className="flex flex-row gap-10 cursor-pointer">
        <div>Projects</div>
        <div>Experience</div>
        <div>Skills</div>
        <div>Contact</div>
      </ul>
      <Button className="bg-linear-to-br from-stone-100 via-stone-300 to-stone-500 font-semibold">
        Download resume
      </Button>
    </nav>
  );
};

export default Header;
