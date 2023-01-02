import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const card = ({ id, workerName, version, desc, isSwitchEnable }) => (
  <React.Fragment>
    <CardContent
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        p: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          m: '8px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            alignSelf: 'stretch',
          }}
        >
          <Box>
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 4.13878L16.9667 2.97767L15.8056 0.444336L14.6445 2.97767L12.1112 4.13878L14.6445 5.29989L15.8056 7.83323L16.9667 5.29989L19.5 4.13878Z"
                fill="#CECFD1"
              />
              <path
                d="M8.94444 6.67213C10.1689 6.67213 11.1611 7.66435 11.1611 8.88879C11.1611 10.1132 10.1689 11.1055 8.94444 11.1055C7.72 11.1055 6.72778 10.1132 6.72778 8.88879C6.72778 7.66435 7.72 6.67213 8.94444 6.67213ZM8.94444 16.1721C12.0794 16.1721 15.3833 17.7132 15.3833 18.3888V19.5499H2.50556V18.3888C2.50556 17.7132 5.80944 16.1721 8.94444 16.1721ZM8.94444 4.66657C6.61167 4.66657 4.72222 6.55602 4.72222 8.88879C4.72222 11.2216 6.61167 13.111 8.94444 13.111C11.2772 13.111 13.1667 11.2216 13.1667 8.88879C13.1667 6.55602 11.2772 4.66657 8.94444 4.66657ZM8.94444 14.1666C6.12611 14.1666 0.5 15.581 0.5 18.3888V20.4999C0.5 21.0805 0.975 21.5555 1.55556 21.5555H16.3333C16.9139 21.5555 17.3889 21.0805 17.3889 20.4999V18.3888C17.3889 15.581 11.7628 14.1666 8.94444 14.1666Z"
                fill="#CECFD1"
              />
            </svg>
          </Box>
          <Box sx={{ mx: '10px', flexGrow: '1' }}>
            <Typography variant="h5" component="div">
              {workerName}
            </Typography>
          </Box>
          <Box>
            {isSwitchEnable ? (
              <Switch {...label} defaultChecked />
            ) : (
              <Switch {...label} />
            )}
          </Box>
        </Box>
        <Typography
          sx={{ alignSelf: 'stretch' }}
          variant="body1"
          color="text.secondary"
        >
          {version} {bull} 4 Feb 2022
        </Typography>
        <Typography sx={{ alignSelf: 'stretch' }} variant="body1">
          {desc}
        </Typography>
      </Box>
    </CardContent>
    <CardActions
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        p: '8px',
        m: '8px',
        alignSelf: 'stretch',
      }}
    >
      <Button size="small">
        Details
        <Box sx={{ ml: '10px', mt: '5px' }}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00016 0.333374L5.82516 1.50837L10.4752 6.16671H0.333496V7.83337H10.4752L5.82516 12.4917L7.00016 13.6667L13.6668 7.00004L7.00016 0.333374Z"
              fill="#0E6BF1"
            />
          </svg>
        </Box>
      </Button>
    </CardActions>
  </React.Fragment>
);

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function CollapsedBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          Solution Catalog
        </Link>
        <Typography color="text.primary">Workers</Typography>
      </Breadcrumbs>
    </div>
  );
}
export default function BasicCard() {
  const cardDetails = [
    {
      workerName: 'Evelyn',
      version: '1.2',
      desc: 'Evelyn is a top expert in BSA/OFAC requirements, with a passion for adverse media monitoring, name screening and sanction screening.',
      isSwitchEnable: true,
      id: '123qwe',
    },
    {
      workerName: 'Darryl',
      version: '1.2',
      desc: 'Verify an account applicant’s identity through submitted documentation and data faster with WorkFusion® Intelligent Automation.',
      isSwitchEnable: true,
      id: '123abc',
    },
    {
      workerName: 'Tara',
      version: '1.0',
      desc: 'Tara is a top OFAC / AML expert who is laser-focused on keeping your transactions risk-free.',
      isSwitchEnable: false,
      id: '123dfg',
    },
  ];
  const CardMap = cardDetails.map((item) => {
    return <CustomCard key={item.id} {...item} />;
  });
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        m: '24px',
        py: '24px',
        px: '0px',
      }}
    >
      <CollapsedBreadcrumbs />
      <Typography sx={{ my: '20px' }} variant="h5" component="div">
        Worker
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
          justifyContent: 'space-between',
        }}
      >
        {CardMap}
      </Box>
    </Box>
  );
}
function CustomCard(props) {
  return (
    <Card
      sx={{
        minWidth: 275,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexGrow: '1',
        mr: '24px',
      }}
      variant="outlined"
    >
      {card(props)}
    </Card>
  );
}
