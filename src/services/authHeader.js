export default function authHeader() {
  let usrStr = localStorage.getItem("user");
  const user = usrStr ? JSON.parse(usrStr) : null;

  if (usrStr && user) {
    // for Node.js Express back-end
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
