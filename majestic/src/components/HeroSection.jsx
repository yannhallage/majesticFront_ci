import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Info } from 'lucide-react';

const HeroSection = ({ movie }) => {
    if (!movie) return null;

    return (
        <div className="relative h-[80vh] w-full">
            <div className="absolute inset-0">
                <img
                    src={movie.backdropUrl}
                    alt={`Scène de ${movie.title}`}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1598482327979-dc961aadf0b3" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10 container h-full flex flex-col justify-center"
            >
                <h1 className="text-5xl md:text-7xl font-black text-primary max-w-2xl">
                    {movie.title}
                </h1>
                <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
                    {movie.description}
                </p>
                <div className="mt-8 flex gap-4">
                    <Link to={`/booking/${movie.id}`}>
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Play className="mr-2 h-5 w-5" />
                            Réserver
                        </Button>
                    </Link>
                    <Link to={`/movie/${movie.id}`}>
                        <Button size="lg" variant="secondary">
                            <Info className="mr-2 h-5 w-5" />
                            Plus d'infos
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;