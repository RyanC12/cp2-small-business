export const login = user => {
    return{
        type: "LOGIN_SUCCESSFUL",
        value: user
    }
}
export const deleteBusiness = index => {
    return {
      type: "DELETE_BUSINESS",
      value: index
    };
  };