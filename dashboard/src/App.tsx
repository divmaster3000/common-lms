import { capitalizeFirstLetter } from "@pet/utils";

function App() {
  const title = capitalizeFirstLetter("test my script");

  return (
    <>
      <p>{title}</p>
    </>
  );
}

export default App;
