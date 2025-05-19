'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Settings, Download, Trash2 } from 'lucide-react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatshot-messages');
    const savedName = localStorage.getItem('chatshot-username');

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    if (savedName) {
      setUserName(savedName);
      setIsNameSet(true);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatshot-messages', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleNameSubmit = () => {
    if (nameInput.trim()) {
      const formattedName = nameInput.trim();
      setUserName(formattedName);
      setIsNameSet(true);
      localStorage.setItem('chatshot-username', formattedName);

      const welcomeMessage = {
        role: 'model',
        text: `Hello ${formattedName}! Welcome to ChatShot. I'm your AI assistant powered by Google's Gemini. How can I help you today?`,
        timestamp: Date.now()
      };
      setMessages([welcomeMessage]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: 'user',
      text: input.trim(),
      timestamp: Date.now()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    const body = {
      contents: [{ parts: [{ text: input.trim() }] }],
    };

    try {
      const res = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'I apologize, but I encountered an issue generating a response. Please try again.';

      const aiMessage = {
        role: 'model',
        text: text,
        timestamp: Date.now()
      };

      setMessages([...newMessages, aiMessage]);
    } catch (err) {
      console.error('API error:', err);
      const errorMessage = {
        role: 'model',
        text: 'I apologize, but I\'m experiencing technical difficulties. Please check your connection and try again.',
        timestamp: Date.now()
      };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('chatshot-messages');
  };

  const downloadChat = () => {
    const chatData = {
      userName,
      messages,
      exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chatshot-conversation-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetUser = () => {
    setIsNameSet(false);
    setUserName('');
    setNameInput('');
    setMessages([]);
    localStorage.removeItem('chatshot-username');
    localStorage.removeItem('chatshot-messages');
  };

  if (!isNameSet) {
    return (
      <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
        <aside className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50 pointer-events-none" aria-hidden="true" />
        <aside className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-white/3 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <aside className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-white/2 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <section className="relative bg-gradient-to-br from-black/80 via-gray-900/90 to-black/80 backdrop-blur-xl rounded-3xl p-6 sm:p-12 border border-gray-700/30 shadow-2xl max-w-md w-full z-10">
          <header className="text-center mb-6 sm:mb-8">
            <figure className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </figure>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Welcome to ChatShot</h1>
            <p className="text-gray-300 text-sm sm:text-base">Your premium AI conversation experience</p>
          </header>

          <form className="space-y-5 sm:space-y-6" onSubmit={e => { e.preventDefault(); handleNameSubmit(); }} aria-label="Set your username">
            <fieldset>
              <label htmlFor="nameInput" className="block text-sm font-medium text-gray-300 mb-2 sm:mb-3">
                What should I call you?
              </label>
              <input
                id="nameInput"
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Enter your name..."
                className="w-full bg-gray-800/80 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 cursor-text"
                autoFocus
                required
              />
            </fieldset>
            <button
              type="submit"
              disabled={!nameInput.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none cursor-pointer"
              aria-disabled={!nameInput.trim()}
            >
              Start Chatting
            </button>
          </form>

          <footer className="mt-6 text-center">
            <small className="text-xs text-gray-500">
              Powered by Google Gemini AI
            </small>
          </footer>
        </section>
      </main>
    );
  }

  function renderMarkdownToHTML(input) {
    // Escape HTML special characters
    let safeInput = input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Convert code blocks (```code```)
    safeInput = safeInput.replace(/```([\s\S]*?)```/g, (_, code) => {
      return `<pre><code>${code}</code></pre>`;
    });

    // Convert inline code (`code`)
    safeInput = safeInput.replace(/`([^`]+)`/g, (_, code) => {
      return `<code>${code}</code>`;
    });

    // Convert bold (**bold**)
    safeInput = safeInput.replace(/\*\*(.*?)\*\*/g, (_, boldText) => {
      return `<strong>${boldText}</strong>`;
    });

    // Convert unordered lists (* item)
    // We look for groups of lines starting with * or -
    safeInput = safeInput.replace(
      /(?:^|\n)((?:\s*[*-]\s+.*(?:\n|$))+)/g,
      (match, listBlock) => {
        // split items
        const items = listBlock
          .trim()
          .split(/\n/)
          .map(line => line.replace(/^\s*[*-]\s+/, ''));
        const listItems = items.map(item => `<li>${item}</li>`).join('');
        return `<ul>${listItems}</ul>`;
      }
    );

    // Wrap paragraphs and convert line breaks
    safeInput = safeInput
      // Split by two or more line breaks
      .split(/\n{2,}/)
      // Ignore blocks that already start with <ul> or <pre>
      .map(p => {
        if (p.startsWith('<ul>') || p.startsWith('<pre>')) return p;
        return `<p>${p.replace(/\n/g, '<br>')}</p>`;
      })
      .join('\n');

    return safeInput;
  }

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col relative overflow-hidden" role="main">
      {/* Background Elements */}
      <aside className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50 pointer-events-none" aria-hidden="true" />
      <aside className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-white/3 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <aside className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-white/2 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <header className="relative bg-black/40 backdrop-blur-xl border-b border-gray-700/30 p-3 sm:p-4" role="banner">
        <nav className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0" aria-label="Primary navigation">
          <section className="flex items-center space-x-3 sm:space-x-4">
            <figure className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </figure>
            <article>
              <h1 className="text-lg sm:text-xl font-bold text-white leading-none">ChatShot</h1>
              <p className="text-xs sm:text-sm text-gray-400">AI Conversation Platform</p>
            </article>
          </section>

          <section className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-300">
            <span className="hidden sm:inline" aria-live="polite" aria-atomic="true">
              Welcome back, {userName}
            </span>
            <nav className="flex space-x-2" aria-label="Chat controls">
              <button
                onClick={downloadChat}
                disabled={messages.length === 0}
                className="p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                title="Download chat"
                aria-disabled={messages.length === 0}
                type="button"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                onClick={clearChat}
                disabled={messages.length === 0}
                className="p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                title="Clear chat"
                aria-disabled={messages.length === 0}
                type="button"
              >
                <Trash2 className="w-4 h-4" aria-hidden="true" />
              </button>
              <button onClick={resetUser} className="p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white transition-all duration-200 cursor-pointer" title="Change user" type="button" >
                <Settings className="w-4 h-4" aria-hidden="true" />
              </button>
            </nav>
          </section>
        </nav>
      </header>
      <section
        ref={scrollRef}
        className="flex-1 overflow-y-auto max-w-4xl w-full mx-auto p-4 sm:p-6 space-y-4 scrollbar-none bg-black/30 backdrop-blur-md rounded-b-3xl border border-gray-700/40"
        aria-live="polite"
        aria-label="Chat messages"
        role="log"
      >
        {messages.length === 0 && (
          <p className="text-center text-gray-400 italic mt-12 select-none">
            Start the conversation by typing your message below.
          </p>
        )}
        {messages.map((msg, idx) => (
          <article
            key={msg.timestamp || idx}
            className={`flex space-x-4 max-w-3xl ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            aria-label={msg.role === 'user' ? 'User message' : 'AI message'}
            role="article"
          >
            {msg.role === 'model' && (
              <figure className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="w-10 h-10 object-cover" />
              </figure>
            )}
            {msg.role === 'user' && (
              <figure className="flex-none w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-white" aria-hidden="true" />
              </figure>
            )}

            <p
              className={`px-4 py-3 rounded-2xl max-w-[70vw] whitespace-pre-wrap break-words ${msg.role === "user"
                  ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white"
                  : "bg-gradient-to-r from-purple-700 to-blue-700 text-white"
                }`}
              dangerouslySetInnerHTML={{ __html: renderMarkdownToHTML(msg.text) }}
            ></p>
          </article>
        ))}
        {isTyping && (
          <p className="text-gray-400 italic text-center select-none" aria-live="assertive">
            ChatShot is typing...
          </p>
        )}
      </section>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="bg-black/40 backdrop-blur-xl border-t border-gray-700/30 p-4 sm:p-6 max-w-4xl w-full mx-auto rounded-t-3xl flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
        aria-label="Send a message"
      >
        <label htmlFor="chatInput" className="sr-only">
          Type your message
        </label>
        <textarea
          id="chatInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={1}
          placeholder="Type your message..."
          className="flex-grow resize-none rounded-xl bg-gray-800/80 border border-gray-600/50 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
          aria-label="Type your message"
          disabled={isTyping}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <button
          type="submit"
          disabled={input.trim() === '' || isTyping}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-5 py-3 text-white font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none cursor-pointer flex items-center justify-center"
          aria-label="Send message"
          aria-disabled={input.trim() === '' || isTyping}
        >
          <Send className="w-5 h-5" aria-hidden="true" />
        </button>
      </form>
    </main>
  );
}

