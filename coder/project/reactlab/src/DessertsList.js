function DessertsList(props) {
  // Implement the component here.
  const dessertName = props.data.filter(dessert => (dessert.calories)<500).sort((a,b) => a.calories - b.calories).map(dessert => {
    const dessertNameCal = `${dessert.name} - ${dessert.calories} cal.`;
    return <li>{dessertNameCal}</li>
  })
  return (
    <ul>{dessertName}</ul>
  );
}

export default DessertsList;
