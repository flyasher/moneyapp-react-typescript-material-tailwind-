import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, Grid } from '@mui/material';
import * as dotenv from 'dotenv';
import TopBar from 'components/TopBar';
import BasicDateRangePicker from 'components/DaterangePicker';
import IncomePaidBy from 'components/reports/IncomePaidBy';
import IncomeByType from 'components/reports/IncomeByType';
import IncomeByPaymentMethod from 'components/reports/IncomeByPaymentMethod';
import { ComposedChart } from 'components/charts/ComposedChart';
dotenv.config({ path: __dirname + '/.env' });

const Dashboard: React.FC = () => {
  let token = '';
  const { user, getAccessTokenSilently } = useAuth0();
  const getToken = async () => {
    const a = await getAccessTokenSilently();
    token = a;
  };
  getToken();

  const copyToken = async () => {
    navigator.clipboard.writeText(`${token}`);
  };

  return (
    <>
      <TopBar />
      <Container maxWidth="xl">
        <h2>
          Welcome back, {user?.name} - {user?.email}
        </h2>
        <Button onClick={copyToken}>Copy Token</Button>
        <BasicDateRangePicker />
        <br></br>
        <Grid container spacing={4}>
          <Grid item lg={4} sm={4} xs={12}>
            <IncomePaidBy />
          </Grid>
          <Grid item lg={4} sm={4} xs={12}>
            <IncomeByType />
          </Grid>
          <Grid item lg={4} sm={4} xs={12}>
            <IncomeByPaymentMethod />
          </Grid>
          <ComposedChart />
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
