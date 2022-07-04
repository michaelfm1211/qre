# qre
qre (quick redirect) is a stupid-simple URL shortener and is designed for those
who only care for simplicity. Redirects are stored in a redis database. The
redis-cli utility or anything else that can edit a redis database is needed to
add, remove, or edit redirects.

### Using
qre uses four environment variables:
- `PORT` controls the port qre will listen on
- `DATABASE_URL` specifies the URL of the redis database
- `TRUST_PROXY` should be set to `true` if qre is being run from behind a proxy
- `NO_LOGS` can be set to true to disable logging.

