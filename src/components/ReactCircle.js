import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ReactCircle.css";

const ReactCircle = () => {
  //   const bluePercentage = 66; //specifies percentage for blue circle
  //   const purplePercentage = 33; //specifies percentage for red circle
  return (
    // <div>
    //   <div style={{ width: 200, height: 200 }}>
    //     <CircularProgressbar
    //       value={bluePercentage}
    //       text={`${bluePercentage}%`}
    //     />
    //   </div>
    //   <div style={{ width: 200, height: 200 }}>
    //     <CircularProgressbar
    //       value={redPercentage} //completion value of the progressbar
    //       text={`${redPercentage}%`} // test to display inside the progressbar
    //       strokeWidth={5} //width of circular line relative to total width of component, a value from 0-100. Default: 8
    //       styles={buildStyles({
    //         rotation: 0.5, // so the colored line rotates 50% (range: 0 - 1). Rotation of path and trail
    //         textSize: "10px", //changes text size
    //         strokeLinecap: "round", //so corners are rounded, "butt" makes corners flat

    //         // Colours
    //         pathColor: "red",
    //         textColor: "red", //text color becomes red
    //         trailColor: "green", // color of rest of color
    //       })}
    //     />
    //   </div>
    // </div>
    <div className="more-space">
      {/* <div style={{ width: 200, height: 200 }}> */}
      {/* <div style={{ width: 400 }} className="circle-spacing"> */}
      {/* <div style={{ width: "40%" }} className="circle-spacing"> */}
      <div className="">
        <div className="circle-spacing circle-width">
          <CircularProgressbarWithChildren
            value={30}
            //   text={`${9}%`}
            strokeWidth={3}
            styles={buildStyles({
              rotation: 0.5,
              // textSize: "10px",
              pathColor: "#d24dff",
              // textColor: "#595959",
              trailColor: "#f2f2f2",
            })}
          >
            {/* <div style={{ width: "70%" }}> */}
            <div style={{ width: "88%" }}>
              <CircularProgressbarWithChildren
                value={30}
                //   text={`${12}%`}
                strokeWidth={3.1}
                styles={buildStyles({
                  rotation: 0.5,
                  // textSize: "10px",
                  pathColor: "#7300e6",
                  // textColor: "#595959",
                  trailColor: "#f2f2f2",
                })}
              >
                <div style={{ width: "88%" }}>
                  <CircularProgressbarWithChildren
                    value={40}
                    //   text={`${12}%`}
                    strokeWidth={3.5}
                    styles={buildStyles({
                      rotation: 0.5,
                      // textSize: "10px",
                      pathColor: "#8080ff",
                      // textColor: "#595959",
                      trailColor: "#f2f2f2",
                    })}
                  >
                    <div style={{ width: "85%" }}>
                      <CircularProgressbarWithChildren
                        value={60}
                        //   text={`${12}%`}
                        strokeWidth={4}
                        styles={buildStyles({
                          rotation: 0.5,
                          // textSize: "10px",
                          pathColor: "#66ffe0",
                          // textColor: "#595959",
                          trailColor: "#f2f2f2",
                        })}
                      >
                        <div style={{ width: "84%" }}>
                          <CircularProgressbarWithChildren
                            value={67}
                            //   text={`${12}%`}
                            strokeWidth={4.1}
                            styles={buildStyles({
                              rotation: 0.5,
                              // textSize: "10px",
                              pathColor: "#ffcc00",
                              // textColor: "#595959",
                              trailColor: "#f2f2f2",
                            })}
                          >
                            <div style={{ width: "82%" }}>
                              <CircularProgressbarWithChildren
                                value={80}
                                //   text={`${15}%`}
                                strokeWidth={4.7}
                                styles={buildStyles({
                                  rotation: 0.5,
                                  // textSize: "10px",
                                  pathColor: "#ff99cc",
                                  // textColor: "#595959",
                                  trailColor: "#f2f2f2",
                                })}
                              >
                                <div
                                  style={{
                                    width: "80%",
                                    //   fontSize: 24,
                                    //   marginTop: -35,
                                  }}
                                >
                                  <CircularProgressbarWithChildren
                                    value={80}
                                    //   text={`${12}%`}
                                    strokeWidth={5.7}
                                    styles={buildStyles({
                                      rotation: 0.5,
                                      // textSize: "8px",
                                      pathColor: "#ff6666",
                                      // textColor: "#595959",
                                      trailColor: "#f2f2f2",
                                      // marginTop: 25,
                                    })}
                                  >
                                    <div
                                      className="p-font-size p-font-color"
                                      style={{
                                        //   fontSize: "1.35vw",
                                        marginTop: "180%",
                                        marginLeft: "45%",
                                        width: "30%",
                                        //   marginTop: 200,
                                        //   marginLeft: 30,
                                        marginTop: "180%",
                                        marginLeft: "45%",
                                      }}
                                    >
                                      <p className="p-space">50%</p>
                                      <p className="p-space">50%</p>
                                      <p className="p-space">30%</p>
                                      <p className="p-space">30%</p>
                                      <p className="p-space">10%</p>
                                      <p className="p-space">10%</p>
                                      <p className="p-space">10%</p>
                                    </div>
                                  </CircularProgressbarWithChildren>
                                </div>
                              </CircularProgressbarWithChildren>
                            </div>
                          </CircularProgressbarWithChildren>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="p-font-color">
          <div className="flex-row row-spacing">
            <div style={{ width: 20, height: 20 }} className="testing">
              <CircularProgressbar
                //   value={100}
                //   value={30}
                //   text={`${9}%`}
                strokeWidth={17}
                styles={buildStyles({
                  // rotation: 0.5,
                  // textSize: "100px",
                  pathColor: "#ff6666",
                  // textColor: "#595959",
                  // trailColor: "#f2f2f2",
                })}
                //   text={`${bluePercentage}%`}
              />
              {/* <p>Annual Leaves</p> */}
            </div>
            <p>Colour One</p>
          </div>
          <div className="flex-row row-spacing">
            <div style={{ width: 20, height: 20 }} className="testing">
              <CircularProgressbar
                strokeWidth={17}
                styles={buildStyles({
                  pathColor: "#ff99cc",
                })}
              />
            </div>
            <p>Colour Two</p>
          </div>
          <div className="flex-row row-spacing">
            <div style={{ width: 20, height: 20 }} className="testing">
              <CircularProgressbar
                strokeWidth={17}
                styles={buildStyles({
                  pathColor: "#ffcc00",
                })}
              />
            </div>
            <p>Colour Three</p>
          </div>
          <div className="flex-row row-spacing">
            <div style={{ width: 20, height: 20 }}>
              <CircularProgressbar
                strokeWidth={17}
                styles={buildStyles({
                  pathColor: "#66ffe0",
                })}
              />
            </div>
            <p>Colour Four</p>
          </div>
          <div className="flex-row row-spacing">
            <div style={{ width: 20, height: 20 }}>
              <CircularProgressbar
                strokeWidth={17}
                styles={buildStyles({
                  pathColor: "#8080ff",
                })}
              />
            </div>
            <p>Colour Five</p>
          </div>
          <div className="flex-row row-spacing">
            <div style={{ width: 20, height: 20 }}>
              <CircularProgressbar
                strokeWidth={17}
                styles={buildStyles({
                  pathColor: "#7300e6",
                })}
              />
            </div>
            <p>Colour Six</p>
          </div>
          <div className="flex-row row-spacing">
            <div style={{ width: 20, height: 20 }}>
              <CircularProgressbar
                strokeWidth={17}
                styles={buildStyles({
                  pathColor: "#d24dff",
                })}
              />
            </div>
            <p>Colour Seven</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactCircle;
