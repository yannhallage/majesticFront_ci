import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const LoginDialog = ({ isOpen, onOpenChange }) => {
    const { toast } = useToast();

    const handleLogin = (e) => {
        e.preventDefault();
        toast({
            title: "Connexion réussie (simulation)",
            description: "Bienvenue ! Vous êtes maintenant connecté.",
        });
        onOpenChange(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] bg-secondary border-border">
                <DialogHeader>
                    <DialogTitle className="text-primary">Se connecter</DialogTitle>
                    <DialogDescription>
                        Entrez vos identifiants pour accéder à votre compte.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleLogin}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right text-muted-foreground">
                                Email
                            </Label>
                            <Input id="email" type="email" defaultValue="test@example.com" className="col-span-3 bg-background" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="password" a className="text-right text-muted-foreground">
                                Mot de passe
                            </Label>
                            <Input id="password" type="password" defaultValue="********" className="col-span-3 bg-background" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Se connecter</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default LoginDialog;