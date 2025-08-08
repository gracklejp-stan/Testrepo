import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Red Hat Dev Hub x IRS" subtitle="The Deployment Front Door">
      <HeaderLabel label="Enterprise Operations" value="Software Automation Services" />
    </Header>
    <Content>
      <ContentHeader title="Cloud Deployment Service">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Build With AWS">
            <Typography variant="body1">
              This is where you can get info and links to deploy with Amazon Web Services.
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <InfoCard title="Build With Azure">
            <Typography variant="body1">
              This is where you can get info and links to deploy with Microsoft Azure.
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <ExampleFetchComponent />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
