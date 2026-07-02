import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Registro Fácil</h1>
                <p>Aplicação para salvar e gerenciar suas vendas</p>

                <h2>Faça o seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"/>

                <a href="#">
                    Criar Conta
                </a>
            </Form>

            <Background/>

        </Container>
    )
}