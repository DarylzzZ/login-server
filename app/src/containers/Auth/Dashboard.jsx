import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Img from '../../assets/img/logo192.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const Dashboard = () => {
  const classes = useStyles()
  return (
    <Box
      style={{
        backgroundColor: '#e2e2e2',
        height: '100vh',
        boxSizing: 'border-box',
        padding: '50px'
      }}
    >
      <Grid container justify="center" spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper} justify="center">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Avatar
                alt="Remy Sharp"
                style={{ height: '80px', width: '80px' }}
                src={Img}
                className={classes.large}
              />
            </div>
            <p>boaol</p>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default connect(
  (state) => ({
    Auth: state.Auth
  }),
  {}
)(Dashboard)
