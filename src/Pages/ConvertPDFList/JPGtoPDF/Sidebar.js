import React from 'react';
import style from "../../Pages.module.css";
import LoaderBackdrop from '../../../Common/Backdrop';

const Sidebar = ({
  open,
  fileList,
  handleUploadClick,
  sidebar,
  statusMessage,
  isMerging,
  error,
}) => {
  return (
    <>
      {/* Desktop */}
      <div className={style.tool__sidebar} id={style.sidebar}>
        <div
          className={`${style.option__panel} ${style["option__panel--active"]}`}>
          <div className={style.option__panel__title}>
            IMAGE TO PDF OPTIONS
          </div>

          <div className={style.option__panel__content}>
            <div className={style.info}>
              Please, select more images by clicking again on ’Select
              JPG images’. <br />
              Select multiple images by maintaining pressed ’Ctrl’
            </div>
          </div>
        </div>

        {isMerging && <LoaderBackdrop statusMessage={statusMessage} error={error} open={open} />}

        <button
          onClick={handleUploadClick}
          className={style["btn--red"]}
          id={style.processTask}
        >
          Convert to PDF
        </button>
      </div>

      {/* Mobile */}
      {sidebar && (
        <div className={style.mobile__sidebar}>
          <div id={style.mobileSidebar}>
            <div className={`${style.option__panel} ${style["option__panel--active"]}`}>
              <div className={style.option__panel__title}>
                IMAGE TO PDF OPTIONS
              </div>

              <div className={style.option__panel__content}>
                <div className={style.info}>
                  Please, select more images by clicking again on ’Select
                  JPG images’. <br />
                  Select multiple images by maintaining pressed ’Ctrl’
                </div>
              </div>

              {fileList.length >= 1 && (
                <>
                  {isMerging && (
                    <LoaderBackdrop statusMessage={statusMessage} error={error} open={open} />
                  )}

                  <button
                    onClick={handleUploadClick}
                    className={style["btn--red"]}
                    id={style.processTask}
                  >
                    Convert to PDF
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar;