export class Pokemon {
    constructor(
        private id: number,
        public name: string,
        public base_experience: number,
        public height: string,
        public weight: string,
        public order: number,
        public types: string[],
        public name_raw: string,
    ){}
}