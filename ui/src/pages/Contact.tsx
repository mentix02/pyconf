import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "PyConf | Contact";
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-4">
        <h1>contact</h1>
        <p>there isn't a reason to contact us but regardless...</p>
        <p>
          name: Manan <br />
          twitter:{" "}
          <a target="_blank" rel="nofollow" href="https://twitter.com/mentix02">
            @mentix02
          </a>
          <br />
          email: manan.yadav02[at]gmail.com <br />
        </p>
      </div>
    </div>
  );
}
