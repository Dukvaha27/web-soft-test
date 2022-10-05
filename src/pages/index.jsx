import React, {useEffect, useState} from "react";
import Form from "../components/Form";
import "./pages.Styles.scss";
import Catalog from "./Catalog";
import Dialog from "../components/Dialog";
import useDeviceQualifer from "../hooks/useDeviceQualifer";
import useOpenDialog from "../store/services/app-services";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";

const Pages = () => {
  const { desktop } = useDeviceQualifer();
  const { openDialog } = useOpenDialog();
  const { pathname} = useLocation();
  const [parse, setParse] = useState(false);

  useEffect(() => {
      if(pathname === '/catalog'){
          setParse(true)
      }else{
          setParse(false)
      }
  },[pathname]);


  return (
    <>
      <Header/>
      <main>
        {(desktop && !parse) && <Form />}
        {(openDialog && !desktop) && (
            <Dialog>
              <Form />
            </Dialog>
        )}
        <Catalog />
      </main>
    </>
  );
};

export default Pages;
