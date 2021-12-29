module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ea82d1b125c88857e1e0b1a7e157a824'),
  },
});
