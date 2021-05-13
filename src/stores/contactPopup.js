import { writable } from 'svelte/store'

export const state = writable(false)
console.log(state)
