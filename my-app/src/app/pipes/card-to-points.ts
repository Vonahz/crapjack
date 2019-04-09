import { Pipe, PipeTransform } from '@angular/core';
/*
 * Calculate cards to points
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | cardToPoints
 * Example:
 *   {{ Q }}
 *   formats to: 10
*/
@Pipe({ name: 'cardToPoints' })
export class CardToPointsPipe implements PipeTransform {

    transform(value: string): number {
        return isNaN(parseInt(value, 10)) ? 10 : parseInt(value, 10);
    }
}