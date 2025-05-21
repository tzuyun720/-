
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const pages = [
    "林蓁畢業製作節目單\nLoi 咖啡\n19:00～20:30\n2025/5/23（五）\n林蓁畢業專場音樂會",
    "曲序\n1. 就讓我做個夢吧\n2. 你聽\n3. 小丑\n4. I Can’t Sleep\n5. 像風\n6. Fly Me To The Moon\n7. 有沒有這樣的一首歌\n8. Fantasy Girl\n9. I Know You’re There\n10. 跌跌撞撞",
    "《就讓我做個夢吧》\n我們總是在不自覺中追逐著什麼......",
    "《你聽》\n既然無法壓抑，也無法馬上釐清所有情緒......",
    "《小丑》\n以小丑比喻背負了人類......",
    "《I Can’t Sleep》\n這首歌，想送給那些失眠卻說不出原因的人......",
    "《像風》\n這首歌送給受憂鬱症折磨的每個靈魂......",
    "《有沒有這樣的一首歌》\n世界上充滿太多執念、慾望......",
    "《Fantasy Girl》\n這首歌描寫了一個在現實與夢想之間踽踽前行的女孩......",
    "《I Know You’re There》\n既然無法壓抑，也無法馬上釐清所有情緒......",
    "《跌跌撞撞》\n回首一生，是否活成了自己喜歡的模樣？......"
  ];

  return (
    <main className="w-full h-screen overflow-hidden">
      <Swiper spaceBetween={50} slidesPerView={1}>
        {pages.map((text, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-screen p-6">
              <pre className="whitespace-pre-wrap text-lg leading-relaxed">{text}</pre>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
