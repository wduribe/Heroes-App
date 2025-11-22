import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { FavoritesHeroesSchema, type Hero } from "@/types/hero";

interface FavoriteHeroContext {
    // State
    favorites: Hero[],
    favoritesCount: number,

    // Methods
    isFavorite: (hero: Hero) => boolean,
    toggleFavorite: (hero: Hero) => void,

}

const getFavoritesFromLocalstorage = (): Hero[] => {
    let favorites = localStorage.getItem('favorites');

    if (!favorites) {
        favorites = '[]';
    }

    const result = FavoritesHeroesSchema.safeParse(JSON.parse(favorites));

    if (result.error) {
        return [];   
    }

    return result.data;
    
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalstorage());

    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.some(h => h.id === hero.id);
        if (heroExist) {
            setFavorites(favorites.filter(h => h.id !== hero.id));
            return;
        }
        setFavorites([...favorites, hero]);
    }

    const isFavorite = (hero: Hero) => {
        return favorites.some(h => h.id === hero.id);
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoriteHeroContext
            value={{ favorites, toggleFavorite, favoritesCount: favorites.length, isFavorite }}
        >
            {children}
        </FavoriteHeroContext>
    )
}
