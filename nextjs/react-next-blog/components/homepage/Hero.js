import Image from "next/image";

import classes from './Hero.module.css'

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/logo192.png' alt='jin' width={300} height={300}></Image>
            </div>
            <h1>Hi, I'm Jin</h1>
            <p>blog about web development</p>
        </section>
    )
}

export default Hero;
