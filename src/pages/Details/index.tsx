import { Container, Notes, Content } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Status } from '../../components/Status'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'

export function Details(){
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir"/>

          <h1>Lydia</h1>
          <p>Descricao do pedido</p>

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

          <Button title="Voltar"/>
        </Content>
      </main>

      
    </Container>
  )
}