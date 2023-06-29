import React from "react";

const links = [
    {
        id: 1,
        title: "사이트",
        desc: [
            "웹표준 사이트",
            "반응형 사이트",
            "패럴랙스 사이트",
            "포트폴리오 사이트",
        ],
    },
    {
        id: 2,
        title: "유형",
        desc: [
            "이미지 사이트",
            "카드 사이트",
            "이미지/텍스트 사이트",
            "배너 사이트",
            "텍스트 사이트",
            "푸터 사이트",
        ],
    },
    {
        id: 3,
        title: "포트폴리오",
        url: "/port",
    },
];

const Footer = () => {
    return (
        <footer
            id="footer"
            className="footer__wrap Nanum5 section bg-blue"
            role="contentinfo"
        >
            <div className="footer__inner container">
                <div className="footer__text">
                    <h5>KDH</h5>
                    <p>
                        안녕하세요! 제 메일입니다!
                        <br />
                        <a href="mailto:ehcjswo1@gmail.com">
                            ehcjswo1@gmail.com
                        </a>
                    </p>
                    <ul className="sns">
                        <li>
                            <a href="/">
                                <span className="ir">페이스북</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="ir">인스타</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="ir">유투브</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="ir">깃</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu">
                    {/* {links.map((link) => (
                        <div key={link.id}>
                            <h4>{link.title}</h4>
                            <ul>
                                <li>
                                    <a href="/">{link.desc}</a>
                                </li>
                            </ul>
                        </div>
                    ))} */}
                    <div>
                        <h4>사이트</h4>
                        <ul>
                            <li>
                                <a href="/">웹표준 사이트</a>
                            </li>
                            <li>
                                <a href="/">반응형 사이트</a>
                            </li>
                            <li>
                                <a href="/">패럴랙스 사이트</a>
                            </li>
                            <li>
                                <a href="/">포트폴리오 사이트</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>유형</h4>
                        <ul>
                            <li>
                                <a href="/">이미지 사이트</a>
                            </li>
                            <li>
                                <a href="/">카드 사이트</a>
                            </li>
                            <li>
                                <a href="/">이미지/텍스트 사이트</a>
                            </li>
                            <li>
                                <a href="/">배너 사이트</a>
                            </li>
                            <li>
                                <a href="/">텍스트 사이트</a>
                            </li>
                            <li>
                                <a href="/">푸터 사이트</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>스크립트</h4>
                        <ul>
                            <li>
                                <a href="/">검색 이펙트</a>
                            </li>
                            <li>
                                <a href="/">퀴즈 이펙트</a>
                            </li>
                            <li>
                                <a href="/">마우스 이펙트</a>
                            </li>
                            <li>
                                <a href="/">슬라이드 이펙트</a>
                            </li>
                            <li>
                                <a href="/">패랠랙스 이펙트</a>
                            </li>
                            <li>
                                <a href="/">게임 이펙트</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>레퍼런스</h4>
                        <ul>
                            <li>
                                <a href="/">CSS</a>
                            </li>
                            <li>
                                <a href="/">FONTS</a>
                            </li>
                            <li>
                                <a href="/">BLOG</a>
                            </li>
                            <li>
                                <a href="/">REFERENCE</a>
                            </li>
                            <li>
                                <a href="/">TUTORIAL</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    Copyright 2022. All Rights Reserved. - Designed by KDH
                </div>
            </div>
        </footer>
    );
};

export default Footer;
