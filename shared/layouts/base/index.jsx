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
  pixels,
}) {
  return (
    <>
      <Header
        destinations={destinations}
        notifications={notifications}
        packagetypes={packagetypes}
        packagesAll={packagesAll}
        pixels={pixels}
      />
      <section>{children}</section>
      <Footer continents={destinations} />
    </>
  );
}

export { Base };
