import storeItems from '../data/items.json';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Fragment } from 'react';
import StoreDetails from '../components/StoreDetails';

const Store = () => {
  return (
    <div>
      <Fragment>
        <h1>Store</h1>
        <Row>
          {storeItems.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <StoreDetails {...item} />
            </Col>
          ))}
        </Row>
      </Fragment>
    </div>
  );
};

export default Store;
