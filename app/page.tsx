import Head from "next/head"
import './globals.css'
export default function Myresume () {
  return(
    <div>
      <Head>
      <title>My Resume</title>
      <meta name="description" content="A simple one-page resume" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <a className="logo">MY RESUME</a>
        <nav className="navbar">
          <a href="/about">ABOUT</a>
          <a href="/contact">CONTACT</a>
          <a href="feedback">FEEDBACK</a>
          
        </nav>
      </header>
      <div className="information">
           <h3>BASIC INFORMATION :</h3>
           <p>
           I&apos;m <b>AYESHA.</b><br />
           I Professionaly want to become a <b>Web Developer</b> or a <b>Software Engineer.</b><br />
           I am a student of HSC PART I.
           </p>
      </div>
      <div className="contact">
        <h3>CONTACT INFORMATION :</h3>
        <p>
          E-mail : ayeshaafarhan56@email.com <br />
          Phone Number : 03132977363 <br />
          GitHub : ayeshaexe <br />
          Discord : ayeshaba56
        </p>
      </div>
      <div className="skills">
        <h3>SKILLS :</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>TYPESCRIPT</li>
          <li>Currently learning NEXT.JS</li>
        </ul>
      </div>
      <div className="education">
        <h3>EDUCATION :</h3>
        <p>
          Successfully completed my Matriculation, and now pursuing my studies in College. <br />
          while being enrolled in <b>GENAI Initaitive</b> Managed by <b>&quot; Sir Kamran Khan Tasoori &quot;</b>
        </p>
      </div>
      <footer className="footer">
        <h3>MY RESUME</h3>
        <p>&copy; 2024 MY RESUME.All rights reserved</p>
        <p>Made with &#9829;</p>
      </footer>
    </div>
  )
};