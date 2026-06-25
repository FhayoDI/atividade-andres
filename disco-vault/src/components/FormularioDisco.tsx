import { useState } from 'react';
import FormButton from './FormButton';
import FormInput from './FormInput';
import { alerta } from '../helpers/alerta';
import { validarDisco } from '../helpers/validacao';
import { DadosDisco } from '../services/discos';

type Props = {
  valoresIniciais: DadosDisco;
  textoBotao: string;
  carregando: boolean;
  onSalvar: (dados: DadosDisco) => void;
};

export default function FormularioDisco({
  valoresIniciais,
  textoBotao,
  carregando,
  onSalvar,
}: Props) {
  const [album, setAlbum] = useState(valoresIniciais.album);
  const [banda, setBanda] = useState(valoresIniciais.banda);
  const [ano, setAno] = useState(String(valoresIniciais.ano || ''));
  const [genero, setGenero] = useState(valoresIniciais.genero);
  const [nota, setNota] = useState(String(valoresIniciais.nota || ''));

  function salvar() {
    const dados: DadosDisco = {
      album,
      banda,
      ano: Number(ano),
      genero,
      nota: Number(nota),
    };

    const erro = validarDisco(dados);
    if (erro) {   
      alerta('Dados inválidos', erro);
      return;
    }

    onSalvar(dados);
  }

  return (
    <>
      <FormInput label="ÁLBUM" value={album} onChangeText={setAlbum} placeholder="Love at First Sting" />
      <FormInput label="BANDA" value={banda} onChangeText={setBanda} placeholder="Scorpions" />
      <FormInput
        label="ANO" value={ano} onChangeText={setAno} placeholder="1984"keyboardType="numeric"/>
      <FormInput label="GÊNERO" value={genero} onChangeText={setGenero} placeholder="Hard Rock" />
      <FormInput label="NOTA (0 A 10)" value={nota} onChangeText={setNota} placeholder="10" keyboardType="numeric"/>
      <FormButton titulo={textoBotao} onPress={salvar} carregando={carregando } />
    </>
  );
}
