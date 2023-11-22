import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Cat.jpg"
          alt="An Image showing"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi,I am Sreeparna</h1>
      <p>
        I blog about web development-specially on Frontend Technology like
        React, NextJs and Blockchain - Public blockchain like Polygon, Hedera
      </p>
    </section>
  );
}
export default Hero;
