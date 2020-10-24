import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TopBar from "./components/TopBar";

const AppContainer: React.FC = () => {

    return (
        <AppBar position="static">
            <TopBar />
        </AppBar>
    );
  };
  
  export default AppContainer;