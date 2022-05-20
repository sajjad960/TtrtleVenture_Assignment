import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'



//Components
import WidgetBody from './components/widgetBody/WidgetBody';
import WidgetFooter from './components/widgetFooter/WidgetFooter';
import WidgetHeader from './components/widgetHeader/WidgetHeader';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main className="radio_widget_container">
          <WidgetHeader />
          <WidgetBody />
          <WidgetFooter />
        </main>
      </div>
    </Provider>
  );
}

export default App;
