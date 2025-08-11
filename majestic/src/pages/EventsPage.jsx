import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const EventCard = ({ event }) => {
    const { toast } = useToast();

    const handleNotImplemented = () => {
        toast({
            title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
            description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine invite ! 🚀",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-secondary rounded-lg overflow-hidden flex flex-col md:flex-row"
        >
            <img
                alt={event.title}
                className="h-60 w-full md:w-1/3 object-cover"
                src={event.imageUrl}
            />
            <div className="p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-primary">{event.title}</h2>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                    </div>
                    <p className="mt-4 text-foreground/80">{event.description}</p>
                </div>
                <Button onClick={handleNotImplemented} className="mt-6 w-full md:w-auto self-start">
                    <Ticket className="mr-2 h-4 w-4" />
                    Réserver
                </Button>
            </div>
        </motion.div>
    );
};

const EventsPage = () => {
    const events = [
        {
            id: 1,
            title: "Festival du Film Fantastique",
            date: "15 - 18 Octobre 2025",
            description: "Plongez dans l'imaginaire avec quatre jours de projections, de rencontres avec des réalisateurs et d'ateliers sur les effets spéciaux.",
            imageUrl: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb"
        },
        {
            id: 2,
            title: "Marathon 'Le Seigneur des Anneaux'",
            date: "2 Novembre 2025",
            description: "Vivez ou revivez la trilogie épique de Peter Jackson en version longue sur grand écran. Une journée complète en Terre du Milieu.",
            imageUrl: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Événements - CinéPrime</title>
                <meta name="description" content="Découvrez les événements spéciaux, festivals et projections uniques organisés par CinéPrime." />
            </Helmet>
            <div className="container py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-primary">Nos Événements</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Au-delà des films, nous vous proposons des expériences inoubliables.
                    </p>
                </motion.div>
                <div className="space-y-8 max-w-4xl mx-auto">
                    {events.map(event => <EventCard key={event.id} event={event} />)}
                </div>
            </div>
        </>
    );
};

export default EventsPage;