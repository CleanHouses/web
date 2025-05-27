import cn from "classnames";
import { motion } from "framer-motion";
import React, { FC } from "react";

import styles from "./contacts.module.scss";
import { IContactsProps } from "./contacts.props";
import { Button, Input, Shapes, Textarea } from "../../components";

export const Contacts: FC<IContactsProps> = () => {
  return (
      <motion.section className={styles.contacts_wrapper} initial={{opacity: 0}} animate={{opacity: 1}}>
        <form action="" className={styles.contacts_form}>
          <div className={styles.contacts_form_group}>
            <div className={styles.contacts_form_input_wrapper}>
              <Input type="text" placeholder="Имя"/>
            </div>
            <div className={styles.contacts_form_input_wrapper}>
              <Input type="text" placeholder="Email"/>
            </div>
          </div>
          <div className={styles.contacts_form_input_wrapper}>
            <Input type="text" placeholder="Тема"/>
          </div>
          <div className={cn(styles.contacts_form_input_wrapper, styles.contacts_form_input_area)}>
            <Textarea placeholder="Текст" name="" id="" rows={30} cols={10}></Textarea>
          </div>
          <Button>Отправить</Button>
        </form>
        <Shapes/>
      </motion.section>
  );
};
