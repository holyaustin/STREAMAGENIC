import React, { useEffect }  from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout2';
import Mintfile from 'components/Mintfile';
//import Web3ui from 'components/web3ui';
//import A from 'components/Authenticator';
//import { AuthProvider, useAuth } from "@w3ui/react-keyring";
//import { UploaderProvider } from "@w3ui/react-uploader";
// import logo from "./logo.png";

export default function AddFile() {

    function IdentityLoader ({ children }) {
        const { loadDefaultIdentity } = useAuth()
        // eslint-disable-next-line
        useEffect(() => { loadDefaultIdentity() }, []) // try load default identity - once.
        return children
      }
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Add new file"
          description="add a new file"
        />
            <Mintfile />
        </IdentityLoader>
      </UploaderProvider>
    </AuthProvider>





        

      </Layout>
    </ThemeProvider>
  );
}