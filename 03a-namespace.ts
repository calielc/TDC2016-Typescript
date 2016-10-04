export namespace Beverage {
    export interface Beverage {
        name: string;
    }

    abstract class Alcoholic implements Beverage {
        constructor(public name: string, public abv: number) {

        }
    }

    function mixIngridients(ingredients: any[]): any {
        return ingredients.join('+');
    };

    export class Beer extends Alcoholic {
        constructor(public name: string, public abv: number, public ibu: number) {
            super(name, abv);
        }

        public brew(): string {
            return 'brewing: ' + mixIngridients(['water', 'hop', 'barley', 'love', 100]);
        }
    }

    export enum WineType {
        Red, White, Pink, Sparkling
    }

    export class Wine  extends Alcoholic {
        constructor(public name: string, public abv: number, public type: WineType) {
            super(name, abv);
        }
    }
}