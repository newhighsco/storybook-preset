import React, { useContext } from 'react'
import { themes } from '@storybook/theming'
import { object } from 'prop-types'
import {
  ArgsTable,
  CURRENT_SELECTION,
  Description,
  DocsContext,
  DocsStory,
  Heading,
  Primary,
  PRIMARY_STORY,
  Source,
  Subtitle,
  Title
} from '@storybook/addon-docs'
import { getDocsStories } from '@storybook/addon-docs/dist/esm/blocks/utils'

const DocsPage = ({ theme = {} }) => {
  const context = useContext(DocsContext)
  const stories = getDocsStories(context).slice(1)

  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <div style={{ display: 'none' }}>
        <Primary />
      </div>
      <Source id={CURRENT_SELECTION} dark={theme.base !== themes.dark.base} />
      <ArgsTable story={PRIMARY_STORY} />
      {!!stories?.length && (
        <>
          <Heading>Stories</Heading>
          {stories.map(
            story =>
              story && <DocsStory key={story.id} {...story} withToolbar />
          )}
        </>
      )}
    </>
  )
}

DocsPage.propTypes = {
  theme: object
}

export { DocsPage }
