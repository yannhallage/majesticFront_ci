import { BentoGridDemo } from "@/components/BentoGridDemo";
// import ReusableModal from "@/components/modalTest";
import React from "react";


export default function OffrePage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            {/* Header */}
            <header className="flex items-center justify-between p-4 border-b border-red-600">
                <button className="text-sm font-semibold hover:underline">&lt; Retour</button>
                <div className="text-2xl font-bold text-white bg-red-600 px-4 py-1 rounded">
                    e-cinema.com
                </div>
                <nav className="text-sm space-x-4 uppercase">
                    <a href="#" className="hover:underline">Inscription</a>
                    <span>-</span>
                    <a href="#" className="hover:underline">Connexion</a>
                </nav>
            </header>

            {/* Step navigation */}
            <nav className="flex justify-center gap-6 mt-6 border-b border-red-600 max-w-xl mx-auto text-xs uppercase font-semibold tracking-widest">
                <StepItem active>Etape 01</StepItem>
                <StepItem>Etape 02</StepItem>
                <StepItem>Etape 03</StepItem>
                <StepItem>Etape 04</StepItem>
            </nav>

            {/* Main content */}
            <main className="flex-grow max-w-5xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold mb-10">Choisissez votre offre !</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    {/* e-Billet */}
                    <OfferCard
                        title="e-Billet"
                        subtitle="Campo Grande"
                        price="3,99€"
                        details={[
                            "12 semaines pour lancer le visionnage de votre film",
                            "5 jours pour le voir et le revoir, à partir de la première lecture",
                        ]}
                        buttonText="Choisir l'e-billet"
                        onClick={() => alert("e-Billet choisi")}
                    />

                    {/* Pass Liberté */}
                    <OfferCard
                        title="Pass"
                        subtitle="liberté"
                        price="5,99€/mois"
                        details={[
                            "Sans engagement - 15 jours offerts.",
                            "Visionnez en illimité tous les films de la plateforme",
                        ]}
                        buttonText="Choisir le Pass Liberté"
                        onClick={() => alert("Pass Liberté choisi")}
                    />
                </div>

                {/* Code cadeau */}
                <div className="bg-gray-800 rounded shadow-md p-6 max-w-3xl mx-auto">
                    <div className="bg-black text-white px-4 py-2 font-bold mb-4 flex justify-between items-center">
                        <div>
                            Code cadeau<br />
                            <span className="text-sm font-normal">Campo Grande</span>
                        </div>
                        <div className="text-sm font-semibold lowercase">e-billet</div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                        <li>12 semaines pour lancer le visionnage de votre film</li>
                        <li>5 jours pour le voir et le revoir, à partir de la première lecture</li>
                    </ul>
                    <button
                        onClick={() => alert("Code cadeau activé")}
                        className="w-full bg-red-600 hover:bg-red-700 transition text-white font-bold py-3 rounded"
                    >
                        J'active mon code cadeau
                    </button>
                </div>
            </main>

            {/* Footer */}
            {/* <footer className="bg-gray-800 text-gray-300 text-xs py-4 mt-auto">
                <div className="max-w-5xl mx-auto flex justify-center space-x-6 uppercase font-bold tracking-wide">
                    <span>100% inédit</span>
                    <span>·</span>
                    <span>100% exclusif</span>
                    <span>·</span>
                    <span>100% cinéma</span>
                </div>
                <div className="max-w-5xl mx-auto mt-2 flex justify-between text-gray-400 text-[10px] px-2">
                    <span>e-cinema.com 2025 © Tous droits réservés</span>
                    <nav className="flex gap-4">
                        <a href="#" className="hover:underline">Mentions légales</a>
                        <a href="#" className="hover:underline">CGV</a>
                        <a href="#" className="hover:underline">Confidentialité</a>
                    </nav>
                </div>
            </footer> */}
        </div>
        // <BentoGridDemo />
    );
}

function StepItem({ children, active = false }) {
    return (
        <div
            className={`px-4 py-1 cursor-pointer ${active
                ? "bg-red-600 text-white font-bold"
                : "text-gray-400 hover:text-white transition"
                } rounded-sm`}
        >
            {children}
        </div>
    );
}

function OfferCard({ title, subtitle, price, details, buttonText, onClick }) {
    return (
        <div className="bg-gray-800 rounded shadow-md p-6 flex flex-col justify-between">
            <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                    <div>
                        <h2 className="text-xl font-bold">{title}</h2>
                        <div className="text-sm text-gray-400">{subtitle}</div>
                    </div>
                    <div className="text-2xl font-bold">{price}</div>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {details.map((d, i) => (
                        <li key={i}>{d}</li>
                    ))}
                </ul>
            </div>
            <button
                onClick={onClick}
                className="bg-red-600 hover:bg-red-700 transition rounded py-3 font-bold text-white"
            >
                {buttonText}
            </button>
        </div>
    );
}
