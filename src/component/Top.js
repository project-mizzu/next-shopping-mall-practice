import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <Header
        as="h1"
        style={{ display: 'flex', justifyContent: 'center', margin: 50 }}
      >
        MIZZU
      </Header>
      <Gnb></Gnb>
    </div>
  );
}
