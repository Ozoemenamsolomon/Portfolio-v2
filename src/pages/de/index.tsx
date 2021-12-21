import React from "react"

export interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = ({}) => {
  return (
    <div>
      <div className="modal">
        <img alt="" src="#" className="modal-img" />
        <p className="modal-text"></p>
      </div>
      <div className="main main-de">
        <section className="home" id="home_de">
          <div className="hello">
            <h1>
              Hallo,
              <br />
              ich bin Solomon.
            </h1>
            <h3>Frontend-Entwickler</h3>
            <a href="#work_de">Meine Projekte</a>
            {/* <!-- <input type="button" value="Check my works"> --> */}
          </div>
          <div className="home-img">
            <img src="./Images/me.png" alt="" />
          </div>
        </section>
        <section className="about" id="about_de">
          <header>
            <h1>Über Mich</h1>
          </header>
          <div className="about-content">
            <div className="about-text">
              <p>
                Ich bin ein 22-jähriger Frontend-Entwickler mit einem
                freiberuflichen Hintergrund in Grafikdesign und studiere derzeit
                Informatik an der Universität Siegen.
                <br />
                Mit einer Kombination aus Grafikdesign und Softwareentwicklung
                suche ich nach kreativen Wegen, um effiziente Codes zu
                schreiben, ohne dabei Kompromisse bei der Ästhetik meiner
                Projekte einzugehen.
                <br />
                Ich interessiere mich sehr für das Spektrum der
                Softwareentwicklung und bin sehr offen für das Erlernen weiterer
                Technologien mit dem ultimativen Ziel, ein Full-Stack-Entwickler
                zu werden.
                <br />
                Sie können mich gerne erreichen, indem Sie das unten stehende
                Kontaktformular nutzen oder
                <a href="mailto:ozoemenamsolomon@yahoo.com">hier</a> klicken.
              </p>
            </div>
            <div className="about-software">
              <h3>Softwares</h3>
              <div className="software-images">
                <img src="./Images/Adobe_XD.png" alt="" />
                <img src="./Images/MS_Powerpoint.png" alt="" />
                <img src="./Images/Adobe_Photoshop.png" alt="" />
                <img src="./Images/MS_Excel.png" alt="" />
                <img src="./Images/MS_Word.png" alt="" />
                <img src="./Images/MS_Access.png" alt="" />
                <img src="./Images/Adobe_Illustrator.png" alt="" />
              </div>
            </div>
            <div className="about-devtools">
              <h3>Devtools</h3>
              <div className="devtools-images">
                <img src="./Images/html.png" alt="" />
                <img src="./Images/CSS.png" alt="" />
                <img src="./Images/JS.png" alt="" />
              </div>
            </div>
            <div className="about-language">
              <h3>Sprachen</h3>
              <ul>
                <li>Deutsch</li>
                <li>Englisch</li>
                <li>Igbo</li>
                <li>Yoruba</li>
              </ul>
            </div>
            <div className="about-softskills">
              <h3>Softskills</h3>
              <ul>
                <li>Aufmerksamkeit zu Detail</li>
                <li>Teamplayer</li>
                <li>Zielorientiert</li>
                <li>Lernbereitschaft</li>
              </ul>
            </div>
            <div className="about-img">
              <img src="./Images/AboutMe_Char.png" alt="" />
            </div>
          </div>
        </section>
        <section className="work" id="work_de">
          <header>
            <h1>Projekte</h1>
          </header>
          <div className="work-content">
            <div className="work-text">
              <p>
                Einige meiner schönsten Projekte.
                <br />
                Um mehr über mein Entwiklungsprozess am Beispiel meiner Website
                zu erfahren, klicken Sie bitte auf die Schaltfläche unten.
              </p>
              <a href="#process_de">Entwiklungsprozess</a>
              {/* <!-- <input type="button" value="Design Process"> --> */}
            </div>
            <div className="work1" data-description="coming soon">
              <div className="card-hover">
                <a
                  href="#livedemo"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Live-Demo"
                >
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </a>
                <a
                  href="#github"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Code ansehen"
                >
                  <i className="fa fa-code" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div
              className="work2"
              data-description="Diese Todo-App wurde von mir unter Anleitung von Travesey  vom Youtube Kanal Travesey Media enwickelt"
            >
              <div className="card-hover">
                <a
                  href="https://ozoemenamsolomon.github.io/creative-agency/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Live-Demo"
                >
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/Ozoemenamsolomon/creative-agency"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Code ansehen"
                >
                  <i className="fa fa-code" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div
              className="work3"
              data-description="Diese Portfolio wurde spontan von mir für einen Freund von mir enwickelt"
            >
              <div className="card-hover">
                <a
                  href="https://ozoemenamsolomon.github.io/Ola-portfolio/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Live-Demo"
                >
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/Ozoemenamsolomon/Ola-portfolio"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Code ansehen"
                >
                  <i className="fa fa-code" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div
              className="work4"
              data-description="Diese Todo-App wurde von mir unter Anleitung von Ed vom Youtube Kanal Dev Ed enwickelt"
            >
              <div className="card-hover">
                <a
                  href="https://ozoemenamsolomon.github.io/Todo-App/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Live-Demo"
                >
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/Ozoemenamsolomon/Todo-App"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Code ansehen"
                >
                  <i className="fa fa-code" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="process" id="process_de">
          <header>
            <h1>Typischer Design Prozess</h1>
          </header>
          <div className="process-content">
            <div className="process-text">
              <p>
                Der Plan, meinen Prozess zu dokumentieren, wurde zunächst nicht
                berücksichtigt. Ich war jedoch inspiriert, diesen Prozess in
                dieses Projekt einzubeziehen, und zwar durch die
                Social-Media-Challenge "How it started vs. How it's going". Die
                folgenden Bilder sollen Ihnen also einen Einblick geben, wie das
                Projekt begann, und die Tatsache, dass Sie dies hier lesen, ist
                ein Ergebnis dessen, wie es läuft. "Wie es läuft", weil ich
                glaube, dass es noch eine Menge Raum für Verbesserungen gibt.
              </p>
            </div>
            <div className="process1" data-description="">
              <div className="card-hover"></div>
            </div>
            <div className="process2" data-description="">
              <div className="card-hover"></div>
            </div>
            <div className="process3" data-description="">
              <div className="card-hover"></div>
            </div>
          </div>
        </section>
        <section className="contact" id="contact_de">
          <header>
            <h1>Kontakt</h1>
          </header>
          <div className="contact-content">
            <div className="form-findme">
              <div className="contact-form">
                <form method="POST" data-netlify="true">
                  <div className="form1">
                    <input
                      type="text"
                      name="Name"
                      autoComplete="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="E-mail"
                      required
                    />
                    <input
                      type="text"
                      name="Subject"
                      required
                      placeholder="Betreff"
                    />
                    <div
                      className="recaptcha_de"
                      data-netlify-recaptcha="true"
                    ></div>
                  </div>
                  <div className="form2">
                    <input
                      type="text"
                      name="Company"
                      placeholder="Firma (optional)"
                    />
                    <textarea
                      name="Message"
                      required
                      placeholder="Nachricht..."
                    ></textarea>
                    <button type="submit">schicken</button>
                    {/* <!-- <input  value=""> --> */}
                  </div>
                </form>
              </div>
              <div className="contact-findme">
                <p>Hier finden Sie mich:</p>
                <div className="socials">
                  <a
                    href="https://www.linkedin.com/in/solomon-obinna-ozoemenam-6a3440155/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <img src="./Images/LinkedIn.png" alt="" />
                  </a>
                  <a
                    href="https://www.xing.com/profile/SolomonObinna_Ozoemenam/cv"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <img src="./Images/Xing.png" alt="" />
                  </a>
                  <a
                    href="https://github.com/Ozoemenamsolomon"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <img src="./Images/github.png" alt="" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCpoLzjknNT6PNbJ9yX4RUng"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <img src="./Images/YouTube.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-img">
              <img src="./Images/ContactMe_Char.png" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default IndexPage
