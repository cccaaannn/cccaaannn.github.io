import JOKES from '@/hooks/useProgrammingJoke/jokes';
import { useEffect, useRef, useState } from 'react'

const getRandomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
}

const DEFAULT_JOKE = JOKES[0];
const JOKE_ROUTE = "/home";

interface useProgrammingJokeOptions {
    currentRoute: string
}

const useProgrammingJoke = (options: useProgrammingJokeOptions) => {

    const isFirstRender = useRef(true);
    const [jokes, setJokes] = useState<string[]>(JOKES.filter(joke => joke !== DEFAULT_JOKE));
    const [currentJoke, setCurrentJoke] = useState(DEFAULT_JOKE);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (options.currentRoute === JOKE_ROUTE) {
            const jokeIndex = getRandomNumber(jokes.length);

            setCurrentJoke(jokes[jokeIndex]);
            setJokes(prev => {
                if (prev.length === 1) {
                    return [...JOKES];
                }
                return prev.filter((_, i) => i !== jokeIndex);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options.currentRoute]);

    return currentJoke;
}

export default useProgrammingJoke;
