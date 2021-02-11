import { Footer } from '../footer/index';
import { Header } from '../header/index';

function Base({ destinations, packagetypes, notifications, children }) {
  return (
    <>
      <Header
        destinations={destinations}
        notifications={notifications}
        packagetypes={packagetypes}
      />
      <section>{children}</section>
      <Footer />
    </>
  );
}

export { Base };
