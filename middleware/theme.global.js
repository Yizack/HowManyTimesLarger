export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) {
    return;
  }
  await CONFIG.load();
});
