import React from "react";
import propTypes from "prop-types";
// import styled from 'styled-components'

const withMainLayout = Component =>
  function WithMainLayout(props) {
    return (
      <>
        <div>Soy un header</div>
        <Component {...props} />
        <div>FOoter</div>
      </>
    );
  };

withMainLayout.defaultProps = {};

withMainLayout.propTypes = {};

export default withMainLayout;
