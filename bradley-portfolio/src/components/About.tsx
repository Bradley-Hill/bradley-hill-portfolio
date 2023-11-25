import "../app/styles/About.css";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            About Me
          </h2>
          <h4 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Journey towards becoming a Junior Fullstack Developer
          </h4>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Greetings! I'm Bradley Hill, and I'm thrilled to present my Next.js
            portfolio project, showcasing my tech journey from the 2021 Covid-19
            lockdown to 9 months at Ada Tech School in Nantes. Proficient in
            HTML/CSS, JavaScript, TypeScript, and frameworks like Vue/React/Next
            and Nuxt, I've expanded into PHP, Java, SQL, Python, and computer
            science fundamentals.
          </p>

          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            One highlight of my Ada Tech School experience has been working on
            collaborative projects, providing me with invaluable insights into
            teamworking in a new environment and the different professional
            methodologies. This contrasts with my earlier self-study and allows
            me the opportunity to apply my skills in new settings.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Beyond tech, you'll find me immersed in gardening and exploring
            fantasy and science-fiction books. Let's connect and discuss how I
            can bring my skills and passion to your team!
          </p>
          <h6 className="mt-2  leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">
            Feel free to explore my completed projects and don't hesitate to
            reach out through the provided contact form at the bottom of the
            page.
          </h6>
          <button
            className="CV-btn"
            onClick={() =>
              window.open("/Junior Développeur Logiciel CV - Bradley Hill.pdf")
            }
          >
            Download my CV
          </button>
        </div>
      </div>
    </section>
  );
}
