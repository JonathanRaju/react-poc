import React from "react";
export default function Button({
  btnTxt,
  btnClr,
  btnFontColor,
  btnWidth,
  btnBorder,
  btnHeight,
  btnBorderradius
}) {
  return (
    <>
      <button
        style={{
          backgroundColor: btnClr,
          border: btnBorder,
          color: btnFontColor,
          borderRadius: btnBorderradius,
          width: btnWidth,
          height: btnHeight
        }}
      >
        {btnTxt}
      </button>
    </>
  );
}
