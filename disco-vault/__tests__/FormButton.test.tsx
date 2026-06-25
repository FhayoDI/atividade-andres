import { fireEvent, render } from '@testing-library/react-native';
import FormButton from '../src/components/FormButton';

describe('FormButton', () => {
  it('mostra o título recebido', () => {
    const { getByText } = render(<FormButton titulo="ENTRAR" onPress={() => {}} />);
    expect(getByText('ENTRAR')).toBeTruthy();
  });

  it('chama onPress ao ser tocado', () => {
    const aoTocar = jest.fn();
    const { getByText } = render(<FormButton titulo="SALVAR" onPress={aoTocar} />);
    fireEvent.press(getByText('SALVAR'));
    expect(aoTocar).toHaveBeenCalledTimes(1);
  });

  it('não chama onPress enquanto está carregando', () => {
    const aoTocar = jest.fn();
    const { queryByText } = render(
      <FormButton titulo="SALVAR" onPress={aoTocar} carregando />
    );
    // Carregando troca o texto por um spinner, então o título some.
    expect(queryByText('SALVAR')).toBeNull();
  });
});
