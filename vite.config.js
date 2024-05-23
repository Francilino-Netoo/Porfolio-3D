export default {
  // Set the base path for your application (optional)
  base: "/3d-portfolio/",

  // Server configuration
  server: {
    port: process.env.PORT || 5151, // Use the PORT environment variable or 5151
    host: true, // This will make the server accessible externally
  },
};
