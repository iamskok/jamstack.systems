import React from 'react'
import { Router, globalHistory, Location } from '@reach/router'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'theme-ui'
import { Helmet } from 'react-helmet'
import get from 'lodash.get'
import merge from 'lodash.merge'
import posed, { PoseGroup } from 'react-pose';
import useKeyboard from 'gatsby-theme-mdx-deck/src/hooks/use-keyboard'
import useStorage from 'gatsby-theme-mdx-deck/src/hooks/use-storage'
import useDeck from 'gatsby-theme-mdx-deck/src/hooks/use-deck'
import Context from 'gatsby-theme-mdx-deck/src/context'
import Wrapper from 'gatsby-theme-mdx-deck/src/components/wrapper'
import Slide from 'gatsby-theme-mdx-deck/src/components/slide'
import { modes } from 'gatsby-theme-mdx-deck/src/constants'

import Presenter from 'gatsby-theme-mdx-deck/src/components/presenter'
import Overview from 'gatsby-theme-mdx-deck/src/components/overview'
import Grid from 'gatsby-theme-mdx-deck/src/components/grid'

const Keyboard = () => {
  useKeyboard()
  return false
}

const Storage = () => {
  useStorage()
  return false
}

const Print = ({ slides }) => {
  const outer = useDeck()
  const context = {
    ...outer,
    mode: modes.print,
  }

  return (
    <Context.Provider value={context}>
      {slides.map((slide, i) => (
        <Slide key={i} slide={slide} preview />
      ))}
    </Context.Provider>
  )
}

const getIndex = () => {
  const { pathname } = globalHistory.location
  const paths = pathname.split('/')
  const n = Number(paths[paths.length - 1])
  const index = isNaN(n) ? 0 : n
  return index
}

const GoogleFont = ({ theme }) => {
  if (!theme.googleFont) return false
  return (
    <Helmet>
      <link rel="stylesheet" href={theme.googleFont} />
    </Helmet>
  )
}

const mergeThemes = (...themes) =>
  themes.reduce(
    (acc, theme) =>
      typeof theme === 'function' ? theme(acc) : merge(acc, theme),
    {}
  )

const DefaultMode = ({ children }) => <React.Fragment children={children} />

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 3000, beforeChildren: 3000 },
  exit: { opacity: 0 }
})

const PosedRouter = ({ children, slug }) => (
  <Location>
    {({ location }) => {
      console.log('PosedRouter location', location)
      console.log('PosedRouter slug', slug)
      console.log('PosedRouter children', children)

      return (
        <PoseGroup>
          <RouteContainer
            key={ location.key }
            style={{
              height: '100%',
            }}
          >
            <Router
              location={ location }
              basepath={ slug }
              style={{
                height: '100%',
              }}
            >
              { children }
            </Router>
          </RouteContainer>
        </PoseGroup>
      )
    }}
  </Location>
);


export default ({
  slides = [],
  pageContext: { title, slug },
  theme = {},
  themes = [],
  ...props
}) => {
  const outer = useDeck()
  const index = getIndex()

  const head = slides.head.children

  const { components, ...mergedTheme } = mergeThemes(theme, ...themes)

  const context = {
    ...outer,
    slug,
    length: slides.length,
    index,
    steps: get(outer, `metadata.${index}.steps`),
    notes: get(outer, `metadata.${index}.notes`),
    theme: mergedTheme,
  }

  console.log('deck context', context)
  console.log('deck slides', slides)

  let Mode = DefaultMode

  switch (context.mode) {
    case modes.presenter:
      Mode = Presenter
      break
    case modes.overview:
      Mode = Overview
      break
    case modes.grid:
      Mode = Grid
      break
    default:
      break
  }

  return (
    <>
      <Helmet>
        <title>{ title }</title>
        { head }
      </Helmet>
      <GoogleFont theme={ mergedTheme } />
      <Context.Provider value={ context }>
        <ThemeProvider components={ components } theme={ mergedTheme }>
          <Global
            styles={{
              body: {
                margin: 0,
                overflow: context.mode === modes.normal ? 'hidden' : null,
              },
            }}
          />
          <Keyboard />
          <Storage />
          <Wrapper>
            <Mode slides={ slides }>
              <PosedRouter slug={ slug }>
                <Slide index={0} path="/" slide={slides[0]} />
                {slides.map((slide, i) => (
                  <Slide key={i} index={i} path={i + '/*'} slide={slide} />
                ))}
                <Print path="/print" slides={ slides } />
              </PosedRouter>
            </Mode>
          </Wrapper>
        </ThemeProvider>
      </Context.Provider>
    </>
  )
}