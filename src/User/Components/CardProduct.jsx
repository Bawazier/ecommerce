import React from "react";
import styled from 'styled-components';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import numeral from "numeral";
import StarRatingComponent from "react-star-rating-component";

const CardProduct = () => {
  return (
    <styles.CardOriginal body className="text-center">
      <styles.CardImg
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        alt="Card image cap"
      />
      <CardBody>
        <styles.PriceText className="h5">
          Rp.
          {numeral(2000000).format(0, 0).toString().replace(",", ".")}
          ,-
        </styles.PriceText>
        <CardTitle tag="h5">Product Name</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Store Name
        </CardSubtitle>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          starColor="#1bc29b"
          emptyStarColor="#102939"
          value={4}
          editable={false}
        />
      </CardBody>
      {/* <CardBody></CardBody> */}
    </styles.CardOriginal>
  );
};

const styles = {
  CardOriginal: styled(Card)`
    width: 100%;
    height: auto;
    background: transparent;
    border: 2px solid #102939;
    padding: 0;
    overflow: hidden;
  `,

  CardImg: styled(CardImg)`
    width: 100%;
    height: 200px;
  `,

  PriceText: styled(CardTitle)`
    color: #1bc29b;
    font-weight: bold;
  `,
};

export default CardProduct;
