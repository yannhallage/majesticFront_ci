import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clapperboard, UserCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoginDialog from '@/components/LoginDialog';
import { cn } from '@/lib/utils';

const Header = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = ({ isActive }) =>
        `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'
        }`;

    return (
        <>
            <motion.header
                initial={false}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    'sticky top-0 z-50 w-full transition-all duration-300',
                    isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'
                )}
            >
                <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                    <div className="flex gap-6 md:gap-10">
                        <Link to="/" className="flex items-center space-x-2">
                            <Clapperboard className="h-6 w-6 text-primary" />

                            <span className="inline-block font-bold text-lg">Majestic.ci</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6">
                            <NavLink to="/" className={navLinkClasses}>
                                Accueil
                            </NavLink>
                            <NavLink to="/salles" className={navLinkClasses}>
                                Salles
                            </NavLink>
                            <NavLink to="/theatre" className={navLinkClasses}>
                                Théâtre
                            </NavLink>
                            <NavLink to="/evenements" className={navLinkClasses}>
                                Événements
                            </NavLink>
                        </nav>
                    </div>

                    <div className="flex flex-1 items-center justify-end space-x-4">
                        <nav className="flex items-center space-x-2">
                            <Button variant="ghost" size="icon">
                                <Search className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => setIsLoginOpen(true)}>
                                <UserCircle className="h-5 w-5" />
                            </Button>
                        </nav>
                    </div>
                </div>
            </motion.header>
            <LoginDialog isOpen={isLoginOpen} onOpenChange={setIsLoginOpen} />
        </>
    );
};

export default Header;