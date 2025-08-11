import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield as Mask, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PlayCard = ({ play }) => {
    const { toast } = useToast();

    const handleNotImplemented = () => {
        toast({
            title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
            description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine invite ! 🚀",
        });
    };
    return (
        <motion.div
            className="bg-secondary rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            <img class="w-full h-72 object-cover" alt={play.title} src="https://images.unsplash.com/photo-1519755886879-4e3381fe0cb7" />
            <div className="p-6">
                <h3 className="text-2xl font-bold text-primary">{play.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">de {play.author}</p>
                <p className="mt-4 text-foreground/80">{play.description}</p>
                <Button onClick={handleNotImplemented} className="w-full mt-6">
                    <Ticket className="mr-2 h-4 w-4" />
                    Acheter des billets
                </Button>
            </div>
        </motion.div>
    );
}

const OnStagePage = () => {
    const plays = [
        {
            id: 1,
            title: "Le Dîner de Cons",
            author: "Francis Veber",
            description: "Chaque semaine, un groupe d'amis organise un dîner où chacun doit amener un 'con'. Mais ce soir, rien ne se passe comme prévu pour l'organisateur...",
        },
        {
            id: 2,
            title: "Cyrano de Bergerac",
            author: "Edmond Rostand",
            description: "Le célèbre et poétique Cyrano, affligé d'un nez proéminent, n'ose déclarer sa flamme à la belle Roxane. Un classique intemporel sur l'amour et l'apparence.",
        },
        {
            id: 3,
            title: "Art",
            author: "Yasmina Reza",
            description: "L'achat d'un tableau entièrement blanc par l'un d'eux met à l'épreuve l'amitié de trois hommes. Une comédie brillante sur l'art et les relations humaines.",
        }
    ];

    return (
        <>
            <Helmet>
                <title>Théâtre - CinéPrime</title>
                <meta name="description" content="Découvrez notre programmation théâtrale, des classiques aux comédies modernes." />
            </Helmet>
            <div className="container py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-block bg-primary text-primary-foreground p-3 rounded-full mb-4">
                        <Mask className="h-10 w-10" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-primary">Le Théâtre à l'Honneur</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Vibrez au rythme des planches avec notre sélection de pièces captivantes.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plays.map(play => <PlayCard key={play.id} play={play} />)}
                </div>
            </div>
        </>
    );
};

export default OnStagePage;