import React from "react";

const ChatArea = () => {
  return (
    <div className="chat-area">
      <div className="chat">
        <div className="message-area">
          <div className="message left ">
            <div className="orient">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              placeat.
              <div className="details">
                <div className="user">Alex</div>
                <div className="time">7:00PM</div>
              </div>
            </div>
          </div>

          <div className="message right">
            <div className="orient">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              omnis labore iure, sequi a tempora quia adipisci placeat
              exercitationem aliquam.
              <div className="details">
                <div className="user">Alex</div>
                <div className="time">7:00PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="input-area">
          <input type="text" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
