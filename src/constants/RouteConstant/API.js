const API = {
  BASE_URL: 'http://127.0.0.1:3001',
  signUpUser: 'auth/signup',
  getUserByCode: 'auth/invite-code',
  updateUserAtSignup: 'auth/update-signup',
  getUserDetailsByToken: 'auth/get-profile-by-token',
  getUserInfo: '/users/info',
  getUsers: '/api/v1/users',
  inviteUser: '/api/v1/users/send-invite',
  getInvitedUsers: '/api/v1/users/invited',
};

export default API;
