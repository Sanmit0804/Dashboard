import React, { useState } from "react";
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from "@coreui/react";
import { RiAiGenerate } from "react-icons/ri";

const ChatDrawer = ({ samplePrompts = [] }) => {
  const [visible, setVisible] = useState(false);
  const [inputText, setInputText] = useState("");

  const handlePromptClick = (prompt) => {
    setInputText(prompt); // Set the selected prompt into the input field
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <button
        className="btn btn-outline-primary"
        onClick={() => setVisible(true)}
        style={{ padding: "7px 10px" }}
      >
        <RiAiGenerate size="20px" /> &nbsp; AI ChatBot
      </button>

      <COffcanvas
        id="offcanvasNavbar"
        placement="end"
        portal={false}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "600px" }}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>AI ChatBot</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody className="overflow-hidden">
          {/* Input Section */}
          <form className="d-flex mb-3">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Type your query here"
              value={inputText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>

          <div className="output-box w-100 p-3 mb-3 border rounded" style={{ height: '90%'}}>
            
          <div className="sample-prompts">
            <div className="prompt-buttons">
              {samplePrompts.map((prompt, index) => (
                <CButton
                  key={index}
                  className="btn btn-light me-2 mb-2"
                  onClick={() => handlePromptClick(prompt)}
                >
                  {prompt}
                </CButton>
              ))}
            </div>
          </div>

          </div>

        </COffcanvasBody>
      </COffcanvas>
    </>
  );
};

export default ChatDrawer;