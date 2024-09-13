import "./styles.css";
import { useState } from "react";
import Button from "./Button";
import JSZip from "jszip";
import { saveAs } from "file-saver";
export default function CreateButton() {
  const [code, setCode] = useState(``);
  const [btnName, setBtnName] = useState(false);
  const [showOut, setShowOut] = useState(false);
  const [btnTxt, setBtnTxt] = useState("");
  const [btnColor, setBtnColor] = useState("");
  const [btnFontColor, setBtnFontColor] = useState("");
  const [btnWidth, setBtnWidth] = useState();
  const [btnWidthInUnits, setBtnWidthInUnits] = useState();
  const [btnHeight, setBtnHeight] = useState();
  const [btnHeightInUnits, setBtnHeightInUnits] = useState(`${btnHeight}px`);
  const [btnBorderSize, setBtnBorderSize] = useState();
  const [btnBorderUnits, setBtnBorderUnits] = useState();
  const [btnBorderType, setBtnBorderType] = useState();
  const [btnBorderSizeUnits, setBtnBorderSizeUnits] = useState("none");
  const [btnBorderradius, setBtnBorderradius] = useState();
  const [btnBorderRadiusInUnits, setBtnBorderRadiusInUnits] = useState();
  const [btnProps, setBtnProps] = useState({});

  const handleBtnBorder = (e) => {
    setBtnBorderSizeUnits(
      `${btnBorderSize}${btnBorderUnits} ${btnBorderType} ${e.target.value}`
    );
  };
  const handleElementCode = () => {
    let content = ` 
    import React from 'react';

    const Button = () => {

      const styles = () => {return( {
        backgroundColor: "${btnColor}",
        border: "${btnBorderSizeUnits}",
        color: "${btnFontColor}",
        borderRadius: "${btnBorderRadiusInUnits}",
        width:"${btnWidthInUnits}",
        height: "${btnHeightInUnits}"
      })}
      
    return(
    <button
          style={styles()}
        >
          ${btnTxt}
      </button>
    )}

    export default Button
    `;
    setCode(
      ` 
      <button
            style={{
              backgroundColor: "${btnColor}",
              border: "${btnBorderSizeUnits}",
              color: "${btnFontColor}",
              borderRadius: "${btnBorderRadiusInUnits}",
              width:"${btnWidthInUnits}",
              height: "${btnHeightInUnits}"
            }}
          >
            ${btnTxt}
          </button>
      `
    );

    const blob = new Blob([content], { type: "text/javascript" });

    // Create a link element
    const link = document.createElement("a");

    // Create a URL for the Blob and set it as the href for the link
    link.href = URL.createObjectURL(blob);

    // Set the download attribute with the desired filename
    link.download = "example.js";

    // Append the link to the document body (not visible to the user)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up and remove the link
    document.body.removeChild(link);
  };
  const handleButton = () => {
    const contentParent = `
      import React, { useState } from "react";
      import Button from "./Button";
      export default function Parent() {
        return (
          <div className="App">
            <Button
            btnTxt="${btnTxt}" 
            btnClr="${btnColor}"
            btnFontColor="${btnFontColor}"
            btnBorder="${btnBorderSizeUnits}"
            btnHeight="${btnHeightInUnits}"
            btnWidth="${btnWidthInUnits}"
            btnBorderradius="${btnBorderRadiusInUnits}"
          />
          </div>
        );
      }
    `;

    const contentChild = `
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
    `;
    const zip = new JSZip();

    // Add the files to the zip
    zip.file("Button.js", contentChild);
    zip.file("App.js", contentParent);

    // Generate the zip file and trigger the download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "component.zip"); // Save the zip as "components.zip"
    });
    // const blobOne = new Blob([contentParent], { type: "text/javascript" });

    // // Create a link element
    // const linkOne = document.createElement("a");

    // // Create a URL for the Blob and set it as the href for the link
    // linkOne.href = URL.createObjectURL(blobOne);

    // // Set the download attribute with the desired filename
    // linkOne.download = "parent.js";

    // // Append the link to the document body (not visible to the user)
    // document.body.appendChild(linkOne);

    // // Programmatically click the link to trigger the download
    // linkOne.click();

    // // Clean up and remove the link
    // document.body.removeChild(linkOne);

    // const blobTwo = new Blob([contentChild], { type: "text/javascript" });

    // // Create a link element
    // const linkTwo = document.createElement("a");

    // // Create a URL for the Blob and set it as the href for the link
    // linkTwo.href = URL.createObjectURL(blobTwo);

    // // Set the download attribute with the desired filename
    // linkTwo.download = "child.js";

    // // Append the link to the document body (not visible to the user)
    // document.body.appendChild(linkTwo);

    // // Programmatically click the link to trigger the download
    // linkTwo.click();

    // // Clean up and remove the link
    // document.body.removeChild(linkTwo);

//     setCode(`

//   <!------------------ Parent Component ----------------->
//     import React, { useState } from "react";
//     import Button from "./Button";
//     export default function Parent() {
//       return (
//         <div className="App">
//           <Button
//           btnTxt="${btnTxt}" 
//           btnClr="${btnColor}"
//           btnFontColor="${btnFontColor}"
//           btnBorder="${btnBorderSizeUnits}"
//           btnHeight="${btnHeightInUnits}"
//           btnWidth="${btnWidthInUnits}"
//           btnBorderradius="${btnBorderRadiusInUnits}"
//         />
//         </div>
//       );
//     }
    
// <! --------------------Child Component--------------------------- >

//     import React from "react";
//     export default function Button({
//       btnTxt,
//       btnClr,
//       btnFontColor,
//       btnWidth,
//       btnBorder,
//       btnHeight,
//       btnBorderradius
//     }) {
//       return (
//         <>
//           <button
//             style={{
//               backgroundColor: btnClr,
//               border: btnBorder,
//               color: btnFontColor,
//               borderRadius: btnBorderradius,
//               width: btnWidth,
//               height: btnHeight
//             }}
//           >
//             {btnTxt}
//           </button>
//         </>
//       );
//     }
    
//     `);
    setBtnProps({
      btnTxt,
      btnColor,
      btnFontColor,
      btnWidth,
      btnHeight,
      btnBorderSizeUnits,
      btnBorderradius,
    });
    setBtnName(false);
    setShowOut(true);
  };
  const handleWithCssFile = () => {
    const cssContent = `
    .button {
      background-color: ${btnColor};
      color: ${btnFontColor};
      border: ${btnBorderSizeUnits};
      border-radius: ${btnBorderRadiusInUnits};
      width: ${btnWidthInUnits};
      height: ${btnHeightInUnits};
    }

   
  `;
    const contentButton = `
    import React from "react";
    import 'style.css'
    export default function Button() {
      return (
        <>
          <button className='button'>
            ${btnTxt}
          </button>
        </>
      );
    }
    `;
    const zip = new JSZip();

    // Add the files to the zip
    zip.file("Button.js", contentButton);
    zip.file("style.css", cssContent);

    // Generate the zip file and trigger the download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "components.zip"); // Save the zip as "components.zip"
    });
  };
  return (
    <div className="App">
      <button onClick={() => setBtnName(true)} variant="primary">
        Add Button
      </button>
      {btnName ? (
        <div>
          <input
            placeholder="Enter button name"
            onChange={(e) => setBtnTxt(e.target.value)}
          />
          <br />
          Select Background Color
          <input
            type="color"
            placeholder="Background Color"
            onChange={(e) => setBtnColor(e.target.value)}
          />
          <br />
          Select Font Color
          <input
            type="color"
            placeholder="Font Color"
            onChange={(e) => setBtnFontColor(e.target.value)}
          />
          <br />
          <input
            placeholder="Width"
            onChange={(e) => setBtnWidth(e.target.value)}
          />
          <select
            onChange={(e) => setBtnWidthInUnits(btnWidth + e.target.value)}
          >
            <option>Units</option>
            <option>px</option>
            <option>%</option>
            <option>em</option>
            <option>rem</option>
          </select>
          <br />
          <input
            placeholder="Height"
            onChange={(e) => setBtnHeight(e.target.value)}
          />
          <select
            onChange={(e) => setBtnHeightInUnits(btnHeight + e.target.value)}
          >
            <option>Units</option>
            <option>px</option>
            <option>%</option>
            <option>em</option>
            <option>rem</option>
          </select>
          <br />
          <input
            placeholder="Border size"
            onChange={(e) => setBtnBorderSize(e.target.value)}
          />
          <select onChange={(e) => setBtnBorderUnits(e.target.value)}>
            <option>Units</option>
            <option>px</option>
            <option>%</option>
            <option>em</option>
            <option>rem</option>
          </select>
          <select onChange={(e) => setBtnBorderType(e.target.value)}>
            <option>Type</option>
            <option>solid</option>
            <option>dotted</option>
            <option>double</option>
            <option>dashed</option>
          </select>
          <input
            type="color"
            placeholder="Font Color"
            onChange={(e) => handleBtnBorder(e)}
          />
          <br />
          <input
            placeholder="Border radius"
            onChange={(e) => setBtnBorderradius(e.target.value)}
          />
          <select
            onChange={(e) =>
              setBtnBorderRadiusInUnits(btnBorderradius + e.target.value)
            }
          >
            <option>Units</option>
            <option>px</option>
            <option>%</option>
          </select>
          <br />
          <button onClick={handleButton}>
            Generate code for ReUsable component
          </button>
          <button onClick={handleWithCssFile}>With Css File</button>
          <button onClick={handleElementCode}>Generate code element</button>
        </div>
      ) : null}
      {btnTxt !== "" ? (
        <Button
          btnTxt={btnTxt}
          btnClr={btnColor}
          btnFontColor={btnFontColor}
          btnBorder={btnBorderSizeUnits}
          btnHeight={btnHeightInUnits}
          btnWidth={btnWidthInUnits}
          btnBorderradius={btnBorderRadiusInUnits}
        />
      ) : null}
      <p style={{ whiteSpace: "pre", textAlign: "left" }}>{code}</p>
    </div>
  );
}
