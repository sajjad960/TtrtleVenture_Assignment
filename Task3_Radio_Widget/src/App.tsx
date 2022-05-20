import React from 'react';
import './App.css';
import { Provider } from 'react-redux';


//Components
import WidgetBody from './components/widgetBody/WidgetBody';
import WidgetFooter from './components/widgetFooter/WidgetFooter';
import WidgetHeader from './components/widgetHeader/WidgetHeader';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <main className="radio_widget_container">
          <WidgetHeader />
          <WidgetBody />
          <WidgetFooter />
        </main>
        <Provider />
    </div>
  );
}

export default App;
