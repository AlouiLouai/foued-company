
import { Html, Head, Body, Container, Text, Section, Hr, Preview } from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
  discussion: string;
}

export const ContactFormEmail = ({ name, email, message, discussion }: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New contact form submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={section}>
          <Text style={heading}>New Contact Form Submission</Text>
          <Hr style={hr} />
          <Text style={paragraph}><strong>Name:</strong> {name}</Text>
          <Text style={paragraph}><strong>Email:</strong> {email}</Text>
          <Text style={paragraph}><strong>Message:</strong></Text>
          <Text style={paragraph}>{message}</Text>
          <Hr style={hr} />
          <Text style={heading}>Chatbot Discussion</Text>
          <Text style={paragraph}>{discussion}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const section = {
  padding: '24px',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '30px 0',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0 0 15px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};
