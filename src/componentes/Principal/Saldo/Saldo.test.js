import { render, screen } from "@testing-library/react"
import Saldo from "."

describe("Componente <Saldo/> ", () => {
    test('deve renderizar o saldo com o valor monetário', () => {
        const saldo = 1000
        render(<Saldo saldo={saldo} />)

        const valorSaldo = screen.getByTestId('valor-saldo')
        expect(valorSaldo).toHaveTextContent(`R$ ${saldo}`)
    })
})