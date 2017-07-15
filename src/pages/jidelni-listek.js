import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import axios from 'axios';
import MenuItem from '../templates/menu-item';

class JidelniListek extends React.Component {

  render() {
    const { allFood } = this.props.data

    return (
      <div>
        <h1>Hi people</h1>
        <Link to='/'>Go back to the homepage</Link>
        {allFood.edges.map(({ node }) => <MenuItem key={node.id} id={node.id} name={node.name}></MenuItem>)}
      </div>
    )
  }
}

export default JidelniListek
export const pageQuery = graphql`
  query PageQuery {
    allFood {
      edges {
        node {
          id,
          weigth,
          price,
          description,
          name
        }
      }
    }
  }
`;