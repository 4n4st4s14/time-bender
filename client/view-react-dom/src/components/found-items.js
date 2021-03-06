import React from 'react';
import xImage from './x.svg';
class FoundItems extends React.Component {
  render() {
    let foundItems;
    let image;
    if (this.props.items) {
      foundItems = this.props.items.map( (item, index) => {
        if (index < 3) {

          if (this.props.visible[index] === 'inactive') {
            image = item.consoleImage;
          } else {
            image = xImage;
          }

          return (
            <div className="found-item" key={ item.title }>
              <img src={ image } alt={ item.title } />
            </div>
          );
        } else {
          return null;
        }
      });
    }


    return (
      <div className="game-view-container">
        { foundItems }
      </div>
    );
  }
};

export default FoundItems;
