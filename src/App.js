import Layout from './components/Layout'
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {  purple } from '@material-ui/core/colors';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: purple[50],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={outerTheme}>
        <Layout/>
      </ThemeProvider>
    </div>
  );
}

export default App;
