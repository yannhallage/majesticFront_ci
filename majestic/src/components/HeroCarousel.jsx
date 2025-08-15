import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

const HeroCarousel = ({ movies }) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {
        setPage([(page + newDirection + movies.length) % movies.length, newDirection]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(interval);
    }, [page]);

    const movie = movies[page];

    return (
        <div className="relative h-[80vh] w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0"
                >
                    <img
                        src={movie.backdropUrl}
                        alt={`Scène de ${movie.title}`}
                        className="w-full h-full object-cover"
                        src={movie.picture} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 container h-full flex flex-col justify-center">
                <motion.h1
                    key={movie.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-5xl md:text-7xl font-black text-primary max-w-2xl"
                >
                    {movie.title}
                </motion.h1>
                <motion.p
                    key={movie.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-4 max-w-2xl text-muted-foreground text-lg"
                >
                    {movie.description}
                </motion.p>
                <motion.div
                    key={`buttons-${movie.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8 flex gap-4"
                >
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
                </motion.div>
            </div>

            <div className="absolute z-20 top-1/2 -translate-y-1/2 left-4">
                <Button variant="outline" size="icon" onClick={() => paginate(-1)} className="bg-background/50 hover:bg-background/80">
                    <ChevronLeft className="h-6 w-6" />
                </Button>
            </div>
            <div className="absolute z-20 top-1/2 -translate-y-1/2 right-4">
                <Button variant="outline" size="icon" onClick={() => paginate(1)} className="bg-background/50 hover:bg-background/80">
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>
        </div>
    );
};

export default HeroCarousel;