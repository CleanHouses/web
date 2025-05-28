import React, { FC, FunctionComponent } from "react";

import styles from "./layout.module.scss";
import { ILayoutProps } from "./layout.props";
import { Sidebar } from "./sidebar/Sidebar";
import { Languages, Shapes } from "../components";
import { MainContextProvider } from "../context";
import { Anchor, Text } from "@mantine/core";

export const Layout: FC<ILayoutProps> = ({ children, ...props }) => (
  <div {...props}>
    <Sidebar />
    <main className={styles.main}>
      <Languages />
      <div className={styles.container}>
        {children}
        <Shapes/>
      </div>
      <Text size="xs" c="dimmed" m="0 0 1rem 1rem" fw="500">
        © {new Date().getFullYear()} — Created by{' '}
        <Anchor
          href="https://your-website-or-profile-link.com"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          c="dimmed"
          fw="500"
        >
          Razmik Unanian
        </Anchor>
      </Text>
    </main>
  </div>
);

export const withLayout =
  <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  (props: T) =>
    (
      <MainContextProvider basket={{}}>
        <Layout>
          <Component {...props} />
        </Layout>
      </MainContextProvider>
    );
