import React from "react";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import Cta2 from "./components/Cta2";
import Logos from "./components/Logos";
import Features from "./components/Features";
import Testy from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { Switch, Link, Route } from "react-router-dom";
import Fake from "./components/Fake";
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Heading />
          <Hero />
          <Cta />
          <Features />
          <Pricing />
          <Cta2 />
          <Testy />
          <Footer />
        </Route>
        <Route path="/preorder" exact>
          <Fake />
        </Route>
      </Switch>
    </div>
  );
}
