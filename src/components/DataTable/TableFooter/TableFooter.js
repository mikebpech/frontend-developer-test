import React from 'react';
import './tableFooter.css';

import { Box, Button, CircularProgress, Grid, Typography } from '@material-ui/core';

const TableFooter = ({error, loading, fetchData: refetch}) => {
  return (
    <Box className="footerActions">
      <Grid justify="center" direction="column" alignItems="center" container>
        { error && (
          <Grid item>
            <Typography className="footerActions__error" color="error" variant="subtitle2">
              We had problems fetching your data. Please try again.
            </Typography>
          </Grid>
        ) }
        { loading ? (
          <Grid item>
            <CircularProgress />
          </Grid>
        ) : (
          <Grid item>
            <Button data-testid="load-button" color="primary" variant="contained" onClick={refetch}>{error ? 'Retry' : 'Load More'}</Button>
          </Grid>
        ) }
      </Grid>
    </Box>
  )
}

export default TableFooter;