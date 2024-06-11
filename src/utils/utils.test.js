import { calculaNovoSaldo } from './index'

describe('Quando realizar uma transação do tipo ', () => {
    test('DEPÓSITO, o saldo deve aumentar', () => {
        const saldo = 100
        const transacao = {
            transacao: 'Depósito',
            valor: 50,
        }

        const novoSaldo = calculaNovoSaldo(transacao, saldo)
        expect(novoSaldo).toBe(150)
    })

    test('TRANSFERÊNCIA, o saldo deve diminuir', () => {
        const saldo = 100
        const transacao = {
            transacao: 'Transferência',
            valor: 50,
        }

        const novoSaldo = calculaNovoSaldo(transacao, saldo)
        expect(novoSaldo).toBe(50)
    })
})

test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
    const calcularRendimento = jest.fn(saldo => Number((saldo * 1.005).toFixed(1)))
    const saldo = 100
    const novoSaldo = calcularRendimento(100)

    expect(novoSaldo).toBe(100.5) //Verifica se o valor de novoSaldo é 100.5
    expect(calcularRendimento).toBeCalled() //Verifica se a função calcularRendimendo foi invocada
    expect(calcularRendimento).toHaveBeenCalledWith(saldo) //Verifica se a função calcularRendimendo foi invocada COM o parâmetro 'saldo'
})