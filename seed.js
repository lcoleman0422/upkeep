const Users = require('./api/models/Users');
const Friend = require('./api/models/friends');

const usersForTable = [
    {
        userName: 'JDoe',
        firstName: 'John',
        lastName: 'Doe'
    },
    {
        userName: 'JaDoe',
        firstName: 'Jane',
        lastName: 'Doe'
    },
    {
        userName: 'LColeman',
        firstName: 'Leo',
        lastName: 'Coleman'
    },
    {
        userName: 'SMorgan',
        firstName: 'Stephanie',
        lastName: 'Morgan'
    },
    {
        userName: 'WGrate',
        firstName: 'Will',
        lastName: 'Grate'
    },
    {
        userName: 'DManly',
        firstName: 'Dee',
        lastName: 'Manly'
    },
    {
        userName: 'VLeal',
        firstName: 'Veronica',
        lastName: 'Leal'
    },
    {
        userName: 'SBanks',
        firstName: 'Sarah',
        lastName: 'Banks'
    },
    {
        userName: 'KNior',
        firstName: 'Kira',
        lastName: 'Nior'
    },
    {
        userName: 'lfae',
        firstName: 'Lola',
        lastName: 'Fae'
    },
    {
        userName: 'KMonroe',
        firstName: 'Kelsi',
        lastName: 'Monroe'
    },
    {
        userName: 'Klopez',
        firstName: 'Korina',
        lastName: 'Lopez'
    },
    {
        userName: 'ADanger',
        firstName: 'Abella',
        lastName: 'Danger'
    },
]

const friendsForTable = [
    {
        UserId: 4,
        data: {
            ids: [2, 5, 6, 3]
        }
    },
    {
        UserId: 7,
        data: {
            ids: [3, 5, 6, 4]
        }
    },
    {
        UserId: 8,
        data: {
            ids: [2, 5, 6, 1],
        }
    },
    {
        UserId: 10,
        data: {
            ids: [2, 5, 6, 3],
        }
    },
];

//create seed data for app
(async () => {
    try {
        await Users.bulkCreate(usersForTable);
        await Friend.bulkCreate(friendsForTable);
        process.exit();
    } catch (err) { console.log(err); }
})();
