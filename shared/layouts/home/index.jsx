import { Footer } from '../footer/index';
import { Header } from '../header/home';

function Home({ destinations, banners, packagetypes, children }) {
  return (
    <>
      <Header destinations={destinations} banners={banners} packagetypes={packagetypes} />
      <section>{children}</section>
      <Footer />
    </>
  );
}

export { Home };
