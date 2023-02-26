import React from "react";

export default function Boil(props) {
  if (props.temp >= 100) return <div>Boiling</div>;
  else return <div>Not Boiling</div>;
}
