import { Card } from './card';
import { Deck } from './deck';

export const DECKS: Deck[] = [
{
    id: 1,
    title: 'Fruits',
    description: 'Good for health',
    lessons: [
    {
        id: 1,
        cards: [
            {id: 1, front: 'mango', back: 'xoài', box: 0},
            {id: 2, front: 'orange', back: 'cam', box: 0},
            {id: 3, front: 'avocado', back: 'bơ', box: 0},
            {id: 4, front: 'grape', back: 'nho', box: 0},
            {id: 5, front: 'coconut', back: 'dừa', box: 0}
        ]
    },
    {
        id: 2,
        cards: [
            {id: 6, front: 'mandarin', back: 'quýt', box: 0},
            {id: 7, front: 'lemon', back: 'chanh', box: 0},
            {id: 8, front: 'papaya', back: 'đu đủ', box: 0},
            {id: 9, front: 'durian', back: 'sầu riêng', box: 0},
            {id: 10, front: 'peach', back: 'đào', box: 0}
        ]
    },
    {
        id: 3,
        cards: [
            {id: 11, front: 'longan', back: 'nhãn', box: 0},
            {id: 12, front: 'lyche', back: 'vải', box: 0},
            {id: 13, front: 'melon', back: 'dưa', box: 0},
            {id: 14, front: 'strawberry', back: 'dâu tây', box: 0}
        ]
    }
    ]
},
{
    id: 2,
    title: 'Flowers',
    description: 'Life\'s beautiful',
    lessons: [
        {
            id: 1,
            cards: [
                {id: 1, front: 'lily', back: 'hoa huệ', box: 0},
                {id: 2, front: 'daisy', back: 'hoa cúc', box: 0},
                {id: 3, front: 'orchid', back: 'hoa phong lan', box: 0},
                {id: 4, front: 'rose', back: 'hoa hồng', box: 0},
                {id: 5, front: 'water-rail', back: 'hoa đỗ quyên', box: 0}
            ]
        },
        {
            id: 2,
            cards: [
                {id: 6, front: 'rose-mallow', back: 'hoa dâm bụt', box: 0},
                {id: 7, front: 'lotus', back: 'hoa sen', box: 0},
                {id: 8, front: 'camelia', back: 'hoa trà', box: 0},
                {id: 9, front: 'cherry blossom', back: 'hoa anh đào', box: 0},
                {id: 10, front: 'dahlia', back: 'hoa thược dược', box: 0}
            ]
        },
        {
            id: 3,
            cards: [
                {id: 11, front: 'jasmine', back: 'hoa nhài', box: 0},
                {id: 12, front: 'heath-bell', back: 'hoa thạch thảo', box: 0}
            ]
        }
    ]
}
];
