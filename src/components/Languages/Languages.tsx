import { ActionIcon, Image } from "@mantine/core";
import cn from "classnames";
import React, { FC, ReactNode, useState } from "react";

import styles from "./languages.module.scss";
import { ILanguagesProps } from "./languages.props";
import Eng from "../../assets/flugs/usa.png";
import Spain from "../../assets/flugs/spain.png";
import { useTranslation } from "react-i18next";

export const Languages: FC<ILanguagesProps> = ({ ...props }) => {
  const [openSelectLg, setOpenSelectLg] = useState(false);
  const [currLg, setCurrLg] = useState<"ru" | "sp" | "en">("en");
  const { i18n } = useTranslation();
  const lgs: { [key: string]: ReactNode } = {
    sp: <Image src={Spain} />,
    en: <Image src={Eng} />,
  };

  const handleSelectedLg = (lg: "ru" | "sp" | "en") => {
    setCurrLg(lg);
    i18n.changeLanguage(lg)
    setOpenSelectLg((prev) => !prev);
  };
  return (
    <div
      className={cn(styles.languages, {
        [styles.languages_open]: openSelectLg,
      })}
      {...props}>
      {openSelectLg && (
        <ActionIcon variant="transparent" onClick={() => setOpenSelectLg((prev) => !prev)}>
          <i className="icon-close" />
        </ActionIcon>
      )}
      <ActionIcon variant="transparent"  onClick={() => setOpenSelectLg((prev) => !prev)}>{lgs[currLg]}</ActionIcon>
      {currLg !== "sp" && (
        <ActionIcon  variant="transparent" onClick={() => handleSelectedLg("sp")}>
          <Image className={styles.lg} src={Spain} />
        </ActionIcon>
      )}
      {currLg !== "en" && (
        <ActionIcon variant="transparent" onClick={() => handleSelectedLg("en")}>
          <Image className={styles.lg} src={Eng} />
        </ActionIcon>
      )}
    </div>
  );
};
