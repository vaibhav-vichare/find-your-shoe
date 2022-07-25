import {IAnswer, IShoes} from '@/interfaces/QuizInterface';

export class ResultStoreObj {
    shoes: IShoes[] = [];
    userSelections: IAnswer[] = [];
}