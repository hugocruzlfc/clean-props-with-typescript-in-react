import "./App.css";
import { ProductTile } from "./components/BasicProps";
import { ProductTile1 } from "./components/ChildrenProps";
import { Layout } from "./components/PasingJSX";
import { ProductTile3 } from "./components/PassingComponents";
import { ProminentProductTile } from "./components/PipingProps";
import { Button } from "./components/SpecificComponent";
import { ProminentProductTile1 } from "./components/SpreadingProps";
import { Icon } from "./components/Icon";

function App() {
  const sidebar = (
    <div>
      <a
        data-selected
        href="/shoes"
      >
        Shoes
      </a>
      <a href="/watches">Watches</a>
      <a href="/shirts">Shirts</a>
    </div>
  );
  return (
    <main>
      <ProductTile
        title="Componente 1"
        description="Description 1"
      />
      <hr />
      <ProductTile1 title="Componente 2">
        <div>Children 1</div>
        <div>Children 2</div>
      </ProductTile1>
      <hr />
      <ProminentProductTile
        color="red"
        title="Componente 3"
      />
      <hr />
      <ProminentProductTile1
        color="green"
        title="Componente 4"
      />
      <hr />
      <Layout
        title="Running shoes"
        sidebar={sidebar}
      >
        <h2>Componente 5</h2>
      </Layout>
      <hr />
      <ProductTile3 render={ProductTile} />
      <hr />
      <Button icon={Icon}>Componente 6</Button>
    </main>
  );
}

export default App;
