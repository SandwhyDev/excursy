import { useState } from "react";

const About = () => {
  const [content, setContent] = useState("");

  const HandleHtmlInput = (e) => {
    let html = e.target.value;
    setContent(html);
  };
  return (
    <section className="section p-10" id="about">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <textarea
        name="html_field"
        id="html_field"
        cols="30"
        rows="10"
        className="border-2"
        onChange={HandleHtmlInput}
      ></textarea>
    </section>
  );
};

export default About;
