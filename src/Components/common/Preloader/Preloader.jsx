import React from "react";
import preloader from '../../../assets/images/preloader.svg'
import style from './Preloder.module.css'
const Preloader = () => {
  return (
    <>
    <div className={style.preloaderWrap}>
      <img src={preloader} alt="preloader" className={style.preloader}/>
    </div>
    </>
  )
}

export default Preloader