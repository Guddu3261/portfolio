---
title: "JWT authentication in Node.js: a practical checklist"
date: "2026-10-05"
summary: "Short-lived access tokens, refresh tokens, and where to store them. The mistakes to avoid when securing a REST API."
tags: ["Node.js", "Security", "Authentication"]
---

JWTs are easy to start with and easy to get subtly wrong. Here is the checklist I keep in mind when securing a Node.js REST API.

## 1. Keep access tokens short-lived

An access token cannot be revoked once issued, so make its lifetime short (5–15 minutes) and pair it with a refresh token.

```js
import jwt from "jsonwebtoken";

const accessToken = jwt.sign(
  { sub: user.id, tenantId: user.tenantId, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: "15m", algorithm: "HS256" }
);
```

## 2. Always verify the algorithm

Pin the algorithm when verifying. Never accept whatever the token header claims.

```js
const payload = jwt.verify(token, process.env.JWT_SECRET, {
  algorithms: ["HS256"],
});
```

## 3. Use refresh tokens, and store them server-side

A refresh token lives longer (days or weeks). Store a **hash** of it in your database so you can:

- revoke a single device or session,
- rotate it on every use,
- detect reuse of an old token (a sign of theft).

## 4. Where to store tokens in the browser

| Storage | Risk |
| --- | --- |
| `localStorage` | Readable by any injected script (XSS) |
| `httpOnly` cookie | Not readable by JavaScript; needs CSRF protection |

For most web apps, an **`httpOnly`, `Secure`, `SameSite` cookie** is the safer default.

```js
res.cookie("refresh_token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});
```

## 5. Don't put secrets in the payload

A JWT is **signed, not encrypted**. Anyone can decode the payload. Keep it to IDs and roles, never passwords or personal health data.

## 6. Authorize on every request

Authentication answers *who are you?* Authorization answers *what may you do?* Check the role and the tenant on each route, not just at login.

```js
function requireRole(...roles) {
  return (req, res, next) =>
    roles.includes(req.user.role) ? next() : res.status(403).end();
}
```

## Quick checklist

- [x] Short-lived access token
- [x] Refresh token rotation, stored hashed
- [x] Pinned algorithm on verify
- [x] `httpOnly` cookies where possible
- [x] No sensitive data in the payload
- [x] Role and tenant checked per request
