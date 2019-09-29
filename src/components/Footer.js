/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useDeck } from 'gatsby-theme-mdx-deck'

export default ({ title }) => {
  const { index, length } = useDeck()

  return (
    <footer>
      <div
        sx={{
          variant: 'footNotes',
          left: 0
        }}
      >
        { index } / { length }
      </div>

      <div
        sx={{
          variant: 'footNotes',
          right: 0
        }}
      >
        { title }
      </div>
    </footer>
  )
}