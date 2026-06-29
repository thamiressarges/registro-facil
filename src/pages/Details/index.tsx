import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Notes } from './styles'

export function Details(){
  return(
    <>
      <Header/>
      <Section title="Links úteis">
        <Notes>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </Notes>
      </Section>
    </>
  )
}