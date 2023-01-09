import React from "react";
import { motion } from "framer-motion";
import ExperinceCard from "./ExperinceCard";
type Props = {};

function Experinces({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left   md:flex-row max-w-full px-10 justify-evenly mx-auto relative top-10 md:-top-10"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl z-10 md:top-24">
        Experinces
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-4 snap-x md:snap-mandatory items-end  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        <ExperinceCard
          img="https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/294312965_5354979521249322_3268659336270651031_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tPRICtvgj2cAX9cmS-c&_nc_ht=scontent-cdt1-1.xx&oh=00_AfB-9sexFLY983sOpXb8kZ3w-VTrFTKS9154KrYAdH7qpw&oe=63C1C3C4"
          name="mahmoud ismail"
          review={
            <div className="space-y-2">
              <li>reply fast</li>
              <li>keeps his deadlines</li>
              <li>creative</li>
            </div>
          }
        ></ExperinceCard>
        <ExperinceCard
          name="ahmed magedy"
          img="https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/293387830_5630639710320524_7685670626996305018_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NHqoBqzPzuQAX8iaTGv&_nc_ht=scontent.fcai20-5.fna&oh=00_AfDvWJiNFG5v95QkOIhErvSnCdGjq3oiHQwGMJfX1JyWLQ&oe=63C23382"
          review={
            <div className="space-y-2">
              <li>wonderful design</li>
              <li>keeps his deadlines</li>
              <li>ambitious</li>
            </div>
          }
        ></ExperinceCard>
        <ExperinceCard
          name="sherbini"
          img="https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/294055069_2108652489304591_7682832945733995900_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9BxCqUYqq4IAX95HVp6&tn=EN5cbmBOS2IQyISZ&_nc_ht=scontent.fcai20-5.fna&oh=00_AfCy_fHrrAkgtCtP7L2g-xyBzGRQkTawab9gNKySwkS6xg&oe=63B314C3"
          review={
            <div className="space-y-2">
              <li>fast learner</li>
              <li>keeps his deadlines</li>
              <li>hard worker</li>
            </div>
          }
        ></ExperinceCard>
        <ExperinceCard
          name="sabry"
          img="https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/278531301_2029297893906718_4482713212191363303_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=_XDWMMdkJZ8AX-hsHhF&_nc_ht=scontent.fcai20-5.fna&oh=00_AfB9eg5h__R26o0ywcOldfuJpuJ7EbLfE11bz-NaQaqQnA&oe=63C158DC"
          review={
            <div className="space-y-2">
              <li>good experience</li>
              <li>keeps his deadlines</li>
              <li>just wow</li>
            </div>
          }
        ></ExperinceCard>
      </div>
    </motion.div>
  );
}

export default Experinces;
