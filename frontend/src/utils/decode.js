import jwt_decode from 'jwt-decode';

const decodePayload = (payload) => {
  const obj = {userInfo: {}};
  const { exp, sub, email } = jwt_decode(payload.jwt);

  obj.token = payload.jwt
  obj.expiresAt = exp;
  obj.userInfo.email = email;
  obj.userInfo.id = sub;

  return obj;
}

export { decodePayload }