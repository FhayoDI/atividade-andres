import { notaValida, validarDisco, validarEmail } from '../src/helpers/validacao';

describe('validarEmail', () => {
  it('aceita um e-mail bem formatado', () => {
    expect(validarEmail('headbanger@vault.com')).toBe(true);
  });

  it('rejeita texto sem arroba ou domínio', () => {
    expect(validarEmail('headbanger')).toBe(false);
    expect(validarEmail('headbanger@vault')).toBe(false);
  });
});

describe('notaValida', () => {
  it('aceita notas entre 0 e 10', () => {
    expect(notaValida(0)).toBe(true);
    expect(notaValida(10)).toBe(true);
  });

  it('rejeita notas fora do intervalo', () => {
    expect(notaValida(-1)).toBe(false);
    expect(notaValida(11)).toBe(false);
  });
});

describe('validarDisco', () => {
  const discoValido = {
    album: 'Master of Puppets',
    banda: 'Metallica',
    ano: 1986,
    genero: 'Thrash Metal',
    nota: 10,
  };

  it('retorna null quando os dados estão corretos', () => {
    expect(validarDisco(discoValido)).toBeNull();
  });

  it('exige o nome do álbum', () => {
    expect(validarDisco({ ...discoValido, album: '' })).toBe('Informe o nome do álbum.');
  });

  it('recusa ano fora do intervalo permitido', () => {
    expect(validarDisco({ ...discoValido, ano: 1800 })).toBe('Informe um ano válido.');
  });
});
