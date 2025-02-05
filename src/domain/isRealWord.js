import { WORDS } from "./words"

export function isRealWord(currentAttempt) {
    return WORDS.includes(currentAttempt)
}