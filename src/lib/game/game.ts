class Room {
	private name: string;
	private description: string;
	private nextRoom: Room | undefined;

	private hintToFind: String;

	constructor(name: string, description: string, hintToFind: string) {
		this.name = name;
		this.description = description;

		this.hintToFind = hintToFind;
	}

	getName() {
		return this.name;
	}

	getDescription() {
		return this.description;
	}
	getNextRoom() {
		return this.nextRoom;
	}
	getHint() {
		return this.hintToFind;
	}

	setNextRoom(nextRoom: Room) {
		if (this.nextRoom != undefined && nextRoom != null) {
			this.nextRoom = nextRoom;
		}
	}
}

export { Room };
