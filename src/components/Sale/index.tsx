import { Container } from './styles';

import { Status } from '../Status';

export function Sale({data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.name}</h1>
            <footer>
                <Status title={data.status}/>
            </footer>
        </Container>
    )
}