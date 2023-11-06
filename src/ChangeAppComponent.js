import React from "react";
import "./changeAppComponent.css";
import { Add, Remove, Settings, WorkOutline } from "@mui/icons-material";
import { motion } from "framer-motion";

function ChangeAppComponent() {
  return (
    <>
      <motion.div className="changeWebsite" drag>
        <div className="settingsIconCont">
          <Settings className="settingsIcon" />
        </div>
        <div className="MinusCont">
          <Remove className="minusIcon" />
        </div>
        <div className="plusCont">
          <Add className="plusIcon" />
        </div>
      </motion.div>
    </>
  );
}

export default ChangeAppComponent;
