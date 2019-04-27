export class Truck {
    id: number;
    name: String;
    hours: Object[];
    location: String;
    menu: Object[];
    tags: String[];
    logo: ImageData;
    latitude: number;
    longitude: number;
}

export function initTruck(json: Object): Truck {
    var truck = new Truck();
    truck.id = json['Truck'][0]['Truck_ID'];
    truck.name = json['Truck'][0]['Truck_Name'];
    truck.location = json['Truck'][0]['Location'];
    truck.latitude = parseFloat(json['Truck'][0]['Latitude']);
    truck.longitude = parseFloat(json['Truck'][0]['Longitude']);
    truck.hours = [
        {
            day: "Sunday",
            open: json['Truck'][0]['Open_Sunday'],
            close: json['Truck'][0]['Close_Sunday']
        },
        {
            day: "Monday",
            open: json['Truck'][0]['Open_Monday'],
            close: json['Truck'][0]['Close_Monday']
        },
        {
            day: "Tuesday",
            open: json['Truck'][0]['Open_Tuesday'],
            close: json['Truck'][0]['Close_Tuesday']
        },
        {
            day: "Wednesday",
            open: json['Truck'][0]['Open_Wednesday'],
            close: json['Truck'][0]['Close_Wednesday']
        },
        {
            day: "Thursday",
            open: json['Truck'][0]['Open_Thursday'],
            close: json['Truck'][0]['Close_Thursday']
        },
        {
            day: "Friday",
            open: json['Truck'][0]['Open_Friday'],
            close: json['Truck'][0]['Close_Friday']
        },
        {
            day: "Saturday",
            open: json['Truck'][0]['Open_Saturday'],
            close: json['Truck'][0]['Close_Saturday']
        },
    ]
    return truck;
}