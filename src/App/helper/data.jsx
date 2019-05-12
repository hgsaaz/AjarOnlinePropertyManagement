export const properties = [

    {
        id: 'p_100',
        name: 'House for sale',
        price: '100KD',
        imageUrl: "feature-pic1 set-bg feat1",
        propertyType: "SALE",
        loaction: "Al Rehab, Kuwait",
        ptClass: "sale-notic",
        squarefoot: "800",
        bedroom: "5",
        bathroom: "2",
        garage: "1",
        user:
        {
            name: 'Qasim',
            number: "99660389",
            days_ago: "1"
        },
        desp: "Apartment Super Deluxe consists of a hall 10x4 + master room 6.5x5.5 + two rooms including  " +
            "bathroom (size of the room 4x4) + kitchen 4x3.5 + master server " +
            "room 2x1.75 In addition to central heating and adaptation center and elevator and  " +
            "there is a guard suitable for a small family"
    },
    {
        id: 'p_101', name: 'House for Rent in Aldeleh', price: '200KD/Month',
        imageUrl: "feature-pic1 set-bg feat2", propertyType: "RENT", loaction: "Aldeleh, Kuwait",
        ptClass: "rent-notic", squarefoot: "400",
        bedroom: "4",
        bathroom: "1",
        garage: "1",
        user:
        {
            name: 'Al Shahid',
            number: "99774521",
            days_ago: "5"
        },
        desp: "Apartment ground Al-Zahra Two entrance to the apartment Master Master Room 2 rooms including bathroom | Lounge Fully equipped kitchen Maid room with bathroom Strat Elevator"
    },
    {
        id: 'p_102', name: 'Apartment for Sale in Al Raqi', price: '300KD',
        imageUrl: "feature-pic1 set-bg feat3", propertyType: "SALE", loaction: "Al Raqi, Kuwait",
        ptClass: "sale-notic", squarefoot: "900",
        bedroom: "7",
        bathroom: "3",
        garage: "2",
        user:
        {
            name: 'Wasim al rahed',
            number: "55785421",
            days_ago: "12"
        },
        desp: "For rent apartment in the friendly ground floor with a private entrance clean three rooms with a master bedroom with " +
            "bathroom (size of the room 4x4) + kitchen 4x3.5 + master server " +
            "there is a guard suitable for a small family"
    },
    {
        id: 'P_103', name: 'House for sale', price: '400KD', imageUrl: "feature-pic1 set-bg feat4",
        propertyType: "SALE", loaction: "Salwa, Kuwait",
        ptClass: "sale-notic", squarefoot: "1200",
        bedroom: "3",
        bathroom: "3",
        garage: "1",
        user:
        {
            name: 'Aziz Al wahab',
            number: "55452361",
            days_ago: "3"
        },
        desp: "New apartment (first inhabited) Balarmouk on the front of the new and distinctive house and a large area + large room" +
            "room 2x1.75 In addition to central heating and adaptation center and elevator and  "
    }
];

export const propertyTypeOptions = [
    { value: '0-200 KD', label: '0-200 KD' },
    { value: '200-300 KD', label: '200-300 KD' },
    { value: '300-400 KD', label: '300-400 KD' },
    { value: '400-500 KD', label: '400-500 KD' },
    { value: '500+ KD', label: '500+ KD' }
];

export const areaOptions = [
    { value: 'Aldeleh', label: 'Aldeleh' },
    { value: 'Salwa', label: 'Salwa' },
    { value: 'AlRaqi', label: 'Al Raqi' },
    { value: 'AlRehab', label: 'Al Rehab' }
];

export const propertyTypes = [
    { value: 'Land', label: 'Land' },
    { value: 'House', label: 'House' },
    { value: 'Flat', label: 'Flat' },
    { value: 'Charlet', label: 'Charlet' }
];

export const purposeOptions = [
    { value: 'Sell', label: 'Sell' },
    { value: 'Rent', label: 'Rent' },
];


export const regionOptions = [
    { value: 'Al Rehab', label: 'Al Rehab' },
    { value: 'Al Raqi', label: 'Al Raqi' },
    { value: 'Slavery', label: 'Slavery' }
];