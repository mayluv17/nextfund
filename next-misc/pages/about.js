import Footer from "../components/Footer";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About metatags</title>
        <meta name="description" content="NextJs about page with header tags" />
      </Head>
      <div className="content">About</div>
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
