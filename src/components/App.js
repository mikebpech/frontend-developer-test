import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import api from '../lib/api';

import DataTable from './DataTable/DataTable';

export const App = () => {  
  return (
    <Container maxWidth="md" className="app">
      <Box data-testid="app-box" m={2}>
        <DataTable diffName="User" apiCall={api.getUsersDiff} data-testid="datatable" />
      </Box>
      <Box data-testid="app-box" m={2}>
        <DataTable diffName="Project" apiCall={api.getProjectsDiff} data-testid="datatable" />
      </Box>
    </Container>
  );
};

export default App;
