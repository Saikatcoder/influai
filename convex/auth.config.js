export default {
  providers: [
    {
      // Clerk ka JWT issuer domain (Clerk dashboard se milega)
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",  // capital I aur D
    },
  ],
};
