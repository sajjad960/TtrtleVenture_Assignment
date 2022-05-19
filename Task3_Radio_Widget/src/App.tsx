import React from 'react';
import './App.css';

//Components
import WidgetBody from './components/widgetBody/WidgetBody';
import WidgetFooter from './components/widgetFooter/WidgetFooter';
import WidgetHeader from './components/widgetHeader/WidgetHeader';


function App() {
  return (
    <div className="App">
      <main className="radio_widget_container">
        <WidgetHeader />
        <WidgetBody />
        <WidgetFooter />
      </main>
    </div>
  );
}

export default App;
