import { useMediaQuery } from '@vueuse/core';

/**
 * Reactively tracks if the user wants animations (false) or not (true).
 */
export const prefersNoMotion = useMediaQuery('(prefers-reduced-motion)');

export const commonFormRules = [
  (val: string): boolean | string => val && val.length > 0 || 'Este campo no puede estar vacío'
];
