import type { Room } from '$lib/types/room.type';
import { writable, type Writable } from 'svelte/store';

export const roomID = writable("null")
export const currentRoomID = writable("null")
export const nextRoomID = writable("null")
export const rooms: Writable<Room[]> = writable([])