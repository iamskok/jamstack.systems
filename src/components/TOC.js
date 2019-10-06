/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'

const TOC = ({ children, opened }) => (
  <section
    sx={{
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
      p: 0,
      m: 0,
      zIndex: 1000,
      transition: 'all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform: opened ? 'translate3D(0, 0, 0)' : 'translate3D(-100vw, 0, 0)',
      backgroundColor: 'background'
    }}
  >
    { children }
  </section>
)

export default ({ opened }) => (
  <TOC opened={ opened }>
    <Styled.h1 as="h2">
      <span role="img" aria-label="book">📖</span>&nbsp;Table of content
    </Styled.h1>

    <Styled.ul
      sx={{
        listStyle: 'none'
      }}
    >
      <Styled.li
        sx={{
          fontWeight: 'display',
          fontSize: 3
        }}
      >
        The Challenges of Modern Web Development
        <span
          role="img"
          aria-label="Drops"
        >&nbsp;💦</span>
      </Styled.li>

      <Styled.ul
        sx={{
          listStyle: 'none'
        }}
      >
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
          >&nbsp;🧟‍♂️</span>
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
          >&nbsp;🤕</span>
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
          >&nbsp;🆘</span>
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
            aria-label="Turtle"
          >&nbsp;🐢</span>
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
          >&nbsp;⚠️</span>
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
          >&nbsp;🕵️‍♀️</span>
        </Styled.li>
      </Styled.ul>

      <Styled.li
        sx={{
          fontWeight: 'display',
          fontSize: 3
        }}
      >
        WTF is JAM?
        <span
          role="img"
          aria-label="OMG Cat"
        >&nbsp;🙀</span>
      </Styled.li>

      <Styled.ul
        sx={{
          listStyle: 'none'
        }}
      >
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
          >&nbsp;🤨</span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/9"
          >
            Stacks comparison
          </Styled.a>
          <span
            role="img"
            aria-label="Chart"
          >&nbsp;📊</span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/10"
          >
            New architectural constraints
          </Styled.a>
          <span
            role="img"
            aria-label="Mountain"
          >&nbsp;🏔</span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/11"
          >
           JavaScript
          </Styled.a>
          <span
            role="img"
            aria-label="Yellow Heart"
          >&nbsp;💛</span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/12"
          >
           APIs
          </Styled.a>
          <span
            role="img"
            aria-label="Cog"
          >&nbsp;⚙️</span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/13"
          >
           Markup
          </Styled.a>
          <span
            role="img"
            aria-label="Notes"
          >&nbsp;📝</span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/14"
          >
           Serverless
          </Styled.a>
          <span
            role="img"
            aria-label="Plug"
          >&nbsp;🔌</span>
        </Styled.li>
        <Styled.li>
          <Styled.a
            as={ Link }
            to="/15"
          >
            Ecosystem
          </Styled.a>
          <span
            role="img"
            aria-label="Globe"
          >&nbsp;🌐</span>
        </Styled.li>
      </Styled.ul>

      <Styled.li
        sx={{
          fontWeight: 'display',
          fontSize: 3
        }}
      >
        Advantages of the JAMstack
        <span
          role="img"
          aria-label="Muscles"
        >&nbsp;💪</span>
      </Styled.li>

      <Styled.ul
        sx={{
          listStyle: 'none'
        }}
      >
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
          >&nbsp;🧠</span>
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
          >&nbsp;💰</span>
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
          >&nbsp;🌱</span>
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
          >&nbsp;⚡️</span>
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
          >&nbsp;♻️</span>
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
          >&nbsp;🔐</span>
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
        >&nbsp;🤓</span>
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
        >&nbsp;📚</span>
      </Styled.li>
      
      <Styled.li>
        <Styled.a
          as={ Link }
          to="/24"
        >
          About
        </Styled.a>
        <span
          role="img"
          aria-label="Question"
        >&nbsp;❓</span>
      </Styled.li>

      <Styled.li>
        <Styled.a href="https://github.com/iamskok/jamstack.systems">
          GitHub
        </Styled.a>
        <span
            role="img"
            aria-label="Source code"
          >&nbsp;👨‍💻</span>
      </Styled.li>
    </Styled.ul>
  </TOC>
)
