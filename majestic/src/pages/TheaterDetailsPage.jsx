import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { theaters } from '@/data/theaters';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Film } from 'lucide-react';

const TheaterDetailsPage = () => {
    const { id } = useParams();
    const theater = theaters.find((t) => t.id === parseInt(id));

    if (!theater) {
        return (
            <div className="container py-12 text-center">
                <h1 className="text-2xl font-bold">Salle non trouvée</h1>
                <Button asChild className="mt-4">
                    <Link to="/salles">Retour aux salles</Link>
                </Button>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{theater.name} - CinéPrime</title>
                <meta name="description" content={theater.description} />
            </Helmet>
            <div className="container py-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button asChild variant="outline" className="mb-8">
                        <Link to="/salles">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Toutes les salles
                        </Link>
                    </Button>

                    <h1 className="text-4xl md:text-6xl font-black text-primary">{theater.name}</h1>
                    <p className="mt-4 max-w-3xl text-xl text-muted-foreground">{theater.description}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-6 text-foreground">
                        <div className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary" />
                            <span className="font-medium">{theater.capacity} places</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Film className="h-5 w-5 text-primary" />
                            <span className="font-medium">{theater.features.join(' • ')}</span>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-primary mb-6">Galerie</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {theater.images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TheaterDetailsPage;