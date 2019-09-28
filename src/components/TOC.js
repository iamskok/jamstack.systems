/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'

const TOC = ({ children, opened }) => (
  <section sx={{
    position: 'absolute',
    overflowY: 'scroll',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    px: 2,
    py: 2,
    zIndex: 1000,
    transition: 'all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: opened ? 'translate3D(0, 0, 0)' : 'translate3D(-100vw, 0, 0)',
    backgroundColor: 'background'
  }}>
    {children}
  </section>
)

export default ({ opened }) => (
  <TOC opened={ opened }>
    <Styled.h1>
      <span role="img" aria-label="book">📖</span> Table of content
    </Styled.h1>

    <Styled.ul>
      <Styled.li>
        The Challenges of Modern Web Development
        <span
          role="img"
          aria-label="Drops"
        >
          {' '}
          💦
        </span>
      </Styled.li>

      <Styled.ul>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/2"
          >
            Monolothic Architectures
          </Styled.a>
          <span
            role="img"
            aria-label="Zombie"
          >
            {' '}
            🧟‍♂️
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/3"
          >
            GIF of Pain
          </Styled.a>
          <span
            role="img"
            aria-label="Sick"
          >
            {' '}
            🤕
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/4"
          >
            Limited Flexability
          </Styled.a>
          <span
            role="img"
            aria-label="SOS"
          >
            {' '}
            🆘
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/5"
          >
            Performance Concerns
          </Styled.a>
          <span
            role="img"
            aria-label="Warning"
          >
            {' '}
            ☢️
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/6"
          >
            Scaling Challenges
          </Styled.a>
          <span
            role="img"
            aria-label="Caution"
          >
            {' '}
            ⚠️
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/7"
          >
            Security Woes
          </Styled.a>
          <span
            role="img"
            aria-label="Detective"
          >
            {' '}
            🕵️‍♀️
          </span>
        </Styled.li>
      </Styled.ul>

      <Styled.li>
        WTF is JAM?
        <span
          role="img"
          aria-label="OMG Cat"
        >
          { ' ' }
          🙀
        </span>
      </Styled.li>

      <Styled.ul>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/8"
          >
            What’s in a Name
          </Styled.a>
          <span
            role="img"
            aria-label="Hmmm"
          >
            {' '}
            🤨
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/9"
          >
            Ecosystem
          </Styled.a>
          <span
            role="img"
            aria-label="Globe"
          >
            {' '}
            🌐
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/10"
          >
            Stack comparison
          </Styled.a>
          <span
            role="img"
            aria-label="Chart"
          >
            {' '}
            📊
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/11"
          >
            New architectural constraints
          </Styled.a>
          <span
            role="img"
            aria-label="Mountain"
          >
            {' '}
            🏔
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/12"
          >
           JavaScript
          </Styled.a>
          <span
            role="img"
            aria-label="Yellow Heart"
          >
            {' '}
            💛
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/13"
          >
           APIs
          </Styled.a>
          <span
            role="img"
            aria-label="Cog"
          >
            {' '}
            ⚙️
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/14"
          >
           Markup
          </Styled.a>
          <span
            role="img"
            aria-label="Notes"
          >
            {' '}
            📝
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/15"
          >
           Serverless
          </Styled.a>
          <span
            role="img"
            aria-label="Plug"
          >
            {' '}
            🔌
          </span>
        </Styled.li>
      </Styled.ul>

      <Styled.li>
        Advantages of the JAMstack
        <span
          role="img"
          aria-label="Muscles"
        >
          {' '}
          💪
        </span>
      </Styled.li>

      <Styled.ul>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/16"
          >
            Simplifying Systems and Thinking
          </Styled.a>
          <span
            role="img"
            aria-label="Brain"
          >
            {' '}
            🧠
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/17"
          >
            Costs
          </Styled.a>
          <span
            role="img"
            aria-label="Money"
          >
            {' '}
            💰
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/18"
          >
            Scale
          </Styled.a>
          <span
            role="img"
            aria-label="Plant"
          >
            {' '}
            🌱
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/19"
          >
            Performance
          </Styled.a>
          <span
            role="img"
            aria-label="Light"
          >
            {' '}
            ⚡️
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/20"
          >
            Request Life Cycle
          </Styled.a>
          <span
            role="img"
            aria-label="Recycle"
          >
            {' '}
            ♻️
          </span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/21"
          >
            Security
          </Styled.a>
          <span
            role="img"
            aria-label="Lock"
          >
            {' '}
            🔐
          </span>
        </Styled.li>
      </Styled.ul>

      <Styled.li>
        <Styled.a
          as={ Link }
          to="/22"
        >
          Summary
          </Styled.a>
        <span
          role="img"
          aria-label="Nerd"
        >
          {' '}
          🤓
          </span>
      </Styled.li>

      <Styled.li>
        <Styled.a
          as={ Link }
          to="/23"
        >
          Resources
          </Styled.a>
        <span
          role="img"
          aria-label="Books"
        >
          {' '}
          📚
          </span>
      </Styled.li>
    </Styled.ul>
  </TOC>
)

// * **The Challenges of Modern Web Development** 💦
//   * [Monolothic Architectures](/3) 🧟‍♂️
//   * [GIF of Pain](/4) 🤕
//   * [Limited Flexability](/5) 🆘
//   * [Performance Concerns](/6) ☢️
//   * [Scaling Challenges](/7) ⚠️
//   * [Security Woes](/8) 🕵️‍♀️
// * **WTF is JAM?** 🙀
//   * [What’s in a Name](/9) 🤨
//   * [Ecosystem](/10) 🌐
//   * [Stack comparison](/11) 📊
//   * [New architectural constraints](/12) 🏔
//   * [JavaScript](/13) 💛
//   * [APIs](/14) ⚙️
//   * [Markup](/15) 📝
//   * [Serverless](/16) 
// * **Advantages of the JAMstack** 💪
//   * [Simplifying Systems and Thinking](/17) 🧠
//   * [Costs](/18) 💰
//   * [Scale](/19) 🌱
//   * [Performance](/20) ⚡️
//   * [Request Life Cycle](/21) ♻️
//   * [Security](/22) 🔐
// * [Summary](/23) 🤓
// * [Resources](/24) 📚