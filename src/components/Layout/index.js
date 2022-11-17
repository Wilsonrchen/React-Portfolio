import Home from "../Home";
import "./index.css";

const Layout = () => {
  return (
    <div className="App">
      <div className="page">
        <span className="tags top-tags">&lt; body &gt;</span>

        <Home />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt; /html &gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
