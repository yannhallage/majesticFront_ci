import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { movies } from '@/data/movies';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Check, CreditCard } from 'lucide-react';

const generateSeats = () => {
    const seats = [];
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    rows.forEach(row => {
        for (let i = 1; i <= 12; i++) {
            seats.push({ id: `${row}${i}`, isOccupied: Math.random() < 0.3 });
        }
    });
    return seats;
};

const BookingPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const movie = movies.find((m) => m.id === parseInt(id));

    const [seats] = useState(generateSeats());
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedShowtime, setSelectedShowtime] = useState(movie?.showtimes[0]);

    const handleSeatClick = (seatId) => {
        if (seats.find(s => s.id === seatId)?.isOccupied) return;
        setSelectedSeats(prev =>
            prev.includes(seatId)
                ? prev.filter(id => id !== seatId)
                : [...prev, seatId]
        );
    };

    const handlePayment = () => {
        if (selectedSeats.length === 0) {
            toast({ title: "Aucun siège sélectionné", description: "Veuillez sélectionner au moins un siège.", variant: "destructive" });
            return;
        }
        toast({
            title: "🚧 Fonctionnalité à venir",
            description: "Le paiement n'est pas encore implémenté. Vous pouvez demander cette fonctionnalité !",
        });
    };

    if (!movie) {
        return <div className="container py-12 text-center">Film non trouvé.</div>;
    }

    const totalPrice = (selectedSeats.length * movie.price).toFixed(2);

    return (
        <>
            <Helmet>
                <title>Réservation pour {movie.title} - CinéPrime</title>
            </Helmet>
            <div className="container py-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-4xl mx-auto bg-secondary rounded-xl p-8"
                >
                    <h1 className="text-3xl font-bold text-primary mb-2">Réservez vos places</h1>
                    <h2 className="text-xl text-muted-foreground mb-8">{movie.title}</h2>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Choisissez votre séance</h3>
                        <div className="flex gap-2">
                            {movie.showtimes.map(time => (
                                <Button
                                    key={time}
                                    variant={selectedShowtime === time ? 'default' : 'outline'}
                                    onClick={() => setSelectedShowtime(time)}
                                    className={selectedShowtime === time ? 'bg-primary text-primary-foreground' : ''}
                                >
                                    {time}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Sélectionnez vos places</h3>
                        <div className="bg-background/50 p-6 rounded-lg">
                            <div className="w-full h-2 bg-primary/50 rounded-full mb-2" />
                            <p className="text-center text-muted-foreground text-sm mb-6">ÉCRAN</p>
                            <div className="flex flex-col items-center gap-2">
                                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(row => (
                                    <div key={row} className="flex gap-2">
                                        {Array.from({ length: 12 }).map((_, i) => {
                                            const seatId = `${row}${i + 1}`;
                                            const seat = seats.find(s => s.id === seatId);
                                            const isSelected = selectedSeats.includes(seatId);
                                            return (
                                                <motion.button
                                                    key={seatId}
                                                    onClick={() => handleSeatClick(seatId)}
                                                    disabled={seat.isOccupied}
                                                    className={`w-8 h-8 rounded-md border-2 transition-colors ${seat.isOccupied ? 'bg-muted cursor-not-allowed' :
                                                            isSelected ? 'bg-primary border-primary' :
                                                                'bg-secondary border-border hover:bg-accent'
                                                        }`}
                                                    whileHover={!seat.isOccupied ? { scale: 1.1 } : {}}
                                                    whileTap={!seat.isOccupied ? { scale: 0.9 } : {}}
                                                >
                                                    {isSelected && <Check className="w-4 h-4 mx-auto text-primary-foreground" />}
                                                </motion.button>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {selectedSeats.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 bg-background/50 p-6 rounded-lg"
                        >
                            <h3 className="text-lg font-semibold mb-4">Récapitulatif</h3>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p>{selectedSeats.length} place(s) sélectionnée(s)</p>
                                    <p className="text-sm text-muted-foreground">{selectedSeats.join(', ')}</p>
                                </div>
                                <p className="text-2xl font-bold text-primary">{totalPrice}€</p>
                            </div>
                            <Button onClick={handlePayment} size="lg" className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                                <CreditCard className="mr-2 h-5 w-5" />
                                Procéder au paiement
                            </Button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </>
    );
};

export default BookingPage;