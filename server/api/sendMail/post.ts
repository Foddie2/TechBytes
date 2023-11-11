import useMailTransporter from "~/composables/useMailTransporter";

export default defineEventHandler(async (event) => {
    const mailTransporter = useMailTransporter();
    const body = await readBody(event);
    const { subject, text, from_address, to_address } = body;
  
    const response = await mailTransporter.sendMail({
      from: from_address,
      to: to_address,
      subject,
      text,
    });
    if(response.accepted.length) {
      "Message sent successfully"
    }
  });
  