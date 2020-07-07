export default {
  onUpdate: (registration: any) => {
    registration.unregister().then(() => {
      window.location.reload();
    });
  },
  onSuccess: (registration: any) => {
    console.info("service worker on success state");
    console.log(registration);
  },
};
