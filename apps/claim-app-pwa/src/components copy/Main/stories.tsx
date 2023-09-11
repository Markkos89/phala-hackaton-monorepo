import { ComponentMeta, ComponentStory } from '@storybook/react'
import Main from '.'
type ComponentType = typeof Main
export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Boilerplate Next + Typescript',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as ComponentMeta<ComponentType>

export const Default: ComponentStory<ComponentType> = args => {
  return <Main {...args} />
}
// Por Storie
// Default.args = {
//   title: 'Boilerplate Next + Typescript',
//   description: 'TypeScript, ReactJS, NextJS e Styled Components'
// }
