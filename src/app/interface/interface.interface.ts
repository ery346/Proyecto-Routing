export interface valores {
    valorR: number,
    valorV: number,
    valorI: number,
    valorW: number,
    }

export interface obj {
    hipotenusa: number;
    catetoa: number;
    catetob: number;
}

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

