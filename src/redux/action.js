export const login = user => {
    return{
        type: "LOGIN_SUCCESSFUL",
        value: user
    }
}
export const logout = user => {
  return {
    type: "LOGOUT_SUCCESSFUL",
    value: user
  };
};
export const addBusiness = location => {
  return {
    type: "ADD_BUSINESS",
    value: location
  };
};
export const deleteBusiness = index => {
    return {
      type: "DELETE_BUSINESS",
      value: index
    };
  };


