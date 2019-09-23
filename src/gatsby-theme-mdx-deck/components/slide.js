/** @jsx jsx */
import { jsx } from 'theme-ui'
import Context from 'gatsby-theme-mdx-deck/src/context'
import useDeck from 'gatsby-theme-mdx-deck/src/hooks/use-deck'
import useSwipe from 'gatsby-theme-mdx-deck/src/hooks/use-swipe'
import { modes } from 'gatsby-theme-mdx-deck/src/constants'

export const Slide = ({ slide, index, preview, ...props }) => {
  const outer = useDeck()
  const swipeProps = useSwipe()
  const context = {
    ...outer,
    index,
    preview,
  }

  return (
    <Context.Provider value={context}>
      <div
        {...(!preview ? swipeProps : {})}
        sx={{
          boxSizing: 'border-box',
          width: '100%',
          height: context.mode === modes.print ? '100vh' : '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          color: 'text',
          bg: 'background',
          transition: 'background 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          variant: 'styles.Slide',
        }}>
        {slide}
      </div>
    </Context.Provider>
  )
}

export default Slide