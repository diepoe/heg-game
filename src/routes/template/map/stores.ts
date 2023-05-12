import type { Room } from '$lib/types/room.type';
import { writable, type Writable } from 'svelte/store';

export const roomID = writable("cafeteria")
export const currentRoomID = writable("cafeteria")
export const nextRoomID = writable("schuelerfirma")
export const rooms: Writable<Room[]> = writable([])