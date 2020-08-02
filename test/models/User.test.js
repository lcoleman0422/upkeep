const {
    beforeAction,
    afterAction,
} = require('../setup/_setup');
const User = require('../../api/models/Users');

let user;

beforeAll(async () => {
    await beforeAction();
});

afterAll(() => {
    afterAction();
});

beforeEach(async () => {
    user = await User.create({
        userName: 'qa_auto',
        firstName: 'QA',
        lastName: 'Automation',
    });
});

test('User is created correctly', async () => {
    const sendUser = user.toJSON();
    // check if user is created
    expect(user.userName).toBe('qa_auto');
    expect(sendUser.firstName).toBe('QA');
    expect(sendUser.lastName).toBe('QA');
    await user.destroy();
});

test('User is updated correctly', async () => {
    await user.update({
        userName: 'automated',
    });
    // check that user name was updated 
    expect(user.username).toBe('automated');
    await user.destroy();
});
