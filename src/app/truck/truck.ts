import { Menu } from './menu';

export class Truck extends Object {
    id: number;
    name: String; 
    hours: String[];
    location: number; //change to coordinates
    menu: Menu[];
    tags: String[];
    logo: ImageData;
}