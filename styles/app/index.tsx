import Caroussel from "@/components/caroussel";
import FeaturedCard from "@/components/featured-card";
import Header from "@/components/header";
import SearchBar from "@/components/search-bar";
import ScreenWrapper from "@/components/screen-wrapper";
import { metallicaAlbums } from "@/mocks/albums";
import React from "react";

export default function index() {
  return (
    <ScreenWrapper>
      <Header />
      <SearchBar />
      <FeaturedCard
        title="Master of Puppets"
        subtitle="Em destaque"
        cover="https://cdn-images.dzcdn.net/images/cover/6d5f397660c6ec7a445f386edac05b9e/1900x1900-000000-80-0-0.jpg"
      />
      <Caroussel title="Metallica" albums={metallicaAlbums} />
      <Caroussel title="Mais tocados" albums={metallicaAlbums} />
      <Caroussel title="Recentes" albums={metallicaAlbums} />
    </ScreenWrapper>
  );
}
