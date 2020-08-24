import React from "react";
import {Text} from 'react-native' 

export default (props) => {
  return (
    <>
      <Text>[inicio] Membros de familia:</Text>
      {props.children}
      <Text>[Fim] Membros da familia:</Text>
    </>
  );
};
