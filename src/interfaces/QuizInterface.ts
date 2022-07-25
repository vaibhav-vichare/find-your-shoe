export interface IQuiz {
    shoes: IShoes[];
    questions: IQuestion[];
}

export interface IShoes {
    id: string;
    name: string;
    rating: number;
}

export interface IQuestion {
    id: number;
    copy: string;
    answers: IAnswer[];
}

export interface IAnswer {
    id: number;
    copy: string;
    nextQuestion: number;
    ratingIncrease: any;
}