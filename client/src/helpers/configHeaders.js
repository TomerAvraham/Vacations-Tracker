export const configHeaders = () => {
  return {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    "x-access-token": JSON.parse(localStorage.getItem("accessToken")),
  };
};
