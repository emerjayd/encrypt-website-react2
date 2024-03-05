import gql from "graphql-tag"; // Or the modern equivalent from @apollo/client

const submitContactForm = gql`
  mutation submitContactForm($input: SubmitContactFormInput!) {
    submitContactForm(input: $input) {
      message
    }
  }
`;

export default submitContactForm;
