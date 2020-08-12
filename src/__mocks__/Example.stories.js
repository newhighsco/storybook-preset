import React from 'react'
import { Example, ExampleChild } from './Example'

import LogoSvg from './logo.svg'
import logoSvgUrl from './logo.url.svg'
import logoPngUrl from './logo.png'

export default {
  title: 'Components/Example',
  component: Example,
  subcomponents: { ExampleChild },
  parameters: {
    componentSubtitle: 'Some subtitle'
  }
}

const ExampleStory = args => <Example {...args} />

export const Source = ExampleStory.bind({})

Source.args = {
  children: 'Source'
}

export const Text = ExampleStory.bind({})

Text.args = {
  children: 'Text'
}

export const InlineSVG = ExampleStory.bind({})

InlineSVG.args = {
  children: <LogoSvg />
}

InlineSVG.story = {
  parameters: {
    docs: {
      storyDescription: 'Some story description'
    }
  }
}

export const ImageSVGSrc = ExampleStory.bind({})

ImageSVGSrc.args = {
  children: <img src={logoSvgUrl} alt="" />
}

export const ImagePNGSrc = ExampleStory.bind({})

ImagePNGSrc.args = {
  children: <img src={logoPngUrl} alt="" style={{ width: 64 }} />
}
