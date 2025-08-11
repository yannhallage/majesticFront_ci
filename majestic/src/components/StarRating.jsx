import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, maxRating = 5, size = 20 }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex items-center">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} fill="currentColor" className="text-yellow-400" size={size} />
            ))}
            {halfStar && (
                <div style={{ position: 'relative', width: size, height: size }}>
                    <Star key="half" fill="currentColor" className="text-gray-500" size={size} style={{ position: 'absolute' }} />
                    <div style={{ position: 'absolute', width: '50%', height: '100%', overflow: 'hidden' }}>
                        <Star key="half-fill" fill="currentColor" className="text-yellow-400" size={size} />
                    </div>
                </div>
            )}
            {[...Array(emptyStars)].map((_, i) => (
                <Star key={`empty-${i}`} fill="currentColor" className="text-gray-500" size={size} />
            ))}
        </div>
    );
};

export default StarRating;