import { Helmet } from 'react-helmet-async';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import AccountBalance from '../AccountBalance';

function DashboardCrypto() {
  return (
    <>
      <Helmet>
        <title>Culture By Design</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <AccountBalance title={"Culture By Design"}/>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;