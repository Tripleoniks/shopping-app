import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utils/formatCurrency';
import { useShoppingCart } from '../context/ShoppingContext';

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const StoreDetails = ({ id, name, price, image }: StoreItemsProps) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={image}
          height="200px"
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-4">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)} </span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaseItemQuantity(id)}
              >
                + Add to cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: '.5rem' }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: '.5rem' }}
                >
                  <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StoreDetails;
