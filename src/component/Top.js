import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div style={{ marginTop: 20 }}>
      <Header as="h1" style={{ display: 'flex', justifyContent: 'center' }}>
        MIZZU
      </Header>
      <Gnb></Gnb>
    </div>
  );
}
