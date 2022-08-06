export enum Size {
    Large,
    Medium,
    Small
}

export enum Base {
    Regular,
    Thin,
    Thick,
    Suffed
}

export class Product {
    id: number = -1;
    name: string = '';
    image: string = '';
    base: Base = Base.Regular;
    size: Size = Size.Large;
    price: number = 15;
}
