import React from "react";
import { Button } from "@mui/material";
import { AiOutlineSetting } from "react-icons/ai";
import Navbar from "../../../Components/Navbar/Navbar";
import style from "../../Pages.module.css";
import SkeletonLoader from "../../../Components/SkeletonLoader/SkeletonLoader";
import useUnlockLogic from "./UnlockLogic";
import ViewPdf from "../../../ViewPdf/ViewPdf";
import Sidebar from "./Sidebar";

const UnlockPDF = () => {
  const { files,
    pageNumber,
    open,
    fileList,
    loading,
    sidebar,
    unlockData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error } = useUnlockLogic();

  if (!unlockData) {
    return null;
  }

  const { title, subTitle, button } = unlockData;

  return (
    <>
      <Navbar />

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className={style.main} key={unlockData.id}>
          <div className={style.tool}>
            <div className={style.tool__workarea} id="workArea">
              <div className={style.tool__header}>
                <h4
                  className={style.tool__header__title}>
                  {title}
                </h4>
                <p
                  className={style.tool__header__subtitle}>
                  {subTitle}
                </p>
              </div>

              {/* Toggle button */}
              <div className={style.side_btn}>
                <button className={style.toggle__btn} onClick={toggleCart}>
                  <AiOutlineSetting />
                </button>
              </div>

              {/* Select file button */}
              <div id="uploader" className={style.uploader}>
                <Button variant="contained" component="label" id={style.pickFiles} title={button}>
                  <input type="file" multiple onChange={handleFileChange} accept=".pdf" />
                  <span>{button}</span>
                </Button>
              </div>

              {/* For view Pdf */}
              <ViewPdf pageNumber={pageNumber} files={files} />
            </div>

            {/* Sidebar */}
            {fileList.length >= 1 && (
              <Sidebar
                open={open}
                fileList={fileList}
                handleUploadClick={handleUploadClick}
                sidebar={sidebar}
                statusMessage={statusMessage}
                isMerging={isMerging}
                error={error}
              />
            )}
          </div>
        </div>
      )}

      {/* Footer  */}
      <div className={style.footer}>
        <div className={style.footer__copy}>{unlockData.footer}</div>
      </div>
    </>
  );
};

export default UnlockPDF;