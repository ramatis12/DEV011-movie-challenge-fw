import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name :'movieFilter', 
}) 

export class FilterPipe implements PipeTransform{

    transform(values: any[], args: string): any[] {
        let result: string[] = [];

        for (const value of values) {
            if (value.indexOf(args) >-1) {
                result = [...result, value];
            }
        }
        return result;
    }
}