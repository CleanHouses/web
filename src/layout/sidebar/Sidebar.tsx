import { ActionIcon } from "@mantine/core";
import cn from "classnames";
import React, { FC, useState } from "react";

import styles from "./sidebar.module.scss";
import { ISidebarProps } from "./sidebar.props";
import { NavItem } from "../../components";
import { IconMail, IconHome, IconBriefcase, IconX, IconMenu2, IconSpray  } from "@tabler/icons-react";
import loofah from "./sweet.png"
import { useTranslation } from "react-i18next";

export const Sidebar: FC<ISidebarProps> = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const {t} = useTranslation();

  const handleClose = () => setOpenMenu(false)
  return (
    <>
      <aside
        className={styles.aside}>
        <img src={loofah} alt="loofah" className={cn(styles.loofah, {
          [styles.open_loofah]: openMenu,
        })}/>
        <div className={cn(styles.back, {
          [styles.open_back]: openMenu,
        })}/>
        <nav className={cn(styles.nav, {
          [styles.open_nav]: openMenu,
        })}>
          <ul className={styles.nav_list}>
            <NavItem to="/unanyan.am" label={t("nav.home")} icon={<IconHome size={15} />} onClick={handleClose} />
            <NavItem
              to="/services"
              label={t("nav.services")}
              icon={<IconSpray   size={15} />}
              onClick={handleClose}
            />
            <NavItem to="/career" label={t("nav.career")} icon={<IconBriefcase size={15} />} onClick={handleClose} />
            <NavItem to="/contact" label={t("nav.contact")} icon={<IconMail size={15} />} onClick={handleClose} />
          </ul>
        </nav>
      </aside>
      <ActionIcon
        variant="transparent"
        className={cn(styles.nav_toggle, {
          [styles.nav_toggle_open]: openMenu,
        })}
        color="black"
        onClick={() => setOpenMenu((prev) => !prev)}>
        {openMenu ? <IconX size={20} /> : <IconMenu2 size={20} />}
      </ActionIcon>
    </>
  );
};
