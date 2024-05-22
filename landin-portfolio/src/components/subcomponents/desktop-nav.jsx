export default function DesktopNav() {
  return (
    <>
      <div id="brand-wrapper">Ryan-Dev</div>
      <div>
        <ul className="flex flex-row gap-32 font-medium">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <button>Let&apos;s Talk</button>
      </div>
    </>
  );
}
