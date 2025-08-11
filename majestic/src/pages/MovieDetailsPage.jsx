import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { movies } from '@/data/movies';
import { Button } from '@/components/ui/button';
import { Star, Clock, Calendar, Play } from 'lucide-react';
import StarRating from '@/components/StarRating';
import { useToast } from '@/components/ui/use-toast';

const InfoRow = ({ title, content }) => (
    <div>
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="text-muted-foreground">{Array.isArray(content) ? content.join(', ') : content}</p>
    </div>
);

const MovieDetailsPage = () => {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === parseInt(id));
    const { toast } = useToast();

    const handleNotImplemented = () => {
        toast({
            title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
            description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine invite ! 🚀",
        });
    };

    if (!movie) {
        return <div className="container py-12 text-center">Film non trouvé.</div>;
    }

    return (
        <>
            <Helmet>
                <title>{movie.title} - CinéPrime</title>
                <meta name="description" content={movie.description} />
            </Helmet>

            <div className="relative h-[60vh] w-full">
                <div className="absolute inset-0">
                    <img
                        src={movie.backdropUrl}
                        alt={`Scène de ${movie.title}`}
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1598482327979-dc961aadf0b3" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
            </div>

            <div className="container relative z-10 -mt-48 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                            <img
                                src={movie.posterUrl}
                                alt={`Affiche de ${movie.title}`}
                                className="w-full rounded-lg shadow-2xl"
                                src="https://images.unsplash.com/photo-1689859828745-48fd14b68ec1" />
                        </div>
                        <div className="w-full md:w-2/3 lg:w-3/4 pt-8 md:pt-24">
                            <h1 className="text-4xl md:text-6xl font-black text-primary">{movie.title}</h1>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400" />
                                    <span>{movie.rating}</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{movie.duration}</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>2024</span>
                                </div>
                                <span>•</span>
                                <span>{movie.genre}</span>
                            </div>
                            <p className="mt-6 text-lg text-foreground/90 max-w-3xl">{movie.description}</p>
                            <div className="mt-8">
                                <Link to={`/booking/${movie.id}`}>
                                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        <Play className="mr-2 h-5 w-5" />
                                        Réserver une place
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="container pb-24">
                <hr className="border-border mb-12" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                >
                    {/* More Info Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-primary">Plus d'infos</h2>
                        <InfoRow title="Avertissement" content={movie.contentAdvisory} />
                        <InfoRow title="Langues" content={movie.audioLanguages} />
                        <InfoRow title="Sous-titres" content={movie.subtitles} />
                        <InfoRow title="Réalisateurs" content={movie.directors} />
                        <InfoRow title="Producteurs" content={movie.producers} />
                    </div>

                    {/* Reviews Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-primary">Avis</h2>
                        <div>
                            <div className="flex items-center gap-2">
                                <StarRating rating={movie.rating} />
                                <span className="font-bold text-lg">{movie.rating} sur 5</span>
                            </div>
                            <p className="text-muted-foreground text-sm">{movie.reviews.toLocaleString('fr-FR')} avis</p>
                        </div>
                        <div className="space-y-1">
                            {movie.ratingBreakdown.map(item => (
                                <div key={item.star} className="flex items-center gap-2 text-sm">
                                    <span className="text-muted-foreground">{item.star} étoile{item.star > 1 ? 's' : ''}</span>
                                    <div className="w-full bg-secondary rounded-full h-2">
                                        <motion.div
                                            className="bg-primary h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.percentage}%` }}
                                            transition={{ duration: 0.5, delay: 0.3 + (5 - item.star) * 0.1 }}
                                        />
                                    </div>
                                    <span className="w-8 text-right text-muted-foreground">{item.percentage}%</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button variant="secondary" onClick={handleNotImplemented}>Évaluer ce film</Button>
                            <Button variant="outline" onClick={handleNotImplemented}>Lire tous les avis</Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default MovieDetailsPage;