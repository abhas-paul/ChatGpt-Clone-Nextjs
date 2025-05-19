import Navbar from '@/components/Navbar';
import StarBackground from '@/components/StarBackground'
import {
  Info,
  LayoutDashboard,
  Library,
  Brain,
  Image,
  NotebookPen,
  Zap,
  Code,
  Globe
} from "lucide-react";
import Link from 'next/link';
import React from 'react'



const page = () => {

  const features = [
    {
      title: "Natural Language Understanding",
      desc: "Natural Language Understanding (NLU) is a subfield of artificial intelligence that focuses on enabling machines to comprehend and interpret human language. It involves tasks like sentiment analysis, intent recognition, and entity extraction. NLU helps computers make sense of context, grammar, and meaning, allowing for more human-like interactions. It plays a key role in applications like chatbots, virtual assistants, and language translation.",
      icon: <Brain className="w-8 h-8 text-white" />
    },
    {
      title: "Multimodal Input",
      desc: "Multimodal Input refers to the ability of a system to process and integrate information from multiple types of data, such as text, images, audio, and video. It allows AI to understand context more effectively by combining different sensory inputs. This approach enhances user interaction and improves the system’s ability to make accurate decisions. Multimodal input is used in applications like virtual assistants, autonomous vehicles, and interactive AI systems.",
      icon: <Image className="w-8 h-8 text-white" />
    },
    {
      title: "Conversational Memory",
      desc: "Conversational Memory is the capability of an AI system to retain and recall information from past interactions. It allows the AI to maintain context, remember user preferences, and provide more coherent, personalized responses over time. This improves the quality of long-term conversations and user experience. Conversational memory is essential for building natural, human-like dialogue in virtual assistants and chatbots.",
      icon: <NotebookPen className="w-8 h-8 text-white" />
    },
    {
      title: "Real-time Summarization",
      desc: "Real-time Summarization is the process of instantly generating concise summaries from ongoing content, such as live meetings, chats, or video streams. It helps users quickly grasp key points without reading or watching the entire material. This feature is valuable for boosting productivity and staying informed. Real-time summarization relies on natural language processing and machine learning to extract the most relevant information as it happens.",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "Code Assistance",
      desc: "Code Assistance in ChatShot helps developers write clean and efficient code faster by offering smart suggestions, auto-completions, and real-time debugging tips. Whether you're stuck on syntax or need to generate an entire function, ChatShot can assist instantly based on your prompt. It supports multiple languages and adapts to your coding style over time. This makes ChatShot a reliable coding companion for both beginners and professionals.",
      icon: <Code className="w-8 h-8 text-white" />
    },
    {
      title: "Web Access & Tools",
      desc: "Web Access & Tools enable AI systems like ChatShot to fetch real-time information, interact with online services, and perform tasks beyond static knowledge. By connecting to the internet and using APIs, these tools allow the AI to provide up-to-date answers, access local data, or automate workflows. For example, ChatShot can look up current news, check weather, or retrieve documentation instantly, enhancing its usefulness and accuracy.",
      icon: <Globe className="w-8 h-8 text-white" />
    }
  ];

  const userLogo = (
    <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold select-none">
      Oin
    </div>
  );

  const botLogo = (
    <img
      src="/logo.png"
      alt="Bot Logo"
      className="w-8 h-8 rounded-full object-cover"
      draggable={false}
    />
  );

  const terminals = [
    {
      title: "Weather Forecast",
      conversation: [
        {
          from: "user",
          text: "What's the weather in New York this weekend?",
        },
        {
          from: "bot",
          text:
            "The forecast for New York this weekend:\n" +
            "- Saturday: Sunny, high 26°C, low 16°C\n" +
            "- Sunday: Partly cloudy, high 24°C, low 15°C\n" +
            "Perfect weather for outdoor activities!",
        },
      ],
    },
    {
      title: "Remote Code Remediation",
      conversation: [
        {
          from: "user",
          text: "Find and fix the bug in this Python function:\n\ndef add(a, b):\n    return a - b\n\n\nAlso, find the problems in this AI code and correct them:\n\ndef ai():\n import speach_recognition as sr\n import os\n r = sr.Recognizer()\n with sr.Microphone() as src:\n  audio = r.listen(src)\n  text = r.recognize_google(audio)\n  if 'open youtube' in text:\n    os.system('start youtube.com')\n  elif 'weather' in text:\n    print(\"its hot\")\nai()\n"
        },
        {
          from: "bot",
          text:
            "The bug is in the operation: it should be addition, not subtraction.\n\nHere's the corrected code:\n\ndef add(a, b):\n    return a + b\n \nAlso, Here is the solution of the second program: \n\nimport speech_recognition as sr  # Corrected spelling of module\nimport os\n\ndef simple_jarvis():\n    \"\"\"Basic AI Voice Command Program to demonstrate real-world usage of AI with speech recognition.\"\"\"\n    recognizer = sr.Recognizer()\n    with sr.Microphone() as source:\n        print(\"Listening for your command...\")\n        audio = recognizer.listen(source)\n        try:\n            command = recognizer.recognize_google(audio)\n            print(f\"You said: {command}\")\n            if 'open YouTube' in command:\n                print(\"Opening YouTube...\")\n                os.system('start https://youtube.com')\n            elif 'weather' in command:\n                print(\"Today’s weather is sunny with clear skies.\")\n            else:\n                print(\"Sorry, I didn't understand that command.\")\n        except sr.UnknownValueError:\n            print(\"Sorry, I could not understand the audio.\")\n        except sr.RequestError:\n            print(\"Could not request results from Google Speech Recognition service.\")\n\nsimple_jarvis()\n"
        },
      ],
    },
    {
      title: "Task Automation",
      conversation: [
        {
          from: "user",
          text: "Search wiki and tell me about Mohenjo-daro",
        },
        {
          from: "bot",
          text:
            "Mohenjo-daro, which means \"Mound of the Dead,\" is one of the most important archaeological sites of the ancient Indus Valley Civilization. It was built around 2500 BCE in what is now Sindh, Pakistan. The city is known for its remarkable urban planning, featuring a grid-like street layout, well-constructed brick buildings, and an advanced drainage system with covered sewer lines. Mohenjo-daro had distinct areas including the Citadel, where important public buildings like the Great Bath were located, and the Lower City where people lived. Artifacts found here, such as the famous bronze statue called the Dancing Girl and the Priest-King sculpture, highlight the artistic skills of its people. Despite its advanced development, Mohenjo-daro was abandoned around 1700 BCE for reasons that remain uncertain. Today, it is recognized as a UNESCO World Heritage Site and offers valuable insights into one of the world’s earliest urban civilizations.",
        },
      ],
    },
    {
      title: "General Knowledge",
      conversation: [
        {
          from: "user",
          text: "Explain the concept of quantum computing in simple terms.",
        },
        {
          from: "bot",
          text:
            "Quantum computing uses quantum bits (qubits) which can be both 0 and 1 at the same time, " +
            "allowing it to process a vast number of possibilities simultaneously. This makes it powerful " +
            "for solving certain complex problems much faster than traditional computers.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="relative h-screen min-h-[600px] text-white overflow-hidden bg-black">
        <section className="absolute inset-0 z-0">
          <StarBackground />
        </section>

        <section className="relative z-10 flex flex-col gap-3 xs:gap-4 sm:gap-5 items-center justify-center h-full text-center px-3 xs:px-4 sm:px-6 md:px-8">

          <figure className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20">
            <img
              src="logo.png"
              className="w-70 object-contain"
            />
          </figure>

          <header>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 xs:mb-3 sm:mb-4 leading-tight max-w-xs xs:max-w-sm sm:max-w-none">
              Introducing ChatShot
            </h1>
          </header>

          <article className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-1 xs:px-2 sm:px-0 text-gray-200">
            <p>
              ChatShort is a sleek, fast, and intelligent AI chat assistant built by a passionate full-stack web developer. Designed for real-time conversations and smart task handling, it offers a minimal yet powerful user experience. Whether you're coding, learning, or just exploring ideas, ChatShort is your go-to AI companion.
            </p>
          </article>

          <nav className="flex flex-row gap-1 xs:gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-3 xs:mt-4 sm:mt-6" role="navigation" aria-label="Main navigation">
            <ul className="flex flex-row gap-1 xs:gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              <li>
                <Link
                  href="#features"
                  className="group relative inline-flex items-center justify-center gap-1 xs:gap-2 overflow-hidden rounded-md xs:rounded-lg border border-gray-300 bg-white/5 px-2 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 text-xs xs:text-sm sm:text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-[0_0_8px_rgba(255,255,255,0.2)] xs:hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] backdrop-blur-sm"
                  aria-label="View features"
                >
                  <LayoutDashboard className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" aria-hidden="true" />
                  <span className="hidden xs:inline whitespace-nowrap">Features</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#About"
                  className="group relative inline-flex items-center justify-center gap-1 xs:gap-2 overflow-hidden rounded-md xs:rounded-lg border border-gray-300 bg-white/5 px-2 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 text-xs xs:text-sm sm:text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black hover:shadow-[0_0_8px_rgba(255,255,255,0.2)] xs:hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] backdrop-blur-sm"
                  aria-label="Learn about us"
                >
                  <Info className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" aria-hidden="true" />
                  <span className="hidden xs:inline whitespace-nowrap">About</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#samples"
                  className="group relative inline-flex items-center justify-center gap-1 xs:gap-2 overflow-hidden rounded-md xs:rounded-lg border border-gray-300 bg-white/5 px-2 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 text-xs xs:text-sm sm:text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-[0_0_8px_rgba(255,255,255,0.2)] xs:hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] backdrop-blur-sm"
                  aria-label="View samples"
                >
                  <Library className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" aria-hidden="true" />
                  <span className="hidden xs:inline whitespace-nowrap">Samples</span>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </main>

      <main id='About' className="relative z-20 bg-gray-900 text-white min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">

      <aside className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></aside>
        <aside className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></aside>
        <aside className="absolute bottom-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl"></aside>

        <section className="relative max-w-7xl mx-auto">


          <header className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="mb-6 sm:mb-8">
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-full text-xs sm:text-sm text-gray-300 font-medium">
                <svg className="inline-block w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                ChatGPT Clone • Portfolio Showcase
              </span>
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent leading-tight">
              About ChatShot
            </h1>
            <hr className="relative w-20 sm:w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-80" />
          </header>


          <section className="max-w-5xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">


            <article className="text-center group">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-light tracking-wide group-hover:text-white transition-colors duration-500">
                ChatShot is a demonstration ChatGPT clone built as a portfolio showcase, demonstrating advanced frontend development skills and modern UI/UX design principles.
              </p>
            </article>


            <article className="relative bg-gradient-to-br from-black/70 via-gray-900/80 to-black/70 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-10 md:p-12 border border-gray-700/30 shadow-2xl hover:shadow-white/5 hover:shadow-3xl hover:border-gray-600/50 transition-all duration-700 group overflow-hidden">
              <aside className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></aside>
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white group-hover:scale-105 transition-transform duration-500">
                  <svg className="inline-block w-6 h-6 mr-2 text-white/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2l4 4l8-8l2 2l-10 10l-6-6z" /></svg>
                  Project Overview
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-500">
                  ChatShot is a sophisticated ChatGPT clone developed as a portfolio demonstration piece...
                </p>
              </div>
            </article>


            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

              <article className="relative bg-gradient-to-br from-gray-800/90 via-black/80 to-gray-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-600/40 shadow-xl hover:shadow-2xl hover:shadow-white/10 hover:border-gray-500/60 hover:scale-105 transition-all duration-500 group overflow-hidden cursor-pointer">
                <aside className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></aside>
                <header className="flex items-center mb-4 sm:mb-6">
                  <span className="w-3 h-3 bg-white rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-white/50 transition-all duration-500"></span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                    Development Features
                  </h3>
                </header>
                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "Modern React.js architecture with component-based design",
                    "Responsive Tailwind CSS implementation for all devices",
                    "Advanced animation systems and interactive hover effects",
                    "Dark mode optimization with premium color schemes",
                    "Clean, maintainable code structure and best practices",
                    "Demonstration of ChatGPT-style UI/UX patterns"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 sm:space-x-4 group/item">
                      <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gray-400 mt-2 sm:mt-2.5 flex-shrink-0 group-hover/item:bg-white group-hover/item:scale-125 transition-all duration-300"></span>
                      <p className="text-xs sm:text-sm md:text-base text-gray-300 group-hover/item:text-gray-100 group-hover/item:translate-x-1 transition-all duration-300">{item}</p>
                    </li>
                  ))}
                </ul>
              </article>


              <article className="relative bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-600/40 shadow-xl hover:shadow-2xl hover:shadow-white/10 hover:border-gray-500/60 hover:scale-105 transition-all duration-500 group overflow-hidden cursor-pointer">
                <aside className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></aside>
                <header className="flex items-center mb-4 sm:mb-6">
                  <span className="w-3 h-3 bg-white rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-white/50 transition-all duration-500"></span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                    Technical Highlights
                  </h3>
                </header>
                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "Pixel-perfect design replication and enhancement",
                    "Cross-browser compatibility and performance optimization",
                    "Accessible design patterns and semantic HTML structure",
                    "Scalable component architecture for maintainability",
                    "Advanced CSS techniques and modern design principles",
                    "Portfolio-ready code quality and documentation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 sm:space-x-4 group/item">
                      <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gray-400 mt-2 sm:mt-2.5 flex-shrink-0 group-hover/item:bg-white group-hover/item:scale-125 transition-all duration-300"></span>
                      <p className="text-xs sm:text-sm md:text-base text-gray-300 group-hover/item:text-gray-100 group-hover/item:translate-x-1 transition-all duration-300">{item}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </section>


            <article className="relative bg-gradient-to-r from-black/80 via-gray-900/90 to-black/80 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-10 md:p-12 border border-gray-600/30 shadow-2xl hover:shadow-white/10 hover:shadow-3xl transition-all duration-700 group">
              <aside className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl sm:rounded-[2rem]"></aside>
              <div className="relative text-center">
                <span className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-gray-600/50 rounded-full text-xs sm:text-sm text-gray-200 font-semibold tracking-wider group-hover:bg-white/20 group-hover:border-gray-500/70 group-hover:text-white transition-all duration-500">
                  PORTFOLIO DEMONSTRATION PROJECT
                </span>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed font-light group-hover:text-white transition-colors duration-500">
                  ChatShot serves as a comprehensive demonstration of modern web development capabilities...
                </p>
              </div>
            </article>


            <footer className="text-center pt-8 sm:pt-12 md:pt-16">
              <div className="relative inline-block group">
                <aside className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></aside>
                <div className="relative bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-600/40 group-hover:border-gray-500/60 transition-all duration-500">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-500">
                    Explore the Showcase
                  </p>
                  <hr className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-white transition-all duration-500" />
                  <p className="text-sm sm:text-base text-gray-300 mt-2 group-hover:text-gray-100 transition-colors duration-500">
                    A testament to modern web development
                  </p>
                </div>
              </div>
            </footer>
          </section>
        </section>
        
      </main>


      <main id='features' className="relative z-20 bg-gray-900 text-white min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">

        <aside className="absolute inset-0 -z-10">
          <section className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50" />
          <section className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <section className="absolute bottom-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        </aside>


        <section className="relative max-w-7xl mx-auto">

          <header className="text-center mb-16">
            <p>
              <mark className="inline-block px-4 py-2 bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-full text-sm text-gray-300 font-medium not-italic">
              <svg className="inline-block w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                AI Capabilities • Feature Highlights
              </mark>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent leading-tight mt-6">
              Smart AI, Smarter Features
            </h1>
            <hr className="mt-4 w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-70 border-none" />
          </header>

          <section
            aria-label="AI Features"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, i) => (
              <article
                key={i}
                className="relative bg-gradient-to-br from-gray-800/90 via-black/80 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-600/40 shadow-xl hover:shadow-2xl hover:border-gray-500/60 hover:scale-105 transition-all duration-500 group"
              >
                <section className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <header className="relative flex items-center mb-4 space-x-3">
                  {feature.icon}
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                    {feature.title}
                  </h2>
                </header>
                <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  {feature.desc}
                </p>
              </article>
            ))}
          </section>

          <footer className="text-center pt-20">
            <p>
              <mark className="inline-block px-6 py-3 bg-white/10 border border-gray-600/50 rounded-full text-sm sm:text-base text-gray-200 font-semibold tracking-wide backdrop-blur-sm hover:bg-white/20 hover:border-gray-500/70 hover:text-white transition-all duration-500">
                Powering the Next Generation of Digital Assistants
              </mark>
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              These features represent the cutting edge of generative AI, blending advanced understanding, interaction, and real-world utility into one seamless experience.
            </p>
          </footer>
        </section>
      </main>

      <main
      id="samples"
      className="relative z-20 bg-gray-900 text-white min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-auto"
    >
      {/* Background gradients and blurs */}
      <aside className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></aside>
      <aside className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></aside>
      <aside className="absolute bottom-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl"></aside>

      <section className="relative max-w-7xl mx-auto space-y-12">
        {/* Page header */}
        <header className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="mb-6 sm:mb-8">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-full text-xs sm:text-sm text-gray-300 font-medium">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              AI Sample Chat Demo • Multiple Use Cases
            </span>
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent leading-tight">
            Sample AI Usage Showcase
          </h1>
          <hr className="relative w-20 sm:w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-80" />
        </header>

        {/* Render each terminal */}
        {terminals.map(({ title, conversation }, idx) => (
          <section
            key={idx}
            className="bg-black bg-opacity-80 rounded-xl shadow-2xl border border-gray-700 p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed max-h-[400px] overflow-auto"
            aria-label={`${title} AI chat terminal`}
          >
            <h2 className="text-xl font-semibold mb-4 text-indigo-400">{title}</h2>

            {conversation.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start space-x-4 ${
                  msg.from === "bot" ? "flex-row-reverse space-x-reverse" : ""
                } mb-6 last:mb-0`}
              >
                {/* Avatar */}
                <div>{msg.from === "user" ? userLogo : botLogo}</div>

                {/* Message bubble */}
                <div
                  className={`max-w-[75%] whitespace-pre-wrap rounded-xl px-5 py-3
                    ${
                      msg.from === "user"
                        ? "bg-gray-700 text-gray-200"
                        : "bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 text-white"
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </section>
        ))}
      </section>
    </main>

    <style>
        {`
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          .animate-heartbeat {
            animation: heartbeat 1.5s ease-in-out infinite;
          }
        `}
      </style>

      <footer className="w-full py-4 text-center text-gray-400 text-sm select-none relative z-20 font-sans">
        Made with{" "}
        <svg
          className="inline-block w-5 h-5 mb-1 text-red-500 animate-heartbeat"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 
            7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
            19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>{" "}
        by <span className="font-semibold text-gray-100">Abhas Paul</span>
      </footer>

    </>
  )
}

export default page


export const metadata = {
  title: "ChatShot – Your Smart AI Conversation Companion",
  description: "ChatShot is a powerful, real-time AI chatbot designed to assist, engage, and converse like a human. Whether you're looking for quick answers, thoughtful conversations, or task automation, ChatSphere is always ready. Built with cutting-edge natural language understanding, it adapts to your needs—making every interaction smoother, smarter, and more personal.",
};