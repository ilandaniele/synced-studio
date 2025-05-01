const Header = () => {
    return (
      <header className="bg-neutral-900 text-yellow-400 flex justify-around items-center px-8 py-12">
        <div className="font-bold text-lg">SYNCED.</div>
        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#">CLIENTS</a>
          <a href="#">SERVICES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </nav>
        <button className="bg-yellow-400 text-black rounded-full px-6 py-4 font-bold text-sm hover:opacity-90">
          Make appointment
        </button>
      </header>
    );
  };
  
  export default Header;
  