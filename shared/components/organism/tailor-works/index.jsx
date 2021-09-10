import styles from './index.module.scss';

function TailorWork({}) {
  const items = [
    {
      label: 'Design your own itinerary',
      icon: '/icons/tm1.svg ',
    },
    {
      label: 'Complete Flexibility',
      icon: '/icons/tm2.svg ',
    },
    {
      label: 'Choose your grade of accommodation',
      icon: '../icons/tm3.svg ',
    },
    {
      label: 'Dedicated team of tailor-made specialists',
      icon: '/icons/tm4.svg ',
    },
    {
      label: 'Choose your meals, excursions & guides',
      icon: '/icons/tm5.svg ',
    },
    {
      label: 'Choose where, when, what and how',
      icon: '/icons/tm6.svg ',
    },
  ];
  return (
    <div className="container">
      <h3 className="font-weight-regular text-center fs-30 pb-lg-5 pb-md-3">
        How does a Tailor-made works?
      </h3>
      <div className="row px-lg-5 px-md-1 pb-3 mx-lg-5 mx-md-2">
        {items.map(item => (
          <div className={`p-3 col-6 col-md-6 col-lg-4 ${styles.item}`}>
            <i className={styles.img}>
              <img src={item.icon} />
            </i>
            <p className={`${styles.title}`}>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { TailorWork };
