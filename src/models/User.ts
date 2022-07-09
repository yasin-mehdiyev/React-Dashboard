interface User {
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
};

interface UserModel {
    user: User,
};

export default UserModel;