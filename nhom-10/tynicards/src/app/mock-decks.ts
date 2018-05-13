import { Card } from './card';
import { Deck } from './deck';

export const DECKS: Deck[] = [
{
    id: 1,
    title: 'Fruits',
    description: 'Good for health',
    cards: [
        {id: 1, front: 'mango', back: 'xoài'},
        {id: 2, front: 'orange', back: 'cam'},
        {id: 3, front: 'avocado', back: 'bơ'},
        {id: 4, front: 'grape', back: 'nho'},
        {id: 5, front: 'coconut', back: 'dừa'},
        {id: 6, front: 'mandarin', back: 'quýt'},
        {id: 7, front: 'lemon', back: 'chanh'},
        {id: 8, front: 'papaya', back: 'đu đủ'},
        {id: 9, front: 'durian', back: 'sầu riêng'},
        {id: 10, front: 'peach', back: 'đào'},
        {id: 11, front: 'longan', back: 'nhãn'},
        {id: 12, front: 'lyche', back: 'vải'},
        {id: 13, front: 'melon', back: 'dưa'},
        {id: 14, front: 'strawberry', back: 'dâu tây'}
    ]
},
{
    id: 2,
    title: 'Flowers',
    description: 'Life\'s beautiful',
    cards: [
        {id: 1, front: 'lily', back: 'hoa huệ'},
        {id: 2, front: 'daisy', back: 'hoa cúc'},
        {id: 3, front: 'orchid', back: 'hoa phong lan'},
        {id: 4, front: 'rose', back: 'hoa hồng'},
        {id: 5, front: 'water-rail', back: 'hoa đỗ quyên'},
        {id: 6, front: 'rose-mallow', back: 'hoa dâm bụt'},
        {id: 7, front: 'lotus', back: 'hoa sen'},
        {id: 8, front: 'camelia', back: 'hoa trà'},
        {id: 9, front: 'cherry blossom', back: 'hoa anh đào'},
        {id: 10, front: 'dahlia', back: 'hoa thược dược'},
        {id: 11, front: 'jasmine', back: 'hoa nhài'},
        {id: 12, front: 'heath-bell', back: 'hoa thạch thảo'}
    ]
},
{
    id: 3,
    title: 'Countries',
    description: 'Refresh your soul',
    cards: [
        {id: 1, front: 'America', back: 'Mỹ'},
        {id: 2, front: 'UK', back: 'Vương quốc Anh'}
    ]
},
{
    id: 4,
    title: 'Subjects',
    description: 'Refresh your soul',
    cards: [
        {id: 1, front: 'math', back: 'toán'},
        {id: 2, front: 'physics', back: 'vật lý'}
    ]
}
];
