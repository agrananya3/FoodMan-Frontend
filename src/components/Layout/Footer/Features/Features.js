import React from "react";
import FeatureItem from "./FeatureItem";
import FeaturesList from "./FeaturesList";
import styles from "./Features.module.css";

const Features = (props) => {
  return (
    <div className={styles.feature}>
      {FeaturesList.map((item) => {
        return (
          <FeatureItem
            key={item.id}
            img={item.image}
            alt={item.imageAlt}
            heading={item.heading}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default Features;
