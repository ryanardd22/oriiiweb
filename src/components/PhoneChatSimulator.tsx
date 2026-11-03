import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowLeft, MoreVertical, Phone, Video, CheckCheck, Sparkles, ShoppingBag, Clock } from 'lucide-react';
import { ChatMessage } from '../types';
import { generateBotResponse } from '../utils/chatbotEngine';
import { INITIAL_WHATSAPP_MESSAGES } from '../data/mockupData';

interface PhoneChatSimulatorProps {
  onClose?: () => void;
  isModal?: boolean;
  initialInquiry?: string;
}

export const PhoneChatSimulator: React.FC<PhoneChatSimulatorProps> = ({
  onClose,
  isModal = false,
  initialInquiry = '',
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_WHATSAPP_MESSAGES);
  const [inputText, setInputText] = useState(initialInquiry);
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState<'id' | 'en'>('id');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialInquiry) {
      setInputText(initialInquiry);
    }
  }, [initialInquiry]);

  // Play subtle sound using Web Audio API
  const playChime = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1); // A5
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch {
      // Audio not permitted without interaction
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Simulate AI response delay
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = generateBotResponse(text, language);
      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
      playChime();
    }, 700);
  };

  const resetChat = () => {
    setMessages(INITIAL_WHATSAPP_MESSAGES);
  };

  return (
    <div className={`flex flex-col bg-[#f5f5f5] text-black overflow-hidden font-sans shadow-2xl ${isModal ? 'w-full max-w-sm h-[680px] rounded-[36px] border-[8px] border-black dark:border-neutral-800' : 'w-full h-full rounded-2xl'}`}>
      {/* Phone Notch / Status Bar */}
      <div className="bg-black text-white px-5 pt-3 pb-1 flex justify-between items-center text-xs tracking-tight">
        <span className="font-semibold text-[11px]">10:50</span>
        <div className="w-16 h-4 bg-neutral-800 rounded-full mx-auto" />
        <div className="flex items-center gap-1.5 text-[10px] text-neutral-400">
          <span>5G</span>
          <span>98%</span>
        </div>
      </div>

      {/* Modern WhatsApp Header in Black & White */}
      <div className="bg-black text-white px-3 py-2 flex items-center justify-between border-b border-neutral-800">
        <div className="flex items-center gap-2">
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 hover:bg-neutral-800 rounded-full transition-colors text-white"
              aria-label="Kembali"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-white text-black border border-neutral-300 flex items-center justify-center font-bold text-sm shadow-inner">
              ☕
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-white border-2 border-black rounded-full" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1">
              <h2 className="font-semibold text-sm text-white">The Daily Bean Cafe</h2>
              <span className="text-[10px] bg-white/20 px-1 rounded text-white font-mono">Verified</span>
            </div>
            <p className="text-[11px] text-neutral-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-white" /> Origins AI Bot • Online
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-white">
          <button
            onClick={() => setLanguage(l => (l === 'id' ? 'en' : 'id'))}
            className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-neutral-800 rounded border border-neutral-700 hover:bg-neutral-700 transition-colors"
            title="Ganti Bahasa (ID / EN)"
          >
            {language.toUpperCase()}
          </button>
          <Video className="w-4 h-4 opacity-80" />
          <Phone className="w-4 h-4 opacity-80" />
          <MoreVertical className="w-4 h-4 opacity-80" />
        </div>
      </div>

      {/* WhatsApp Chat Body with subtle monochrome wallpaper pattern */}
      <div
        className="flex-1 overflow-y-auto p-3 space-y-3 relative"
        style={{
          backgroundImage:
            'radial-gradient(#d4d4d4 1px, transparent 1px), radial-gradient(#d4d4d4 1px, #f5f5f5 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
      >
        {messages.map(msg => {
          if (msg.sender === 'system') {
            return (
              <div key={msg.id} className="flex justify-center my-1">
                <span className="bg-neutral-200 text-neutral-800 text-[10px] px-3 py-1 rounded-lg text-center shadow-xs max-w-[85%] border border-neutral-300">
                  🔒 {msg.text}
                </span>
              </div>
            );
          }

          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[88%] ${isUser ? 'ml-auto' : 'mr-auto'}`}
            >
              <div
                className={`p-3 rounded-2xl shadow-xs text-xs sm:text-[13px] leading-relaxed relative ${
                  isUser
                    ? 'bg-black text-white rounded-tr-none'
                    : 'bg-white text-black rounded-tl-none border border-neutral-200'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* Render Order calculation if present */}
                {msg.orderData && (
                  <div className="mt-2.5 pt-2 border-t border-neutral-200 bg-neutral-50 -mx-1 p-2 rounded-lg text-black">
                    <div className="flex items-center justify-between font-semibold text-black text-[11px] mb-1">
                      <span className="flex items-center gap-1">
                        <ShoppingBag className="w-3.5 h-3.5 text-black" /> Ringkasan Tagihan
                      </span>
                      <span className="text-black font-mono font-bold">PAID/DRAFT</span>
                    </div>
                    <div className="space-y-0.5 text-[11px] text-neutral-600">
                      {msg.orderData.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span>
                            {item.quantity}x {item.name}
                          </span>
                          <span className="font-mono">£{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="border-t border-neutral-200 pt-1 flex justify-between font-medium text-black">
                        <span>Subtotal</span>
                        <span className="font-mono">£{msg.orderData.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-neutral-500">
                        <span>PPN (10%)</span>
                        <span className="font-mono">£{msg.orderData.tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-xs font-bold text-black pt-0.5 border-t border-neutral-200">
                        <span>Total Pembayaran</span>
                        <span className="font-mono text-black">£{msg.orderData.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className={`flex items-center justify-end gap-1 mt-1 text-[9px] ${isUser ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  <span>{msg.time}</span>
                  {isUser && <CheckCheck className="w-3.5 h-3.5 text-neutral-300" />}
                </div>
              </div>

              {/* Bot Quick Reply Buttons */}
              {!isUser && msg.quickReplies && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {msg.quickReplies.map((reply, rIdx) => (
                    <button
                      key={rIdx}
                      onClick={() => handleSendMessage(reply)}
                      className="px-2.5 py-1 text-[11px] bg-white hover:bg-black hover:text-white text-black border border-neutral-400 rounded-full shadow-2xs font-medium transition-all active:scale-95"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-2xl rounded-tl-none w-20 shadow-xs border border-neutral-200">
            <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full animate-bounce" />
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Suggested Quick Triggers Bar */}
      <div className="bg-neutral-100 px-2 py-1.5 border-t border-neutral-200 flex items-center gap-1.5 overflow-x-auto text-[11px]">
        <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold shrink-0 pl-1">
          Pilihan:
        </span>
        <button
          onClick={() => handleSendMessage(language === 'id' ? 'Lihat Rekomendasi Menu' : 'See Popular Menu')}
          className="whitespace-nowrap px-2 py-0.5 bg-white border border-neutral-300 rounded-full text-black hover:border-black transition-colors"
        >
          🍴 Menu
        </button>
        <button
          onClick={() => handleSendMessage(language === 'id' ? 'Pesan Avocado & Poached Egg Toast' : 'Order Avocado Toast')}
          className="whitespace-nowrap px-2 py-0.5 bg-white border border-neutral-300 rounded-full text-black hover:border-black transition-colors"
        >
          🥑 Pesan Toast
        </button>
        <button
          onClick={() => handleSendMessage(language === 'id' ? 'Jam Buka & Alamat' : 'Hours & Location')}
          className="whitespace-nowrap px-2 py-0.5 bg-white border border-neutral-300 rounded-full text-black hover:border-black transition-colors"
        >
          <Clock className="w-3 h-3 inline mr-0.5" /> Jam Buka
        </button>
        <button
          onClick={resetChat}
          className="whitespace-nowrap px-2 py-0.5 text-neutral-500 hover:text-black transition-colors ml-auto text-[10px]"
          title="Reset Percakapan"
        >
          Reset
        </button>
      </div>

      {/* Input bar */}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="bg-neutral-100 p-2 flex items-center gap-2 border-t border-neutral-200"
      >
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder={language === 'id' ? 'Ketik pesan / pertanyaan menu...' : 'Type a message or menu query...'}
          className="flex-1 bg-white border border-neutral-300 rounded-full px-3.5 py-1.5 text-xs text-black placeholder-neutral-400 focus:outline-hidden focus:border-black transition-colors"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="w-8 h-8 rounded-full bg-black hover:bg-neutral-800 disabled:opacity-30 text-white flex items-center justify-center transition-colors shrink-0"
          aria-label="Kirim Pesan"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
