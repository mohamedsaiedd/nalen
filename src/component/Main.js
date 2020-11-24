import * as React from "react";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  },
  visible2: {
    opacity: 0.5,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

export const Example = () => (
  <div className="container">
      <motion.div >
      <motion.svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 1000 1000"
      className="item"  
    >
    
      <motion.path className="motiondiv"
      id="d" stroke-width="3"
          d="M365.0923,403.9707q0,29.0332-9.3823,51.3369-9.3823,22.3066-26.8145,34.4248T288.7,501.85H226.458V310.8857h60.9092Q365.0918,310.8857,365.0923,403.9707Zm-47.0659.5332a68.8816,68.8816,0,0,0-4.3579-25.1694q-4.3594-11.1856-12.4585-17.3116a30.7377,30.7377,0,0,0-19.0728-6.1259H270.7554V456.8389h12.4072q15.8936,0,25.3789-14.1826Q318.025,428.4737,318.0264,404.5039Z" transform="translate(-226.458 -307.6899)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{ 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2.2,
        }}
      /> 
      <motion.path className="motiondiv"
      d="M385.8052,501.85V310.8857h44.2973V501.85Z" transform="translate(-226.458 -307.6899)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{ 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2.5,
        }}
      />
     <motion.path className="motiondiv"
       d="M587.81,489.332q-8.3057,6.1275-24.815,10.9864a111.4791,111.4791,0,0,1-31.48,4.8613q-38.6593,0-59.6782-25.1026-21.0219-25.1-21.021-70.38,0-30.3633,10.6128-53.9336t29.8906-35.8223q19.2766-12.25,45.4253-12.2515,19.1735,0,40.9136,7.0577v50.205a73.9108,73.9108,0,0,0-19.4829-8.3232,84.1952,84.1952,0,0,0-20.4053-2.3306q-18.2526,0-29.07,14.2491-10.8193,14.2514-10.8179,39.1513,0,23.8389,9.0747,37.2871,9.0747,13.4532,25.3789,13.4512,7.5873,0,11.1768-1.0664V430.0723H515.3135V386.5254H587.81Z" transform="translate(-226.458 -307.6899)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{ 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2.8,
        }}
      />
       <motion.path className="motiondiv"
     d="M611.7012,501.85V310.8857h44.2973V501.85Z" transform="translate(-226.458 -307.6899)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{ 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3.1,
        }}
      />
          <motion.path className="motiondiv"
      d="M787.66,501.85l-51.8858-92.1523q-6.1522-10.9189-10.0488-19.709h-.41q.6153,14.1167.6153,31.6943V501.85H684.9141V310.8857H726.751l49.7314,87.626q.923,1.7314,2.2559,4.127,1.333,2.3979,2.666,4.9277t2.5127,4.9277a34.0869,34.0869,0,0,1,1.7939,4.2618h.41q-.6153-5.8594-.6152-20.2422v-85.628h41.0166V501.85Z" transform="translate(-226.458 -307.6899)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{ 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3.4,
        }}
      />
            <motion.path className="motiondiv"
    d="M984.2285,489.332q-8.3057,6.1275-24.8144,10.9864a111.4759,111.4759,0,0,1-31.4786,4.8613q-38.66,0-59.6787-25.1026-21.0219-25.1-21.02-70.38,0-30.3633,10.6123-53.9336t29.8907-35.8223q19.2758-12.25,45.4248-12.2515,19.1748,0,40.914,7.0577v50.205a73.9206,73.9206,0,0,0-19.4824-8.3232,84.2,84.2,0,0,0-20.4062-2.3306q-18.252,0-29.07,14.2491Q894.3,382.7993,894.3018,407.6992q0,23.8389,9.0752,37.2871,9.0732,13.4532,25.3789,13.4512,7.5849,0,11.1757-1.0664V430.0723H911.7344V386.5254h72.4941Z" transform="translate(-226.458 -307.6899)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{ 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3.7,
        }}
      />
        <motion.path className="motiondiv"
    d="M1147.9863,405.8359q0,28.7637-9.5371,51.4688-9.5361,22.708-26.66,35.29a64.543,64.543,0,0,1-76.0332.3994q-16.9718-12.1845-26.4043-34.2246-9.4351-22.0371-9.4336-49.8711,0-29.1649,9.5361-52.4687t26.7627-36.0225a64.2745,64.2745,0,0,1,39.1709-12.7173,62.4091,62.4091,0,0,1,37.7861,12.1846q16.6613,12.1852,25.7373,34.7573T1147.9863,405.8359Zm-46.9638,1.5977q0-23.5722-6.9727-37.1543t-19.0723-13.5835q-13.2274,0-20.61,13.0508-7.3828,13.0524-7.3828,36.8882,0,23.3057,7.331,36.3545,7.33,13.0531,19.9444,13.0507a19.5746,19.5746,0,0,0,13.8427-5.8593q6.1524-5.858,9.5362-16.7793Q1101.0224,422.4838,1101.0225,407.4336Z
        " transform="translate(-226.458 -307.6899)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{ 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
        }}
      />

</motion.svg>

      </motion.div>
      

   
     



  </div>
);
export default Example  