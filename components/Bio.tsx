import React from 'react';

export function Bio() {
  return (
    <div className="intro_about">
      <div className="intro_about_text">
        <h1>About <span>Me</span></h1>
        <p>Innopolis University Student; Front-end Developer</p>
      </div>
      <div className="intro_about_discribtion">
        <p>
          Hi, my name is Ekaterina Akimenko. I am 19 years old, a first-year student at Innopolis University.
          I was born in Tashkent, Uzbekistan, and at 9, I started moving around the world with my family.
          I have lived in Dubai and in Houston, America, for 2 years each, so I know English at a very high level
          and I even passed the IELTS test with a 7.0 score. I have many passions in my life, some of them include
          programming, design, math, reading, watching movies, and writing.
        </p>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="intro">
      <div className="big-photo">
        <img src="/stuff/me.jpg" alt="Ekaterina Akimenko" />
      </div>
      <div className="intro-text">
        <h1>Hi, my name is <span>Kate</span></h1>
      </div>
    </div>
  );
}
