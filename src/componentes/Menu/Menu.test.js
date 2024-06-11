import { render, screen } from "@testing-library/react";
import Menu from ".";

test("Deve renderizar um link para página principal", () => {
    render(<Menu />)
    const linkPaginaInicial = screen.getByText('Inicial')
    expect(linkPaginaInicial).toBeInTheDocument()
})

test("Deve renderizar uma lista de links", () => {
    render(<Menu />)
    const listaDeLinks = screen.getAllByRole('link') //Aparentemente esse método olha pro nome dado ao atributo class, nesse caso é class="link"
    expect(listaDeLinks).toHaveLength(4)
})

test("Não deve renderizar o link para o Extrato", () => {
    render(<Menu />)
    const linkExtrato = screen.queryByTestId('Extrato') // O método 'queryBy...' retorna 1 ou nulo
    expect(linkExtrato).not.toBeInTheDocument()
})

test("Deve renderizar uma lista de links com a classe 'link'", () => {
    render(<Menu />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => expect(link).toHaveClass('links'))
    expect(links).toMatchSnapshot() // O método '.tomatchSnapshot()' serve para copiar o componente testado e armazená-lo em um arquivo separado. Com isso, vc pode visualizar detalhadamente esse componente testado e, caso faça alguma alteração nele, vc pode tbm comparar esse componente lterado com a versão que foi copiada anteriormente 
})