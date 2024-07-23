export default defineNuxtRouteMiddleware(() => {
  if (import.meta.server) {
    return;
  }
  const modals = document.querySelectorAll(".modal.show");
  if (modals) {
    modals.forEach(({ id }) => {
      UTILS.hideModal(id);
    });
  }
});
