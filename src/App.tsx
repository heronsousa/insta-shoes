import { Header } from './components/Header/index';
import { HomeBanner } from './components/HomeBanner/index';
import { Brands } from './components/Brands/index';
import { Promotions } from './components/Promotions/index';
import { Newsletter } from './components/Newsletter/index';

function App() {
  return (
    <>
      <Header />
      <HomeBanner />
      <Brands />
      <Promotions />
      <Newsletter />
    </>
  );
}

export default App;
