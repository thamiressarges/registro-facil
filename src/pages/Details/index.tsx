import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Container, Notes } from './styles'
import { Status } from '../../components/Status'
import { ButtonText } from '../../components/ButtonText'

export function Details(){
  return(
    <Container>
      <Header/>

      <ButtonText title="Excluir"/>

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