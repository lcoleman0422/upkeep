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

})


test('Created | Deleted', async () => {
    const sendUser = user.toJSON();
    // check if user is created
    expect(sendUser.userName).toBe('qa_auto');
    expect(sendUser.firstName).toBe('QA');
    expect(sendUser.lastName).toBe('Automation');
    await user.destroy();
});


test('Updated | Deleted', async () => {
    user.userName = "automated";
    await user.save();
    const sendUser = user.toJSON();
    // check that user name was updated 
    expect(sendUser.userName).toBe('automated');
    await user.destroy();
});



