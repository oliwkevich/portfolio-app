import React from "react";
import Link from "next/link";

export const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest text-[#5651e5]">ABOUT</p>
          <h2 className="py-4 ">Who I Am?</h2>
          <p className="py-2 text-gray-600">P.S: Im not your normal developer</p>
          <p className="py-2 text-gray-600">
            Now I am 23 years old, and it was in this year that I began to study
            what is WEB development. At first I studied HTML and CSS, then I
            realized that this was clearly not enough and took up the study of
            JavaScript. After a little time of studying, I learned about such
            technology as React JS.
          </p>
          <p className="py-2 text-gray-600">
            At this stage, I have already worked with many technologies and
            continue to improve my skills. I have already made a couple of
            simple (and not only) projects that are in my GitHub profile. I am a
            freelancer, and I am also ready to join the development team in
            order to improve my skills and learn something new. Thank you for
            visiting my site.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              You can check my last projects here
            </p>
          </Link>
        </div>
        <div
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 
        rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <img
            src="https://scontent.fbud5-1.fna.fbcdn.net/v/t1.6435-9/143405467_1356005654752287_4032978175318269531_n.jpg?_nc_cat=102&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=20p54wVL6cYAX-YNyL5&_nc_ht=scontent.fbud5-1.fna&oh=00_AT9RfWi4dBFfJ0grDei2rX5VEwXO1f4OWZgXMbm1xBJkuQ&oe=62AA42A6"
            alt="/"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
