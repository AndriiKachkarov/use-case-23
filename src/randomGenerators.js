// randomGenerators.js
import {faker} from '@faker-js/faker';

const ageCertifications = [
    "G", "PG", "PG-13", "R", "NC-17", "U", "U/A", "A", "S", "AL", "6", "9", "12", "12A", "15", "18",
    "18R", "R18", "R21", "M", "MA15+", "R16", "R18+", "X18", "T", "E", "E10+", "EC", "C", "CA", "GP",
    "M/PG", "TV-Y", "TV-Y7", "TV-G", "TV-PG", "TV-14", "TV-MA"
];

const roles = [
    "Director", "Producer", "Screenwriter", "Actor", "Actress", "Cinematographer",
    "Film Editor", "Production Designer", "Costume Designer", "Music Composer"
];

export function createRandomTitle() {
    const isMovie = faker.datatype.boolean();
    return {
        id: faker.number.int({max: 1000}),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        release_year: faker.date.between({from: '1920-01-01', to: '2023-01-01'}).getFullYear(),
        age_certification: faker.helpers.arrayElement(ageCertifications),
        runtime: faker.number.int({min: 60, max: 240}),
        genres: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.music.genre()).join('|'),
        production_country: faker.location.countryCode(),
        seasons: isMovie ? '' : faker.number.int({min: 1, max: 10})
    };
}

export function createRandomCredit(titleId) {
    return {
        id: faker.number.int({max: 1000}),
        title_id: titleId,
        real_name: faker.person.fullName(),
        character_name: faker.person.firstName(),
        role: faker.helpers.arrayElement(roles)
    };
}