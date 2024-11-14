export default function Home() {
  return (
    <div className="h-full ">
      <Nav />
      <Hero />
      <About />
    </div>
  );
}
export const Nav = () => {
  return (
    <nav class="text-[#fff4ef] bg-[#c79b92] shadow-xl rounded-b-xl fixed top-0 w-screen">
      <div class="flex-row p-5">
        <div class="container mx-auto flex-col items-center">
          <a class="flex items-center justify-center">
            <h1 class="ml-3 text-3xl font-alienor text_shadow">les gamins</h1>
            <h1 class="ml-3 mt-1 text-xs font-cocomat text_shadow">MARAIS</h1>
          </a>
        </div>
        <div class="container mx-auto flex-col items-center">
          <div class="flex items-center justify-center">
            <a class=" font-cocomat text_shadow animate_underline">Menu</a>
            <a class="ml-10 font-cocomat text_shadow animate_underline">
              Réserver
            </a>
            <a class="ml-10 font-cocomat text_shadow animate_underline">
              Commander
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export const Hero = () => {
  return (
    <section class="hero">
      <div class="container mx-auto flex px-5 py-24 mt-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded-2xl"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-6xl text-3xl mb-4  text-[#c79b92] font-cocomat text_shadow ">
            Brunch & Détente <br></br> au Cœur du Marais
          </h1>
          <p class="mb-8 leading-relaxed font-inter text_shadow">
            Bistrot moderne en plein cœur du Marais. Brunch tous les jours,
            service continu 7/7. <br></br> Venez savourer une cuisine créative
            dans une ambiance conviviale, entre amis ou en famille.
          </p>
          <div class="flex justify-center">
            <button class="font-cocomat inline-flex text-[#fff4ef] bg-[#c79b92] border-0 py-2 px-6 focus:outline-none hover:shadow-2xl rounded-2xl shadow-xl text-lg">
              Réserver
            </button>
            <button class="font-cocomat ml-4 inline-flex bg-[#fff4ef] text-[#c79b92]  py-2 px-6 border border-[#c79b92] outline-1 hover:shadow-2xl rounded-2xl shadow-xl text-lg">
              Commander
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section class="about py-24">
      <svg width="1440" height="204" className="w-full">
        <path
          d="M1601.7 159.938C1473.34 126.157 1338.64 59.667 1208.74 32.4059C1075.07 4.28531 935.643 5.92324 801.759 33.0384C707.769 52.0611 616.509 83.4252 522.259 100.924C347.121 133.073 166.507 116.758 0 53.7477L0 204H1950V164.754C1839.81 202.249 1715.53 189.907 1601.7 159.938Z"
          fill="#C79B92"
        />
      </svg>
      <div class="flex text-[#fff4ef] bg-[#c79b92] h-screen"></div>
      <svg width="1440" height="192" className="w-full">
        <path
          d="M1601.7 44.0621C1473.34 77.8425 1338.64 144.333 1208.74 171.594C1075.07 199.715 935.643 198.077 801.759 170.962C707.769 151.939 616.509 120.575 522.259 103.076C347.121 70.9268 166.507 87.2417 0 150.252L0 0H1950V39.2456C1839.81 1.75145 1715.53 14.0927 1601.7 44.0621Z"
          fill="#C79B92"
        />
      </svg>
    </section>
  );
};
