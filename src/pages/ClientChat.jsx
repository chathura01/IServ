import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Paperclip, Image as ImageIcon, Send, MoreVertical, Tag, Plus } from 'lucide-react';
import './Chat.css';

const ClientChat = () => {
  const [showAttachments, setShowAttachments] = useState(false);

  return (
    <div className="container client-chat-page">
       <div className="card client-chat-shell">
          <aside className="client-chat-sidebar">
             <div className="client-chat-sidebar-head">
               <h3>Inbox</h3>
               <div className="input-with-icon w-100">
                  <Search size={16} className="input-icon" />
                  <input type="text" className="form-control" placeholder="Search chats..." />
               </div>
             </div>

             <div className="client-chat-list">
                <div className="client-chat-list-item is-active">
                   <img src="https://i.pravatar.cc/150?img=26" alt="Provider" className="client-chat-avatar" />
                   <div className="client-chat-preview">
                      <div className="client-chat-preview-top">
                         <h4>Saman Kumara</h4>
                         <span>12:30 PM</span>
                      </div>
                      <div className="client-chat-ad-tag">
                         <Tag size={11} />
                         Professional Bathroom Plumbing
                      </div>
                      <p>I can come over tomorrow morning.</p>
                   </div>
                   <span className="client-chat-unread">1</span>
                </div>
             </div>
          </aside>

          <main className="client-chat-main">
             <header className="client-chat-header">
                <div className="client-chat-header-user">
                   <img src="https://i.pravatar.cc/150?img=26" alt="Provider" className="client-chat-avatar-sm" />
                   <div>
                      <Link to="/provider/1">
                         <h3>Saman Kumara</h3>
                      </Link>
                      <p><span className="status-dot" /> Active Now</p>
                   </div>
                </div>
                <button type="button" className="icon-btn" aria-label="More options"><MoreVertical size={20}/></button>
             </header>

             {/* Ad Context Banner */}
             <div className="client-chat-ad-context">
                <img
                   src="https://picsum.photos/80/80?random=51"
                   alt="Ad thumbnail"
                   className="client-chat-ad-thumb"
                />
                <div className="client-chat-ad-info">
                   <span className="client-chat-ad-label">Regarding Ad</span>
                   <strong>Professional Bathroom Plumbing & Repairs</strong>
                   <Link to="/service/1" className="client-chat-ad-link">View Ad Details →</Link>
                </div>
             </div>

             <div className="client-chat-messages">
                <div className="client-bubble outgoing">
                   <p>Hello Saman, the bathroom sink is leaking. Are you available today?</p>
                   <span>12:25 PM</span>
                </div>
                <div className="client-bubble incoming">
                   <p>Hi! I am booked for today, but I can come over tomorrow morning around 9 AM.</p>
                   <span>12:30 PM</span>
                </div>
             </div>

             <footer className="client-chat-footer">
               <div style={{ position: 'relative', flexShrink: 0 }}>
                  <button
                    type="button"
                    className="client-chat-plus-btn"
                    aria-label="Attachments"
                    onClick={() => setShowAttachments(prev => !prev)}
                    style={{ transform: showAttachments ? 'rotate(45deg)' : 'none' }}
                  >
                    <Plus size={20} />
                  </button>
                  {showAttachments && (
                    <div className="client-chat-attach-popup">
                      <button type="button" className="client-chat-attach-item">
                        <Paperclip size={18} /> Document
                      </button>
                      <button type="button" className="client-chat-attach-item">
                        <ImageIcon size={18} /> Gallery
                      </button>
                    </div>
                  )}
               </div>
               <input type="text" className="chat-input" placeholder="Type a message..." />
               <button type="button" className="client-chat-send" aria-label="Send message"><Send size={18}/></button>
             </footer>
          </main>
       </div>
    </div>
  );
};
export default ClientChat;
