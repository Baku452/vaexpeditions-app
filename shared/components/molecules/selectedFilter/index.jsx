import React, { useState} from 'react';
import styles from './index.module.scss';

function SelectedFilter ({items}) {
    const [listItems, setItems] = useState(items);
    return (
        <div className={`${styles.container}`}>
        {
            items.map(
                item => (
                    <div className={`${styles.box} col`}>
                        {item}
                    </div>
                )
            )
        }
        </div>
    )
}


export {SelectedFilter};