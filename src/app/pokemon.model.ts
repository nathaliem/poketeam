export class Pokemon {
    constructor(
        private id: number,
        private name: string,
        private base_experience: number,
        private height: string,
        private weight: string,
        private order: number,
        private types: string[],
        private name_raw: string,
    ){}
}