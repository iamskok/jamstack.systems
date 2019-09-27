/** @jsx jsx */
import { useColorMode, jsx } from 'theme-ui'

const modes = [
  'system',
  'dark',
  'gray',
  'hack',
  'pink',
]

const Dot = props => (
  <svg
    viewBox='0 0 32 32'
    width='32'
    height='32'
    fill='currentcolor'
    style={{
      display: 'block',
    }}>
    <circle
      cx='16'
      cy='16'
      r='14'
      fill='none'
      stroke='currentcolor'
      strokeWidth='4'
    />
    <path
      d={`
        M 16 0
        A 16 16 0 0 0 16 32
        z
      `}
    />
  </svg>
)

export default props => {
  const [mode, setMode] = useColorMode()

  const cycleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <button
      title='Change color mode'
      sx={{
        justifySelf: 'flex-end',
        p: 1,
        border: 'none',
        borderRadius: 99999,
        color: 'primary',
        appearance: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        transition: 'box-shadow .2s ease-out, color .2s ease-out',
        zIndex: 2000,
        height: '100%',
        cursor: 'pointer',
        '&:hover, &:focus': {
          boxShadow: '0 0 0 2px'
        }
      }}
      onClick={ cycleMode }
    >
      <Dot />
    </button>
  )
}
