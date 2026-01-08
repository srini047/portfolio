"use server";

export async function sendEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const serviceID = process.env.EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceID || !templateID || !publicKey) {
    throw new Error("EmailJS configuration missing");
  }

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "srinikethcr7@gmail.com",
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }

  return { success: true };
}
