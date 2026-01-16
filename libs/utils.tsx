import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

/**
 * Merges Tailwind classes and handles conditional logic.
 * This prevents class conflicts (e.g., 'px-2 px-4' becomes 'px-4').
 */

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs));
}