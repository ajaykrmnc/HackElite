import React, { useState } from 'react';
import { Image, Button, Container, Row, Col } from 'react-bootstrap';

import { categories } from './Data/cateogries';
import { MenuList } from './Data/MenuList';

import IndividualItems from './IndItems';
import CategoriesItems from './cateogriesItems';

export default function Menu() {
  const [exactCategory, setExactCategory] = useState("Burgers");

  const switchCategory = (e) => {
    console.log(e.item);
    setExactCategory(e.item);
  }

  return (
    <>
      <CategoriesItems styleAColorHex={'#FF2C55'} uniqueCategory={categories.categories} exactCategory={exactCategory} switchCategory={switchCategory} />
      <Container fluid className="m-5 justify-content-center align-items-center">
        <Row>
          {MenuList.items.map((item, index) => (
            item.category === exactCategory && (
              <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                <IndividualItems currency={"SGD"} item={item} styleAColorHex={'#FF2C55'} />
              </Col>
            )
          ))}
        </Row>
      </Container>
      <Container fluid className="m-5 justify-content-center">
        <Row>
          <Col className="text-center">
            <Button bg={'grey'} variant="dark" onClick={() => {}}>
              Back
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
