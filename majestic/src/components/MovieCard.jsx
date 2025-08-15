import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const MovieCard = ({ movie }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.2 }}
            className="w-60 flex-shrink-0"
        >
            <Link to={`/movie/${movie.id}`} className="block group">
                <div className="relative rounded-lg overflow-hidden aspect-[2/3] bg-secondary">
                    <img
                        src={movie.posterUrl}
                        alt={`Affiche de ${movie.title}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src={movie.picture} />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle className="w-16 h-16 text-white/80" />
                    </div>
                </div>
                <h3 className="mt-2 text-sm font-medium text-foreground truncate">{movie.title}</h3>
                <p className="text-xs text-muted-foreground">{movie.genre}</p>
            </Link>
        </motion.div>
    );
};

export default MovieCard;