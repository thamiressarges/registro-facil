import { Container, Profile } from "./styles"

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/thamiressarges.png" alt="Foto do usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Thamires Sarges</strong>
                </div>
            </Profile>

        </Container>
    )
}