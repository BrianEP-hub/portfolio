export interface Services {
    service?: string,
    description?: string,
    icon?: string,
}

export interface Projects {
    name?: string,
    link?: string,
    description?: string,
    repo?: string,
    image?: string,
}

export interface Skills {
    name?: string,
    value?: number
}

export interface Info {
    name?: string,
    position?: string,
    description?: string,
    image?: string,
}

export interface Eductaion {
    title?: string,
    time?: string,
    programme?: string,
    school?: string,
}

export interface Experience {
    company?: string,
    country?: string,
    time?: string,
    title?: string, 
    description?: string,
}