import React from 'react'
import { config } from '../../config'
import { Card, Button, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Tag from '../Tag'
import { useDispatch, } from 'react-redux'
import { toggleTags } from '../../app/features/Product/actions'
import { formatRupiah } from '../../utils'

export default function CardProduct({ item, onAddToCart }) {
  console.log(item);
  const dispatch = useDispatch();
  return (
    <Card style={{ padding: '20px' }}>
      <Card.Img variant="top" src={`${config.api_host}/images/products/${item.image_url}`} style={{ maxHeight: '180px' }} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.category.name}</Card.Subtitle>
        <Tag items={item.tags} onClick={tag => dispatch(toggleTags(tag))} />
        <br />
        <Card.Text>
          {formatRupiah(item.price)}
        </Card.Text>
        <div></div>
        <Row>
          <Button variant="primary" onClick={() => onAddToCart()}>
            <FontAwesomeIcon icon={solid('cart-plus')} />+ Tambahkan Keranjang
          </Button>
        </Row>
      </Card.Body>
    </Card>
  )
}
