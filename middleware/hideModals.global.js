export default defineNuxtRouteMiddleware(() => {
  if (process.server) {
    return;
  }
  const modals = document.querySelectorAll(".modal.show");
  if (modals) {
    modals.forEach(({ id }) => {
      hideModal(id);
    });
  }
});
