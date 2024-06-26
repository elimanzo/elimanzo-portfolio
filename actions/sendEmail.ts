'use server';

import { Resend } from 'resend';

import React from 'react';

import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, isValidInput } from '@/util/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!isValidInput(senderEmail, 500)) {
    return { error: 'Invalid sender email' };
  }

  if (!isValidInput(message, 5000)) {
    return { error: 'Invalid message' };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: '96manzo.eli@gmail.com',
      subject: 'Message from porfolio contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return {
    data,
  };
};
