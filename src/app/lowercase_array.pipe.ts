import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'lowercase_array'})
export class LowercaseArrayPipe implements PipeTransform {
    transform(value: string[], args: string[]): any {
        if (!value) return value;
        for (let i = 0;i < value.length; i++) {
            value[i] = value[i].toLowerCase();
        }
        return value;
    }
}