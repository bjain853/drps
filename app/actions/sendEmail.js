'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.EMAIL_API);


export async function sendEmail({ metal, name, company, email, message }) {

    const { error, data } = await resend.emails.send({
        from: "delivered@resend.dev",
        to: "bjain853@gmail.com",
        subject: `Enquiry for ${metal}`,
        template: {
            id: 'metal-enquiry-confirmation',
            variables: {
                METAL_NAME: metal,
                SENDER_NAME: name,
                SENDER_COMPANY: company,
                SENDER_EMAIL: email,
                MESSAGE: message,
                TIMESTAMP: Date.now().toString()
            }
        }
    }
    );

    if (error) {
        console.log(error);
        return { success: false, error };
    }
    console.log("Succesfully sent the email");
    return { success: true, data };

}
