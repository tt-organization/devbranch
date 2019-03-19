import { Menu } from './menu';

export class Truck {
    id: number;
    name: String; 
    location: number; //change to coordinates
    menu: Menu[];
    tags: String[];
    logo: ImageData;
}