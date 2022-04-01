import React, { Suspense } from "react";
import './App.css';
import image from './image/image.jpg'
import Preloader from "./utils/preloader/preloader";

const Routers = React.lazy(() => import("./route/Routers"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Preloader/>}>
        <img src={image} alt=''/>
        <Routers />
      </Suspense>
    </div>
  );
}

export default App;
