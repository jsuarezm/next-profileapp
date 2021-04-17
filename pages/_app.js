import { Amplify } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import awsExports from "../src/aws-exports";

Amplify.configure({...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyAuthenticator>
      <Component {...pageProps} />
    </AmplifyAuthenticator>)
};

export default MyApp
