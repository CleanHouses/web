import React from "react";

import styles from "./shapes.module.scss";
import { ReactComponent as ChickenIcon2 } from "../../assets/clearIcons/home.svg";
import { ReactComponent as ChickenIcon3 } from "../../assets/clearIcons/bucket.svg";
import { ReactComponent as ChickenIcon4 } from "../../assets/clearIcons/cleaning-Q.svg";

export const Shapes = () => (
  <div className={styles.shapes}>
    <ChickenIcon2 className={styles.s14} />
    <ChickenIcon3 className={styles.s15} />
    <ChickenIcon4 className={styles.s16} />
  </div>
);
