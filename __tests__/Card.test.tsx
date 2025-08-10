import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card/Card';

describe('Card Component', () => {
    const mockProps = {
        date: '17 de ago, 2024',
        title: 'Teste de título',
        description: 'Descrição de teste'
    };

    test('renderiza o card com as propriedades corretas', () => {
        render(<Card {...mockProps} />);

        expect(screen.getByText('17 de ago, 2024')).toBeInTheDocument();
        expect(screen.getByText('Teste de título')).toBeInTheDocument();
        expect(screen.getByText('Descrição de teste')).toBeInTheDocument();
    });

    test('aplica a classe cardLiked quando o coração é clicado', () => {
        render(<Card {...mockProps} />);

        const heartIcon = screen.getByAltText('Coração não preenchido');
        fireEvent.click(heartIcon);

        const cardContent = screen.getByText('Teste de título').closest('div');
        expect(cardContent).toHaveClass('cardLiked');
    });
})