import React,{Fragment, useState} from "react";
import styles from "./Restaurant.module.css";
import Modal from "./../components/UI/Modal"
import Hotels from "../Hotels/Hotels";

const Restaurent = () => {

    const [restshown,setrestaurentHandler]=useState(false);

    const resttHandler =()=>{
        if(restshown)
            setrestaurentHandler(false);
        else    
            setrestaurentHandler(true);
    }
    

  return (
    <Fragment>
        {restshown && <Modal onClick={resttHandler}>
          <Hotels onClick={resttHandler}/>
          </Modal>}
        <div className={styles["m-hotel"]} onClick={resttHandler}>
        <span>Restaurents</span>
        </div>
    </Fragment>
  );
};

export default Restaurent;
