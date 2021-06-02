import styles from './index.module.scss';
import Image from 'next/image';

function BannerBlog({ title, description, image, alt }) {
  return (
    <div className={`position-relative pb-3 ${styles.banner}`}>
      <img
        src={image}
        className="img-fluid"
        alt={alt}
      // layout="fill"
      />
      <p>
        {alt}
      </p>
    </div>
  );
}

export { BannerBlog };
