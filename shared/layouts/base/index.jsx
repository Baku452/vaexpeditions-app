// import { PopUp } from '@/components/index';

import { Footer } from '../footer/index';
import { Header } from '../header/index';

function Base({
  destinations,
  packagetypes,
  notifications,
  // popups,
  packagesAll,
  children,
}) {
  return (
    <>
      <Header
        destinations={destinations}
        notifications={notifications}
        packagetypes={packagetypes}
        packagesAll={packagesAll}
      />
      <section>{children}</section>
      <Footer continents={destinations} />
    </>
  );
}

export { Base };
