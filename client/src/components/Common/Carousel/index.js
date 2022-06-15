// https://www.npmjs.com/package/react-material-ui-carousel

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Card, CardMedia } from "@mui/material";

export default function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "https://source.unsplash.com/random/800x300?nature,water",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "https://source.unsplash.com/random/800x300?nature,tree",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "https://source.unsplash.com/random/800x300?nature,flower",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "https://source.unsplash.com/random/800x300?nature,plant",
    },
  ];

  return (
    <Carousel animation="slide" navButtonsAlwaysVisible duration={800}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <Card>
        <CardMedia
          component="img"
          image={props.item.image}
          sx={{
            width: "100%",
          }}
        />
      </Card>
    </Paper>
  );
}
