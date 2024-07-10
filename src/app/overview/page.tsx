import { AnimatedCanvas } from "../_components/animated_canvas/animated_canvas";
import "./overview.css";


export default function Overview() {
  return (
    <>
      <AnimatedCanvas></AnimatedCanvas>
      <h1 className="max_header w-full">Driven by Data, fueled by creativity</h1>
      <div className="base_content">
        <div className="bg-gradient-to-b from-blue-600 to-violet-600 pb-20">
          <h3 className="max_subheader w-full">Turning ideas into impactful solutions</h3>
        </div>
        <div className="bg-gradient-to-b from-violet-600 h-1"></div>
        <div>
          <div className="flex md:flex-row md:flex-nowrap flex-col justify-around">
            <p className="mx-auto md:mx-0 md:w-2/5 w-full font-extralight md:py-10 px-5 pt-10 text-xs md:text-base text-justify"><strong className="text-2xl">I</strong> am Tjark Prokoph, a dedicated software engineer with a profound expertise in computer science and data science. My interests include software engineering and data science, especially machine learning. I am a result-oriented professional with a drive for continuous learning and personal development. With master&apos;s degrees in both Computer Science and Data Science, my career has spanned roles at notable companies like Arvato Systems and Mercedes-Benz Tech Innovation. I&apos;ve been involved in the design, development, and deployment of complex systems using advanced technologies.</p>
            <p className="mx-auto md:mx-0 md:w-2/5 w-full font-extralight md:py-10 px-5 pt-10 pb-10 text-xs md:text-base text-justify"><strong className="text-2xl">M</strong>y professional journey is characterized by a commitment to innovation and excellence. I&apos;ve applied my skills in machine learning, distributed computing, and cloud integration to solve challenging problems and improve system efficiency. My passion for technology extends beyond my work, as I continuously seek to expand my knowledge and stay at the forefront of industry advancements. Through my diverse experience and technical proficiency, I aim to contribute significantly to the fields of software engineering and data science.</p>
          </div>
        </div>
        <div className="bg-gradient-to-t from-violet-600 h-1"></div>
        <div className="bg-gradient-to-t from-blue-600 to-violet-600 py-20">
          <div className="flex flex-row justify-center items-center py-20">
            <div className="card card-2-4 c-me" id="me-card">
              <img src="/icons/me.png" alt="tjark prokph" />
            </div>
            <div className="flex flex-col">
              <div className="card card-4-2 p-4 c-mb" id="title-card">
                <div className="card-header">
                    <span className="card-title">Tjark Prokoph</span>
                    <span className="text-pill">👨🏻‍💻 Software Engineer</span>
                </div>
                <div className="card-content">
                    <span>🎓 M.Sc. Computer Science</span>
                    <span>⚙️ M.Sc. Data Science</span>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  <a href="https://github.com/tjarkpr" className="card card-center card-1-1 c-mb">
                    <img src="/icons/github.png" alt="github icon" />
                  </a>
                  <a href="https://linkedin.com/in/tjark-prokoph" className="card card-center card-1-1">
                    <img src="/icons/linkedin.png" alt="linkedin icon" />
                  </a>
                </div>
                <div>
                  <a href="https://medium.com/@tjark.prokoph" className="card card-center card-1-1 c-ms c-mb">
                    <img src="/icons/medium.png" alt="medium icon" />
                  </a>
                  <a href="https://stackoverflow.com/users/22791124/tjark-prokoph" className="card card-center card-1-1 c-ms">
                    <img src="/icons/stackoverflow.png" alt="stackoverflow icon" />
                  </a>
                </div>
                <div className="card card-center card-2-2 c-ms p-4" id="cv-card">
                  <p className="uppercase font-light mb-2">Scan for my CV</p>
                  <img src="/icons/cvqrcode.svg" alt="qr code" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};