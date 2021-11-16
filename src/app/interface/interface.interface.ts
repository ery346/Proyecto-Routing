export interface valores {
    valorR: number,
    valorV: number,
    valorI: number,
    valorW: number,
}
///////////////////////
export interface obj {
    hipotenusa: number;
    catetoa: number;
    catetob: number;
}
///////////////////////////
export interface Nasa {
    copyright:       string;
    date:            string;
    explanation:     string;
    hdurl:           string;
    media_type:      string;
    service_version: string;
    title:           string;
    url:             string;
}
//////////////////////////////
export interface Clima {
    coord:      Coord;
    weather:    Weather[];
    base:       string;
    main:       Main;
    visibility: number;
    wind:       Wind;
    clouds:     Clouds;
    dt:         number;
    sys:        Sys;
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}

export interface Clouds {
    all: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Main {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    humidity:   number;
    sea_level:  number;
    grnd_level: number;
}

export interface Sys {
    type:    number;
    id:      number;
    country: string;
    sunrise: number;
    sunset:  number;
}

export interface Weather {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

export interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}
///////////////////////////////

export interface Result {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}


export interface Personajes {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  null;
    prev:  null;
}

export interface Location {
    name: string;
    url:  string;
}
///////////////////////
