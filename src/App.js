import { Button, ConfigProvider } from 'antd';
import { Page } from './Page';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
          borderRadius: '8px',
        },
      }}
    >
      <Page/>
    </ConfigProvider>
  );
}

export default App;
