import { useMailer } from '#mailer';
// const nuxtApp = useNuxtApp()
const config = useRuntimeConfig();
const mailer = useMailer();
const transport = mailer.customTransporter({
  host: config.mailer.host,
  port: +config.mailer.port,
  auth: {
    user: config.mailer.user,
    pass: config.mailer.password
  }
});
const useMailTransporter = () => transport;
export default useMailTransporter;