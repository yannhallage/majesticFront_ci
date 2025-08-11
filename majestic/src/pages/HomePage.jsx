import React from 'react';
import { Helmet } from 'react-helmet';
import HeroCarousel from '@/components/HeroCarousel';
import MovieCarousel from '@/components/MovieCarousel';
import ProductsSection from '@/components/ProductsSection';
import { movies } from '@/data/movies';

const HomePage = () => {
    const featuredMovies = movies.slice(0, 3);
    const nowPlaying = movies.filter(m => m.status === 'now_playing');
    const comingSoon = movies.filter(m => m.status === 'coming_soon');
    const onDemand = movies.filter(m => m.status === 'on_demand');

    return (
        <>
            <Helmet>
                <title>CinéPrime - Films, Théâtre et Événements</title>
                <meta name="description" content="Découvrez les derniers films à l'affiche, les pièces de théâtre et les événements spéciaux sur CinéPrime." />
            </Helmet>
            <HeroCarousel movies={featuredMovies} />
            <div className="container py-12 space-y-12">
                <MovieCarousel title="À l'affiche" movies={nowPlaying} />
                <MovieCarousel title="Sortie cette semaine" movies={comingSoon} />
                <MovieCarousel title="À la demande" movies={onDemand} />
            </div>
            <ProductsSection />
        </>
    );
};

export default HomePage;