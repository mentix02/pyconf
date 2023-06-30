import NavLink from "./NavLink.tsx";

export default function Navigation() {
  return (
    <nav className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink href="/">home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/r">random</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/about">about</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/contact">contact</NavLink>
          </li>
        </ul>
      </header>
    </nav>
  );
}
