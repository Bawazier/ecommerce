import React from "react";
import { Button, Card, CardTitle, CardText } from "reactstrap";

const CardAddress = () => {
  return (
    <Card body>
      <CardTitle tag="h5">Andreas Jane</CardTitle>
      <CardText>
        Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
        Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab.
        Banyumas, 53181
      </CardText>
      <Button>Change address</Button>
    </Card>
  );
};

export default CardAddress;
