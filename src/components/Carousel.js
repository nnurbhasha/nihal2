import React from "react";

import Card from "../components/Card";

import moneyManager from "../assets/images/moneyManager.jpg";
import stockForecaster from "../assets/images/stockForecaster.jpg";
import breastCancer from "../assets/images/breastCancer.jpg";
import nihal from "../assets/images/nihal.jpg";

//  not in tutorial
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    // array of items inside state; 4 objects in array
    this.state = {
      items: [
        {
          id: 0,
          title: "Money Manager",
          subtitle: "Organize personal finance",
          imgSrc: moneyManager,
          link: "https://nnurbhasha.github.io/money-manage/",
          selected: false,
        },
        {
          id: 1,
          title: "Stock Forecaster",
          subtitle: "Predcit closing price with ML algorithms",
          imgSrc: stockForecaster,
          link: "https://github.com/nnurbhasha/stock-forecaster",
          selected: false,
        },
        {
          id: 2,
          title: "Breast Cancer Detection",
          subtitle: "AI and natural image classification techniques",
          imgSrc: breastCancer,
          link: "x",
          selected: false,
        },

        {
          id: 3,
          title: "The Journal",
          subtitle: "A blog to clarify data quandries ",
          imgSrc: nihal,
          link: "https://github.com/garx",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  // function made this way so it doesn't have to bind later
  // "from the item, just give the id"
  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
