import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Testes para o componente principal', () => {
    test('Deve garantir a inserção de dois comentários na lista', () => {
        render(<App />);

        const campoTexto = screen.getByTestId('comentario-textarea');
        const botaoSubmeter = screen.getByTestId('comentario-botao');

        fireEvent.change(campoTexto, { target: { value: 'Primeira inserção realizada para validação' } });
        fireEvent.click(botaoSubmeter);

        fireEvent.change(campoTexto, { target: { value: 'Segunda inserção concluída com sucesso' } });
        fireEvent.click(botaoSubmeter);


        const itensComentarios = screen.getAllByTestId('comentario-elemento');
        expect(itensComentarios).toHaveLength(2);


        expect(screen.getByText('Primeira inserção realizada para validação')).toBeInTheDocument();
        expect(screen.getByText('Segunda inserção concluída com sucesso')).toBeInTheDocument();
    });
});