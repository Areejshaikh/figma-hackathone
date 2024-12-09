
import LaedingPage from "./components/home/page";

import Reactangular from "./components/rectangular/page";
import HappyClient from "./components/productstyle/page";
import TopSelling from "./components/topselling/page";
import OurCustomer from "./components/customer/page";

export default function Home() {
  return (
<div>
<LaedingPage/>
<Reactangular/>
<TopSelling/>
<HappyClient/>
<OurCustomer/>
</div>
  );
}
