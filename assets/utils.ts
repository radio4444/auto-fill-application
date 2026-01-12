import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

/**
 * Merges Tailwind classes and handles conditional logic.
 * This prevents class conflicts (e.g., 'px-2 px-4' becomes 'px-4').
 */

/**
 * @param inputs - A "Rest Parameter" (...) that collects all arguments into an array.
 * Each "ClassValue" can be a string, object, array, or even a boolean/null.
 * * Logic:
 * 1. The spread operator allows us to pass multiple arguments without brackets [].
 * 2. It accepts conditional logic (e.g., isActive && 'text-blue').
 * 3. Nullish values (false, null, undefined) are automatically filtered out by the utility.
 */
export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs));
}