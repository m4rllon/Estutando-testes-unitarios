import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from ".";

describe('Deve renderizar um campo de input', () => {
    test('no documento', () => {
        render(<Formulario />)
        const campoTexto = screen.getByPlaceholderText('Digite um valor')
        expect(campoTexto).toBeInTheDocument()
    })

    test("com o type number", () => {
        render(<Formulario />)
        const campoTexto = screen.getByPlaceholderText('Digite um valor')
        expect(campoTexto).toHaveAttribute('type', 'number')
    })

    test("com o type number que pode ser preenchido", () => {
        render(<Formulario />) //Renderiza todo o componente
        const campoTexto = screen.getByPlaceholderText('Digite um valor') //Coleta as infos do elemento que tem o placeholder='Digite um valor'
        userEvent.type(campoTexto, '50') //Atribui o valor '50' ao elemento coletado e armazenado na var 'campoTexto'
        expect(campoTexto).toHaveValue(50) //Verifica se o vaaalor de 'campoTexto' é igual a 50.
    })
})

test('Deve chamar um evento de onSubmit ao clicar em realizar transacao', () => {
    const realizarTransacao = jest.fn() //Aqui nós estamos criando uma função fake só pra servir de atributo para passar pro componente <Formulario/>

    render(<Formulario realizarTransacao={realizarTransacao} />)
    const botao = screen.getByRole('button')

    userEvent.click(botao)
    expect(realizarTransacao).toHaveBeenCalledTimes(1)
})

test("Deve renderizar a opção de tipo de transação escolhida pelo usuário", () => {
    const { rerender } = render(<Formulario />)
    const selectInput = screen.getByTestId('select-opcoes')
    userEvent.selectOptions(selectInput, ['Depósito'])
    expect(selectInput).toHaveValue('Depósito')

    rerender(<Formulario />)
    const newSelectInput = screen.getByTestId('select-opcoes')
    userEvent.selectOptions(newSelectInput, ['Transferência'])
    expect(newSelectInput).toHaveValue('Transferência')

})

