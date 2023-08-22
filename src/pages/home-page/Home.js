import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Home() {
  return (
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at eius aperiam temporibus esse veritatis in fugit ducimus minus. Explicabo rem repellat vero, laudantium beatae consequatur earum voluptatum quae ea!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis, sit itaque optio totam, excepturi obcaecati soluta voluptate alias, magnam aliquam reprehenderit libero est animi accusantium eum possimus dolores in!Lo
Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quis veniam eaque minus cumque aperiam odit vitae sed. Enim, sequi. Cum, incidunt quas. Maiores veritatis, voluptate iusto aliquid in officia.

          <Box
              component="main"
              sx={{
                  backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                          ? theme.palette.grey[100]
                          : theme.palette.grey[900],
                  flexGrow: 1,
                  height: '100vh',
                  overflow: 'auto',
              }}
          >
              <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                  <Grid container spacing={3}>
                      <Grid item xs={12} md={8} lg={9}>
                          <Paper
                              sx={{
                                  p: 2,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  height: 240,
                              }}
                          >
                          </Paper>
                      </Grid>
                      <Grid item xs={12} md={4} lg={3}>
                          <Paper
                              sx={{
                                  p: 2,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  height: 240,
                              }}
                          >
                          </Paper>
                      </Grid>
                      <Grid item xs={12}>
                          <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                          </Paper>
                      </Grid>
                  </Grid>
              </Container>
          </Box>
    </div>
  )
}

export default Home
