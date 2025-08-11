import React from 'react';
import { Link } from 'react-router-dom';
import { Clapperboard, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary border-t border-border/40">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-start col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <Clapperboard className="h-8 w-8 text-primary" />
                            <span className="inline-block font-bold text-2xl">CinéPrime</span>
                        </Link>
                        <p className="text-muted-foreground max-w-md">
                            Votre destination ultime pour le streaming de films et séries. Découvrez des milliers de titres, des classiques aux dernières sorties.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-primary mb-4">Navigation</p>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
                            <li><Link to="/salles" className="text-muted-foreground hover:text-primary transition-colors">Salles</Link></li>
                            <li><Link to="/theatre" className="text-muted-foreground hover:text-primary transition-colors">Théâtre</Link></li>
                            <li><Link to="/evenements" className="text-muted-foreground hover:text-primary transition-colors">Événements</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold text-primary mb-4">Suivez-nous</p>
                        <div className="flex space-x-4">
                            <Link to="#" onClick={(e) => e.preventDefault()} className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
                            <Link to="#" onClick={(e) => e.preventDefault()} className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
                            <Link to="#" onClick={(e) => e.preventDefault()} className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-border/40 pt-8 text-center text-muted-foreground text-sm">
                    <p>&copy; {new Date().getFullYear()} CinéPrime. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;