import { DadosDisco } from '../services/discos';

// Verifica se um e-mail tem um formato básico válido (texto@texto.dominio).
export function validarEmail(email: string): boolean {
  const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padrao.test(email.trim());
}

// Confere se a nota está dentro do intervalo aceito (0 a 10).
export function notaValida(nota: number): boolean {
  return nota >= 0 && nota <= 10;
}

// Valida os campos de um disco antes de enviar para a API.
// Devolve uma mensagem de erro, ou null se estiver tudo certo.
export function validarDisco(dados: DadosDisco): string | null {
  if (!dados.album.trim()) return 'Informe o nome do álbum.';
  if (!dados.banda.trim()) return 'Informe a banda.';
  if (dados.ano < 1900 || dados.ano > 2100) return 'Informe um ano válido.';
  if (!notaValida(dados.nota)) return 'A nota deve ficar entre 0 e 10.';
  return null;
}
