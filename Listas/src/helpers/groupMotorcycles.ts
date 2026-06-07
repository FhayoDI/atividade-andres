type Motorcycle = {
  id: number;
  model: string;
  brand: string;
  year: number;
  category: string;
};

type Section = {
  title: string;
  data: Motorcycle[];
};

export function agruparPorCategoria(lista: Motorcycle[]): Section[] {
  const grupos: Record<string, Motorcycle[]> = {};

  for (const moto of lista) {
    if (!grupos[moto.category]) grupos[moto.category] = [];
    grupos[moto.category].push(moto);
  }

  return Object.entries(grupos).map(([title, data]) => ({ title, data }));
}
