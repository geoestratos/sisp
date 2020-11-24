import React from "react";
import {
Button,
TextField,
Grid,
Paper,
Typography,
Link,
} from "@material-ui/core"
import '../assets/styles/Login.scss'

class Login extends React.Component {

  state = { 
      form:
        {
          username: "", 
          password:"", 
        } 
      }


  handleChange=e=> {
    this.setState({ 
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
    } 
  })

  }

  render() {
    return (
      <div>
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className="login__form"
            >
            <Paper
            variant="elevation"
            elevation={2}
            className="login__form-background"
            >
          <Grid item>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
          </Grid>
          <Grid item>
            <form onSubmit>
            <Grid container direction="column" spacing={2}>
            <Grid item>
            <TextField
            type="email"
            placeholder="Email"
            fullWidth
            name="username"
            variant="outlined"
            value={this.state.username}
            onChange={(e) =>
            this.setState({
            [e.target.name]: e.target.value,
            })
            }
            required
            autoFocus
            />
            </Grid>
          <Grid item>
            <TextField
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              variant="outlined"
              value={this.state.password}
              onChange={(e) =>
              this.setState({
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </Grid>
          <Grid item>
            <Button
            variant="contained"
            color="primary"
            type="submit"
            className="login__form-button"
            >
            Submit
            </Button>
          </Grid>
          </Grid>
          </form>
          </Grid>
          <Grid item>
          <Link href="#" variant="body2">
          Forgot Password?
          </Link>
          </Grid>
          </Paper>
          </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Login;