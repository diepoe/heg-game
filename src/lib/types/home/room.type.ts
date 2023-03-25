export class Room {
    private name: string;
    private description: string;
    private exits: Map<string, Room>;
    private items: Item[];
    private level: number;
    private visited: boolean;

    constructor(name: string, description: string, level: number) {
        this.name = name
        this.description = description;
        this.exits = new Map<string, Room>();
        this.items = [];
        this.level = level;
        this.visited = false;
    }

}

export interface Item {
    name: string;
    weight: number;
    power: number;
    lives: number;
}