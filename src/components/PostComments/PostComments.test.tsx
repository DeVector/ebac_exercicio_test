import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Devera criar dois novos comentarios', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('campo-comentario'),{
            target: {
                value: 'Carro incrivel'
            }
        })
        fireEvent.click(screen.getByTestId('btn-adicionar-comentario'))

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                valua: 'Olha essa nave, vou ter uma igual a essa como Dev Full-stack'
            }
        })
        fireEvent.click(screen.getByTestId('btn-adicionar-comentario'))
        
        expect(screen.getByText('Carro incrivel')).toBeInTheDocument()
    })
});