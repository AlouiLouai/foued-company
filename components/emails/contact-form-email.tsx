import { Html, Head, Body, Container, Text, Section, Hr, Preview, Img } from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
  discussion: string; // This is a JSON string
}

export const ContactFormEmail = ({ name, email, message, discussion }: ContactFormEmailProps) => {
  let parsedDiscussion: { [key: string]: string } = {};
  try {
    parsedDiscussion = JSON.parse(discussion);
  } catch (e) {
    console.error("Failed to parse discussion JSON", e);
  }

  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Text style={companyName}>Renovexium</Text>
          </Section>
          <Section style={contentSection}>
            <Text style={heading}>New Contact Form Submission</Text>
            <Hr style={hr} />
            <Text style={paragraph}><strong>Name:</strong> {name}</Text>
            <Text style={paragraph}><strong>Email:</strong> {email}</Text>
            <Text style={paragraph}><strong>Message:</strong></Text>
            <Text style={messageParagraph}>{message}</Text>
            <Hr style={hr} />
            <Text style={heading}>Chatbot Discussion</Text>
            {Object.keys(parsedDiscussion).length > 0 ? (
              Object.entries(parsedDiscussion).map(([question, answer], index) => (
                <div key={index}>
                  <Text style={questionParagraph}><strong>Q:</strong> {question}</Text>
                  <Text style={answerParagraph}><strong>A:</strong> {answer}</Text>
                  {index < Object.keys(parsedDiscussion).length - 1 && <Hr style={hr} />}
                </div>
              ))
            ) : (
              <Text style={paragraph}>No chatbot discussion available.</Text>
            )}
          </Section>
          <Section style={footerSection}>
            <Text style={footerText}>© {new Date().getFullYear()} Foued Company. All rights reserved.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  color: '#333',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  borderRadius: '8px',
  border: '1px solid #e6ebf1',
  maxWidth: '600px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
};

const logoSection = {
  padding: '20px',
  textAlign: 'center' as const,
  backgroundColor: '#007bff', // Primary color for header
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
};

const companyName = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#ffffff',
  margin: '0',
};

const contentSection = {
  padding: '24px',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '20px 0',
  color: '#007bff', // Primary color for headings
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 15px',
  color: '#555',
};

const messageParagraph = {
  ...paragraph,
  backgroundColor: '#f0f8ff', // Light blue background for message
  padding: '15px',
  borderRadius: '5px',
  border: '1px solid #e0e0e0',
};

const questionParagraph = {
  ...paragraph,
  fontWeight: 'bold',
  color: '#007bff', // Primary color for questions
};

const answerParagraph = {
  ...paragraph,
  marginLeft: '15px',
  borderLeft: '3px solid #eee',
  paddingLeft: '10px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footerSection = {
  padding: '20px',
  textAlign: 'center' as const,
  backgroundColor: '#f0f0f0',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px'
};

const footerText = {
  fontSize: '12px',
  color: '#888',
  margin: '0',
};