import { useRoute, Link, LinkProps } from "wouter";

export default function NavLink(props: LinkProps) {
  const [isActive] = useRoute(props.href as string);

  // className="nav-link active"
  return (
    <Link {...props}>
      <a className={`nav-link ${isActive ? "active" : ""}`}>{props.children}</a>
    </Link>
  );
}
