import { h } from 'preact'
import style from './style'

const Home = () => (
  <div class={style.home}>
    <section class={style.main}>
      <h1>Hi, I'm Jordan</h1>
      <h2>I'm a full stack engineer with a UX background.</h2>

      <section class={style.section}>
        <h3>High Level Strengths</h3>
        <ul>
          <li>Learning, Always</li>
          <li>Written Communication</li>
          <li>Full Stack Developent</li>
          <li>UX/UI/Graphic Design</li>
          <li>Branding, Illustration</li>
          <li>Motion Graphics</li>
          <li>Editing, & 3D</li>
        </ul>
      </section>

      <section class={style.section}>
        <h3>Focus Areas</h3>
        <ul>
          <li>Javascript (ES7)</li>
          <li>React, React Native, Redux</li>
          <li>Node, NPM, Express</li>
          <li>PostgreSQL, MongoDB</li>
          <li>Linux System Administration</li>
        </ul>
      </section>

      <section class={style.section}>
        <h3>Experienced With</h3>
        <ul>
          <li>REST APIs, Integrations</li>
          <li>Git, Github</li>
          <li>Google Cloud Platform, Firebase</li>
          <li>Docker, Terraform, Ansible</li>
          <li>Webpack, Gulp</li>
          <li>Python, Flask</li>
          <li>Material, Ant, Semantic UI</li>
          <li>Bootstrap, Foundation</li>
          <li>CSS3, Sass</li>
          <li>HTML5, Handlebars</li>
          <li>Slack, JIRA, Trello, Basecamp</li>
          <li>Agile Methodology, Scrum</li>
          <li>Adobe Creative Cloud</li>
          <li>InVision, Sketch</li>
          <li>After Effects, Premiere, C4D</li>
        </ul>
      </section>
    </section>

    <sidebar class={style.sidebar}>
      <aside class={style.card}>
        <h3>What I'm Working On</h3>
        <ul>
          <li>
            <a href="https://github.com/jordanblakey/scorched">Scorched:</a>
            <span> Secure, Portable Notes</span>
            <span> React Native, Firebase</span>
          </li>
          <li>
            <a href="https://github.com/jordanblakey/ffront">FFront:</a>
            <span>
              {' '}
              Performant, opinionated, but friendly front-end system.
            </span>
            <span> Gulp 4 + Foundation + Travis CI.</span>
          </li>
          <li>
            <a href="https://github.com/jordanblakey/algorithms_practice">
              Algorithms Dojo:
            </a>
            <span> "Can I do that in one line?"</span>
            <span> Javascript, Python, Java, Ruby, C, Haskell...</span>
          </li>
        </ul>
      </aside>

      <aside class={style.card}>
        <h3>Online</h3>
        <ul>
          <li>
            <a href="https://github.com/jordanblakey">Github</a>
          </li>
          <li>
            <a href="https://dribbble.com/jordanblakey">Dribbble</a>
          </li>
          <li>
            <a href="https://linkedin.com/jordanblakey">Linkedin</a>
          </li>
        </ul>
      </aside>
    </sidebar>
  </div>
)

export default Home
