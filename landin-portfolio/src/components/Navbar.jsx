import useWindowSize from "../hooks/useWindowSize";
import DesktopNav from "./subcomponents/desktop-nav";
import MobileNav from "./subcomponents/mobile-nav";

export default function NavBar() {
  const { width } = useWindowSize();

  return (
    <nav className="flex flex-row w-full items-center justify-around mt-8">
      {width > 768 ? <DesktopNav /> : <MobileNav />}
    </nav>
  );
}
