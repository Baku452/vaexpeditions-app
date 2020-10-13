import { Footer } from '../footer/index';
import { Header } from '../header/index';
/* import { Nav } from '../nav/index';
 */
function Base({ children }) {
  return (
    <>
      <Header />
      <section>{children}</section>
      <Footer />
    </>
  );
}

export { Base };
