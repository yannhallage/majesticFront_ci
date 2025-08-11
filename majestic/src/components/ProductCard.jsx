import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProductCard = ({ product, reverse }) => {
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
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="md:w-1/2">
                <img
                    class="rounded-lg shadow-xl w-full h-auto"
                    alt={product.title}
                    src="https://images.unsplash.com/photo-1671376354106-d8d21e55dddd" />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-sm font-bold uppercase text-primary/70 tracking-wider">{product.category}</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">{product.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
                <Button onClick={handleNotImplemented} size="lg" className="mt-6">
                    {product.buttonText}
                </Button>
            </div>
        </motion.div>
    );
};

export default ProductCard;