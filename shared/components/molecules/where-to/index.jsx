/* eslint-disable react/jsx-key */
/* eslint-disable react/no-danger */
import { Tab, Tabs } from 'react-bootstrap';

import styles from './index.module.scss';

function WhereToItem({ id, title, items, content, thumbnail }) {
  return (
    <section className="row p-4">
      <div className="row">
        <div className={`col-7 ${id % 2 === 0 ? 'order-1' : 'order-2'}`}>
          {thumbnail != null ? (
            <img src={thumbnail} className="img-fluid" alt={title} />
          ) : (
            <img src="/images/colca.jpg" className="card-img-top" alt={title} />
          )}
        </div>
        <div className={`col-5 ${styles.texto} ${id % 2 === 0 ? 'order-2' : 'order-1'}`}>
          <h4 className="title">{title}</h4>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
      <div className="row p-5">
        {items.length > 0 ? (
          <Tabs defaultActiveKey={items[0].title}>
            {items.map(item => (
              <Tab eventKey={item.title} title={item.title}>
                <div>
                  <div
                    className="col-12 p-4"
                    dangerouslySetInnerHTML={{ __html: item?.content }}
                  />
                </div>
              </Tab>
            ))}
          </Tabs>
        ) : null}
      </div>
    </section>
  );
}

export { WhereToItem };
