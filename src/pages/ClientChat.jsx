import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Paperclip, Image as ImageIcon, Send, MoreVertical } from 'lucide-react';

const ClientChat = () => {
  return (
    <div className="container" style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
       <div className="card" style={{display: 'flex', height: 'calc(100vh - 14rem)', minHeight: '600px', overflow: 'hidden', padding: 0}}>
          {/* Chat Sidebar */}
          <aside style={{width: '320px', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--med-gray)', background: 'var(--white)'}}>
             <div style={{padding: '1.5rem 1.5rem', borderBottom: '1px solid var(--med-gray)'}}>
               <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)'}}>Inbox</h3>
               <div className="input-with-icon" style={{width: '100%'}}>
                  <Search size={16} className="input-icon" />
                  <input type="text" placeholder="Search chats..." style={{width: '100%', padding: '0.625rem 1rem 0.625rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)'}}/>
               </div>
             </div>
             
             <div style={{overflowY: 'auto', flex: 1}}>
                <div style={{display: 'flex', gap: '0.75rem', padding: '1rem 1.5rem', borderBottom: '1px solid var(--med-gray)', cursor: 'pointer', background: 'var(--primary-light)'}}>
                   <img src={`https://i.pravatar.cc/150?img=26`} alt="Provider" style={{width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover'}}/>
                   <div style={{flex: 1, overflow: 'hidden'}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem'}}>
                         <h4 style={{fontSize: '0.9rem', fontWeight: 600, margin: 0, color: 'var(--text-main)'}}>Saman Kumara</h4>
                         <span style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>12:30 PM</span>
                      </div>
                      <p style={{fontSize: '0.875rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0}}>
                         I can come over tomorrow morning.
                      </p>
                   </div>
                   <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-color)', color: 'white', fontSize: '0.75rem', fontWeight: 600, width: '20px', height: '20px', borderRadius: '50%', alignSelf: 'center'}}>1</span>
                </div>
             </div>
          </aside>

          {/* Chat Main Area */}
          <main style={{flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--white)'}}>
             <header style={{padding: '1rem 1.5rem', borderBottom: '1px solid var(--med-gray)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                   <img src="https://i.pravatar.cc/150?img=26" alt="Provider" style={{width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover'}} />
                   <div>
                      <Link to="/provider/1" style={{textDecoration: 'none'}}>
                         <h3 style={{fontSize: '1rem', margin: 0, color: 'var(--text-main)'}}>Saman Kumara</h3>
                      </Link>
                      <p style={{fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', margin: 0}}>
                         <span style={{width: 8, height: 8, borderRadius: '50%', background: 'var(--success-green)'}}></span> Active Now
                      </p>
                   </div>
                </div>
                <div>
                   <button style={{background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem'}}><MoreVertical size={20}/></button>
                </div>
             </header>

             <div style={{flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div style={{display: 'flex', alignSelf: 'flex-end', maxWidth: '70%'}}>
                   <div style={{background: 'var(--primary-color)', color: 'white', padding: '0.75rem 1rem', borderRadius: 'var(--radius-lg)', borderTopRightRadius: 0}}>
                      <p style={{margin: 0, fontSize: '0.95rem', lineHeight: 1.5}}>Hello Saman, the bathroom sink is leaking. Are you available today?</p>
                      <span style={{display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.35rem', textAlign: 'right'}}>12:25 PM</span>
                   </div>
                </div>
                <div style={{display: 'flex', alignSelf: 'flex-start', maxWidth: '70%'}}>
                   <div style={{background: 'var(--light-gray)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-lg)', borderTopLeftRadius: 0}}>
                      <p style={{margin: 0, fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.5}}>Hi! I am booked for today, but I can come over tomorrow morning around 9 AM.</p>
                      <span style={{display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem', textAlign: 'right'}}>12:30 PM</span>
                   </div>
                </div>
             </div>

             <footer style={{padding: '1rem 1.5rem', borderTop: '1px solid var(--med-gray)', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--white)'}}>
               <div style={{display: 'flex', gap: '0.25rem'}}>
                  <button style={{background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%'}}><Paperclip size={20}/></button>
                  <button style={{background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%'}}><ImageIcon size={20}/></button>
               </div>
               <div style={{flex: 1}}>
                  <input type="text" placeholder="Type a message..." style={{width: '100%', padding: '0.85rem 1.25rem', borderRadius: '2rem', border: '1px solid var(--med-gray)', outline: 'none', fontFamily: 'inherit', fontSize: '0.9rem'}} />
               </div>
               <button style={{background: 'var(--primary-color)', color: 'white', border: 'none', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-sm)'}}><Send size={18}/></button>
             </footer>
          </main>
       </div>
    </div>
  );
};
export default ClientChat;
