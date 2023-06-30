import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "PyConf | About";
  }, []);

  return (
    <>
      <h1>about</h1>
      <p>this is an about page, fkn idiot</p>
    </>
  );
}
