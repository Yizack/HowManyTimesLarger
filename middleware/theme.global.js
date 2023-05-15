export default defineNuxtRouteMiddleware(async () => {
  if (process.server) {
    return;
  }
  await CONFIG.load();
});
