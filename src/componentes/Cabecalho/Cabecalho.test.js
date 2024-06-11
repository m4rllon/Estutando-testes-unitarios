import { render, screen } from "@testing-library/react";
import Cabecalho from ".";

test("Deve renderizar o nome do usuário logado", () => {
    render(<Cabecalho />)
    const nomeUsuario = screen.getByText("Joana Fonseca Gomes")
    expect(nomeUsuario).toBeInTheDocument() //Aqui vc está verificando se a string contida na var 'nomeUsuario' esta no documento analisado
})