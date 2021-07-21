import Layout from './components/Layout'
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: purple[50],
    },
  },
});

const innerTheme = createTheme({
  palette: {
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={outerTheme}>
        <Layout>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/about">
              about
                </Route>
                <Route path="/users">users
                </Route>
                <Route path="/">home
                </Route>
              </Switch>
            </div>
          </Router>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
