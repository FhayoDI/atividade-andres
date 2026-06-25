import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function CatalogScreen() {
  // Nome do usuário interpolado na saudação
  const userName = "hyg";

  // Lista de pratos do cardápio
  const dataList = [
    {
      name: "Pão com Cracóvia",
      price: 28.9,
      category: "Entrada",
      onSale: false,
      hasSausage: true
    },
    {
      name: "Lasanha Bolonhesa",
      price: 40.99,
      category: "Prato Principal",
      onSale: true,
      hasSausage: false
    },
    {
      name: "Churrasco com Maionese",
      price: 78.99,
      category: "Prato Principal",
      onSale: false,
      hasSausage: true
    },
    {
      name: "Mousse de Maracujá",
      price: 32.0,
      category: "Sobremesa",
      onSale: true,
      hasSausage: false
    },
    {
      name: "Karpatka",
      price: 27.5,
      category: "Sobremesa",
      onSale: false,
      hasSausage: false
    },
  ];

  return (
    <ScrollView style={styles.tela}>
      {/* Saudação com o nome interpolado */}
      <Text style={styles.saudacao}>Olá, {userName}! 👋</Text>

      {/* Loop que renderiza um card para cada item da lista */}
      {dataList.map((item, index) => (
        <View key={index} style={styles.card}>
          {/* Nome do prato */}
          <Text style={styles.nome}>{item.name}</Text>

          {/* Categoria */}
          <Text style={styles.categoria}>{item.category}</Text>

          {/* Badge de oferta — só aparece se onSale for true */}
          {item.onSale && <Text style={styles.oferta}>OFERTA</Text>}

          {/* Preço — verde se oferta, cinza se não */}
          <Text style={{ color: item.onSale ? "green" : "gray", fontSize: 16 }}>
            R$ {item.price.toFixed(2)}
          </Text>

          {/* Linguiça - true se tem linguiça no prato */}
          <Text style={styles.linguica}>Tem linguiça? {item.hasSausage ? "Sim" : "Não"}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    tela: { 
        flex: 1,
        backgroundColor: "#ffffffbd", 
        padding: 16 
    },
    saudacao: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16,
        marginTop: 40,
  },
    card: {
        backgroundColor: "#ffffffa1",
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
    },
    nome: { 
        fontSize: 18, 
        fontWeight: "bold" 
    },
    categoria: { 
        color: "gray",
        marginBottom: 6 
    },
    oferta: { 
        color: "green",
        fontWeight: "bold",
        marginBottom: 4 
    },
    linguica : {
        color: "red",
        fontWeight: "bold",
        marginBottom: 4,
        marginTop: 4,
        fontSize: 16
    }
});
