import React from "react";

import Slider from "@/components/slider/Slider";
import Member from "@/components/member/Member";
import Portfolio from "@/components/portfolio/Portfolio";
import Youtube from "@/components/youtube/Youtube";
import Unsplash from "@/components/unsplash/Unsplash";
import Movie from "@/components/movie/Movie";
import Intro from "@/components/intro/Intro";

const Home = () => {
    return (
        <>
            <Slider attr={"slider__wrap Nanum5"} />
            <Intro attr={"intro__wrap Nanum5 section bg-blue"} />
            <Member attr={"members__wrap Nanum5 section center"} />
            <Portfolio attr={"port__wrap Nanum5 section center bg-blue"} />
            <Youtube attr={"youtube__wrap Nanum5 section"} />
            <Unsplash attr={"unsplash__wrap Nanum5 section bg-blue"} />
            <Movie attr={"movies__wrap Nanum5 container section"} />
        </>
    );
};

export default Home;
