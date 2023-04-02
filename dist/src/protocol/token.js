import jwt from 'jsonwebtoken';
export const expiresIn = (token) => {
    const decoded = jwt.decode(token);
    if (typeof decoded === 'string') {
        return 0;
    }
    const now = Date.now() / 1000;
    return new Date((decoded?.['exp'] || now) * 1000).getTime() - now * 1000;
};
//# sourceMappingURL=token.js.map