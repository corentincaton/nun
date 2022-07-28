module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b5fc71232e8f610ce42365c10aec5c60'),
  },
});
