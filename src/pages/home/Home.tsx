import { motion } from "framer-motion";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Typical from "react-typical";

import styles from "./home.module.scss";
import { IHomeProps } from "./home.props";
import { ReactComponent as Avatar } from "../../assets/cleaning service-amico.svg";
import { Button, Socials, Testimonials } from "../../components";
import { useTranslation } from "react-i18next";

export const Home: FC<IHomeProps> = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const steps = [t("home.offer.deepCleaning"), 3000, t("home.offer.moveIn"), 3000, t("home.offer.apartment"), 3000];
  return (
    <>
      <motion.section className={styles.home} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className={styles.introWrapper}>
          <div className={styles.intro}>
            <Avatar className={styles.home_img} />
            <h1 className={styles.home_name}>{t("home.title")}</h1>
            <span className={styles.education}>
            {t("home.offer.weOffer")}: <Typical steps={steps} loop={Infinity} wrapper="span" />
          </span>
            <Socials />
            <Button buttonType="animate" onClick={() => navigate("/services")}>
              {t("home.bookOnline")}
            </Button>
          </div>
        </div>
        <Testimonials />
      </motion.section>
    </>
  );
};
