import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theaters } from '@/data/theaters';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TheatersPage = () => {
    return (
        <>
            <Helmet>
                <title>Nos Salles - CinéPrime</title>
                <meta name="description" content="Découvrez nos salles de cinéma modernes et confortables, équipées des dernières technologies." />
            </Helmet>
            <div className="container py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-primary">Nos Salles de Cinéma</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Chaque salle est conçue pour vous offrir une expérience unique. Explorez nos espaces et trouvez l'ambiance parfaite pour votre prochaine séance.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {theaters.map((theater, index) => (
                        <motion.div
                            key={theater.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="md:w-1/2">
                                <Link to={`/salles/${theater.id}`}>
                                    <img
                                        alt={theater.images[0].alt}
                                        className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video transition-transform duration-300 hover:scale-105"
                                        src={theater.images[0].src}
                                    />
                                </Link>
                            </div>
                            <div className="md:w-1/2 text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">{theater.name}</h2>
                                <p className="mt-4 text-lg text-muted-foreground">{theater.description}</p>
                                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                                    {theater.features.map(feature => (
                                        <span key={feature} className="text-xs font-semibold bg-secondary text-primary px-3 py-1 rounded-full">{feature}</span>
                                    ))}
                                </div>
                                <Button asChild size="lg" className="mt-6">
                                    <Link to={`/salles/${theater.id}`}>
                                        Découvrir la salle
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TheatersPage;