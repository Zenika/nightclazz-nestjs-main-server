db.disableFreeMonitoring();
db.createUser({
  user: 'lifeguard',
  pwd: 'zenika',
  roles: [{ role: 'read', db: 'store' }],
});
