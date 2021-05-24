import styles from './index.module.scss';

function TailorWork({ }) {
    const items = [
        {
            label: "Design your own itinerary",
            icon: "/icons/tm1.svg "
        },
        {
            label: "Complete Flexibility",
            icon: "/icons/tm2.svg "
        },
        {
            label: "Choose your grade of accommodation",
            icon: "../icons/tm3.svg "
        },
        {
            label: "Dedicated team of tailor-made specialists",
            icon: "/icons/tm4.svg "
        },
        {
            label: "Choose your meals, excursions & guides",
            icon: "/icons/tm5.svg "
        },
        {
            label: "Choose where, when, what and how",
            icon: "/icons/tm6.svg "
        }
    ]
    return (
        <div class="container">
            <h3 className="font-weight-regular text-center fs-30 pb-5">How does a Tailor-made works?</h3>
            <div class="row px-5 mx-5">
                {
                    items.map(item => (
                        <div className={`col-lg-4 col-sm-12 ${styles.item}`}>

                            <i className={styles.img}>
                                <img src={item.icon}>
                                </img>
                            </i>
                            <p className={`${styles.title}`}>{item.label}</p>
                        </div>
                    )
                    )
                }
            </div>
        </div>

    );
}

export { TailorWork }