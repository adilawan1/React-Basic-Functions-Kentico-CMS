import { useEffect, useState } from "react";
import "./App.css";
import { Kentico } from "./Components/Kentico";
import parse from "html-react-parser";
import "./styles.css";
function App() {
  const [title, setTitle] = useState("");
  const [para, setPara] = useState("");
  const [url, setUrl] = useState("");
  const entry = async () => {
    await Kentico().then((response) => {
      setTitle(response.data.items[0].elements.title.value);
      setPara(response.data.items[0].elements.body.value);
      setUrl(response.data.items[0].elements.url.value);
    });
  };

  useEffect(() => {
    entry();
  });

  return (
    <div className="my_class">
      <div className=" white_disp main_disp">
        <h1 class="det">Title:</h1>
        <h1>{title}</h1>
        <h1 class="det">Body:</h1>
        <p>{parse(para)}</p>
        <h1 class="det">Url:</h1>
        <p>{url}</p>
      </div>
    </div>
  );
}

export default App;
