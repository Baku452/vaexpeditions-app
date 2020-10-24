import { Footer } from '../footer/index';
import { Header } from '../header/home';

function Home({ destinations, banners, packagetypes, interests, children }) {
  return (
    <>
      <Header
        destinations={destinations}
        banners={banners}
        packagetypes={packagetypes}
        interests={interests}
      />
      <section>{children}</section>
      <Footer />
    </>
  );
}

export { Home };
