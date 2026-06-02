import React from 'react';
import { Search, MoreVertical, Paperclip, Image as ImageIcon, Send, User } from 'lucide-react';
import './Chat.css';

const Chat = () => {
  return (
    <div className="chat-layout container" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
       <div className="chat-container card" style={{display: 'flex', height: 'calc(100vh - 12rem)', overflow: 'hidden', padding: 0}}>
          {/* Chat Sidebar */}
          <aside className="chat-sidebar border-right" style={{width: '320px', display: 'flex', flexDirection: 'column'}}>
             <div className="chat-search" style={{padding: '1rem', borderBottom: '1px solid var(--med-gray)'}}>
               <div className="input-with-icon" style={{width: '100%'}}>
                  <Search size={16} className="input-icon" />
                  <input type="text" placeholder="Search chats..." style={{width: '100%', padding: '0.625rem 1rem 0.625rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)'}}/>
               </div>
             </div>
             
             <div className="chat-list" style={{overflowY: 'auto', flex: 1}}>
                {[1,2,3,4].map(c => (
                  <div key={c} className={`chat-list-item ${c === 1 ? 'active' : ''}`} style={{display: 'flex', gap: '0.75rem', padding: '1rem', borderBottom: '1px solid var(--light-gray)', cursor: 'pointer', background: c === 1 ? 'var(--primary-light)' : 'transparent'}}>
                     <img src={`https://i.pravatar.cc/150?img=${c+25}`} alt="User" style={{width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover'}}/>
                     <div className="chat-item-info" style={{flex: 1, overflow: 'hidden'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem'}}>
                           <h4 style={{fontSize: '0.875rem', fontWeight: 600, margin: 0}}>{c === 1 ? 'Saman Kumara' : 'Nimal Perera'}</h4>
                           <span style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>{c === 1 ? '12:30 PM' : 'Yesterday'}</span>
                        </div>
                        <p style={{fontSize: '0.875rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0}}>
                           {c === 1 ? 'Are you available tomorrow for...' : 'Thanks for your service!'}
                        </p>
                     </div>
                     {c === 1 && <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-color)', color: 'white', fontSize: '0.75rem', fontWeight: 600, width: '20px', height: '20px', borderRadius: '50%', alignSelf: 'center'}}>2</span>}
                  </div>
                ))}
             </div>
          </aside>

          {/* Chat Main Area */}
          <main className="chat-main" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
             <header className="chat-header" style={{padding: '1rem 1.5rem', borderBottom: '1px solid var(--med-gray)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                   <img src="https://i.pravatar.cc/150?img=26" alt="User" style={{width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover'}} />
                   <div>
                      <h3 style={{fontSize: '1rem', margin: 0}}>Saman Kumara</h3>
                      <p style={{fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', margin: 0}}>
                         <span style={{width: 8, height: 8, borderRadius: '50%', background: 'var(--success-green)'}}></span> Online
                      </p>
                   </div>
                </div>
                <div className="chat-actions">
                   <button style={{background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem'}}><MoreVertical size={20}/></button>
                </div>
             </header>

             {/* Service Link Context */}
             <div className="chat-service-context" style={{padding: '1rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid var(--med-gray)'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                   <img src="https://picsum.photos/300/200?random=50" alt="Service" style={{width: 48, height: 48, borderRadius: 'var(--radius-sm)', objectFit: 'cover'}} />
                   <div>
                      <p style={{fontSize: '0.875rem', fontWeight: 500, margin: 0, color: 'var(--text-main)', marginBottom: '0.25rem'}}>Regarding: Professional Bathroom Plumbing</p>
                      <a href="#" style={{color: 'var(--primary-color)', fontSize: '0.875rem', textDecoration: 'none'}}>View Service Details</a>
                   </div>
                </div>
             </div>

             <div className="chat-messages" style={{flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div className="message incoming" style={{display: 'flex', alignSelf: 'flex-start', maxWidth: '70%'}}>
                   <div style={{background: 'var(--light-gray)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-lg)', borderTopLeftRadius: 0}}>
                      <p style={{margin: 0, fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5}}>Hello! I noticed you need some plumbing work done.</p>
                      <span style={{display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem', textAlign: 'right'}}>12:20 PM</span>
                   </div>
                </div>
                <div className="message outgoing" style={{display: 'flex', alignSelf: 'flex-end', maxWidth: '70%'}}>
                   <div style={{background: 'var(--primary-color)', color: 'white', padding: '0.75rem 1rem', borderRadius: 'var(--radius-lg)', borderTopRightRadius: 0}}>
                      <p style={{margin: 0, fontSize: '0.9rem', lineHeight: 1.5}}>Yes, I have a leak in my bathroom sink that needs immediate attention.</p>
                      <span style={{display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem', textAlign: 'right'}}>12:25 PM</span>
                   </div>
                </div>
                <div className="message incoming" style={{display: 'flex', alignSelf: 'flex-start', maxWidth: '70%'}}>
                   <div style={{background: 'var(--light-gray)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-lg)', borderTopLeftRadius: 0}}>
                      <p style={{margin: 0, fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5}}>I can help with that. Are you available tomorrow morning for an inspection?</p>
                      <span style={{display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem', textAlign: 'right'}}>12:30 PM</span>
                   </div>
                </div>
             </div>

             <footer style={{padding: '1rem 1.5rem', borderTop: '1px solid var(--med-gray)', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--white)'}}>
               <div style={{display: 'flex', gap: '0.25rem'}}>
                  <button style={{background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%'}}><Paperclip size={20}/></button>
                  <button style={{background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%'}}><ImageIcon size={20}/></button>
               </div>
               <div style={{flex: 1}}>
                  <input type="text" placeholder="Type a message... (Use @ to mention)" style={{width: '100%', padding: '0.75rem 1rem', borderRadius: '2rem', border: '1px solid var(--med-gray)', outline: 'none', fontFamily: 'inherit', fontSize: '0.9rem'}} />
               </div>
               <button style={{background: 'var(--primary-color)', color: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}><Send size={18}/></button>
             </footer>
          </main>
       </div>
    </div>
  );
};
export default Chat;
