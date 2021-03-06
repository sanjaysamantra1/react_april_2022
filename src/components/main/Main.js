import React from "react";
import AjaxCRUD from "../ajax/AjaxCRUD";
import AjaxDemo1 from "../ajax/AjaxDemo1";
import AjaxDemo2 from "../ajax/AjaxDemo2";
import AjaxDemo3 from "../ajax/AjaxDemo3";
import AjaxDemo4 from "../ajax/AjaxDemo4";
import AjaxDemo5 from "../ajax/AjaxDemo5";
import AjaxDemo6 from "../ajax/AjaxDemo6";
import AjaxDemo7 from "../ajax/AjaxDemo7";
import AjaxDemo8 from "../ajax/AjaxDemo8";
import Parent from "../communication/Parent";
import Demo2 from "../demo/Demo2";
import EventDemo1 from "../events/EventDemo1";
import EventDemo2 from "../events/EventDemo2";
import EventDemo3 from "../events/EventDemo3";
import EventDemo4 from "../events/EventDemo4";
import EventDemo5 from "../events/EventDemo5";
import EventDemo6 from "../events/EventDemo6";
import FormDemo1 from "../form/FormDemo1";
import FormDemo2 from "../form/FormDemo2";
import FormDemo3 from "../form/FormDemo3";
import RefDemo1 from "../form/RefDemo1";
import RefDemo2 from "../form/RefDemo2";
import RefDemo3 from "../form/RefDemo3";
import FetchDemo1 from "../hooks/FetchDemo1";
import FetchDemo2 from "../hooks/FetchDemo2";
import Counter from "../hooks/getSnapShotBeforeUpdateDemo1";
import MountingDemo1 from "../hooks/MountingDemo1";
import UpdatingDemo1 from "../hooks/UpdatingDemo1";
import UseEffectDemo1 from "../hooks/UseEffectDemo1";
import MemoDemo1 from "../memo/MemoDemo1";
import MyParent from "../memo/MyParent";
import UseCallBackDemo from "../memo/UseCallBackDemo";
import UseMemoDemo from "../memo/UseMemoDemo";
import Calculator1 from "../state/Calculator1";
import Calculator2 from "../state/Calculator2";
import UserList from "../props/UserList";
import Greet from "../greet/Greet";
import StateDemo1 from "../state/StateDemo1";
import StateDemo2 from "../state/StateDemo2";
import StateDemo3 from "../state/StateDemo3";
import StateDemo4 from "../state/StateDemo4";
import ToggleDemo from "../state/ToggleDemo";
import ForceUpdateDemo1 from "../forceUpdate/ForceUpdateDemo1";
import ArrayDemo4 from "../ListItems/ArrayDemo4";
import ArrayDemo2 from "../ListItems/ArrayDemo2";
import ArrayDemo3 from "../ListItems/ArrayDemo3";
import ArrayDemo1 from "../ListItems/ArrayDemo1";
import Conditional3 from "../conditional/Conditional3";
import Conditional2 from "../conditional/Conditional2";
import Conditional1 from "../conditional/Conditional1";
import Addition1 from "../addition/Addition1";
import Demo1 from "../demo/Demo1";
import "./Main.css";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import AboutUs from "../aboutus/AboutUs";
import ContactUs from "../contactus/ContactUs";
import NotFound from "../notfound/NotFound";
import ProductList from "../productlist/ProductList";
import ProductDetails from "../productlist/ProductDetails";

export default function Main() {
  return (
    <div className="main">
      {/* <div>This is Main Component</div>
      <Addition1></Addition1> */}
      {/* <Demo1></Demo1> */}
      {/* <Demo2></Demo2> */}
      {/* <Conditional1></Conditional1> */}
      {/* <Conditional2></Conditional2> */}
      {/* <Conditional3></Conditional3> */}
      {/* <ArrayDemo1></ArrayDemo1> */}
      {/* <ArrayDemo2></ArrayDemo2> */}
      {/* <ArrayDemo3></ArrayDemo3> */}
      {/* <ArrayDemo4></ArrayDemo4> */}
      {/* <ForceUpdateDemo1></ForceUpdateDemo1> */}
      {/* <Greet name="sachin" msg="good evening" flag={true}>
        <>
          <h1>Text from Parent</h1>
          <h1>Text 2 from Parent</h1>
          <h1>Text 3 from Parent</h1>
        </>
      </Greet>
      <Greet name="rahul" msg="good evening" flag={false}></Greet>
      <Greet name="ramesh" flag></Greet> */}
      {/* <UserList></UserList> */}
      {/* <StateDemo1></StateDemo1> */}
      {/* <StateDemo2></StateDemo2> */}
      {/* <StateDemo3></StateDemo3> */}
      {/* <StateDemo4></StateDemo4> */}
      {/* <ToggleDemo></ToggleDemo> */}
      {/* <Calculator1></Calculator1> */}
      {/* <Calculator2></Calculator2> */}
      {/* <EventDemo1></EventDemo1> */}
      {/* <EventDemo2></EventDemo2> */}
      {/* <EventDemo3></EventDemo3> */}
      {/* <EventDemo4></EventDemo4> */}
      {/* <EventDemo5></EventDemo5> */}
      {/* <EventDemo6></EventDemo6> */}
      {/* <Parent></Parent> */}
      {/* <MemoDemo1></MemoDemo1> */}
      {/* <UseMemoDemo></UseMemoDemo> */}
      {/* <UseCallBackDemo></UseCallBackDemo> */}
      {/* <MyParent></MyParent> */}
      {/* <MountingDemo1 color='blue'></MountingDemo1> */}
      {/* <FetchDemo1></FetchDemo1> */}
      {/* <UpdatingDemo1></UpdatingDemo1> */}
      {/* <UseEffectDemo1 a={11}></UseEffectDemo1> */}
      {/* <Counter></Counter> */}
      {/* <FetchDemo2></FetchDemo2> */}
      {/* <RefDemo1></RefDemo1> */}
      {/* <RefDemo2></RefDemo2> */}
      {/* <RefDemo3></RefDemo3> */}
      {/* <FormDemo1></FormDemo1> */}
      {/* <FormDemo2></FormDemo2> */}
      {/* <FormDemo3></FormDemo3> */}
      {/* <AjaxDemo1></AjaxDemo1> */}
      {/* <AjaxDemo2></AjaxDemo2> */}
      {/* <AjaxDemo3></AjaxDemo3> */}
      {/* <AjaxDemo4></AjaxDemo4> */}
      {/* <AjaxDemo5></AjaxDemo5> */}
      {/* <AjaxDemo6></AjaxDemo6> */}
      {/* <AjaxDemo7></AjaxDemo7> */}
      {/* <AjaxDemo8></AjaxDemo8> */}
      {/* <AjaxCRUD></AjaxCRUD> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
