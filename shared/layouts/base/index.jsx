import { Footer } from '../footer/index';
import { Header } from '../header/index';
/* import { Nav } from '../nav/index';
 */
function Base({ destinations, packagetypes, children }) {
  return (
    <>
      <Header destinations={destinations} packagetypes={packagetypes} />
      <section>{children}</section>
      <Footer />
    </>
  );
}

export { Base };
