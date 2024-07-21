import { Container } from "./styles";

const items = [
    {name: 'Tudo'},
    {name: 'Kickboxing'},
    {name: 'Peso'},
    {name: 'Barras de levantamento'},
    {name: 'Jiu-Jitsu brasileiro'},
    {name: 'Música'},
    {name: 'Mr.Olympia'},
    {name: 'Mixes'},
    {name: 'Jogos'},
    {name: 'Educação física'},
    {name: 'Campeonatos'}
]

function Categories() {
      
    return (
        <Container>
        {items.map((item) => (
            <span>{item.name}</span>
        ))}
        </Container>
    )
};

export default Categories;