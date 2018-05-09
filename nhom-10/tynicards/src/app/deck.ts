import { Card } from './card';
import { Lesson } from './lesson';

export class Deck {
    id:          number;
    title:       string;
    description: string;
    lessons: Lesson[];
}
