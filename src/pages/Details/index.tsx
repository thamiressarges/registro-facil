import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Container, Notes } from './styles'
import { Status } from '../../components/Status'

export function Details(){
  return(
    <Container>
      <Header/>
      <Section title="Links úteis">
        <Notes>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </Notes>
      </Section>

      <Section title="Status">
        <Status title="Pago"/>
      </Section>
    </Container>
  )
}