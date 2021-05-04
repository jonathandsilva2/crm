import Dashboard from './components/templates/Dashboard';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, dayTheme, nightTheme } from './globalStyles';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <GlobalStyle />
        <h1>Dashboard</h1>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
