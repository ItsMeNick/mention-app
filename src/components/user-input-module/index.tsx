import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from 'react';
import "./index.scss";
import SelectDropdpwnModule, { filteredMentions } from '../select-deopdown-module';
import jsonData from "../../constants/data.json";
import { CHECK_CHAR_CODE, checkAsciiValue, checkEscapeChar, checkIfNotSpecialChar } from '../../constants/generic-constants';

const UserInputModule: React.FC = () => {

  const ROWS = 5;
  const COLUMNS = 100;

  const [showSelect, setShowSelect] = useState<boolean>(false);
  const [textAreaInput, setAreaTextInput] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<filteredMentions>();

  const onInputHandler = (currChar: string) => {
    if(currChar.length === 1){
        checkAsciiValue(currChar) && setShowSelect(true);
    }
    showSelect && captureInput(currChar);
  };

  const captureInput = (currChar: string) => {
    if(checkIfNotSpecialChar(currChar) && !checkEscapeChar(currChar) && currChar !== "Shift"){
        setUserInput((userInput + currChar).trim());
    } else {
        setShowSelect(false);
        setUserInput(userInput);
    }
  };

  useEffect(() => {
    setUserInput("");  
  }, [showSelect]);

  const onChangeHandler =(e: any) =>{
    const text = e.target.value;
    setAreaTextInput(e.target.value);
    if (text.includes('@')) {
        const mentionQuery = text?.split('@')?.pop()?.toLowerCase();
        setUserInput(mentionQuery);
    }
    else{
        setShowSelect(false);
    }
    
  }

  const onSelectCallback = (selectedValue: filteredMentions) => {
    setSelectedValue(selectedValue);
    console.log(selectedValue);
  }

  return (
    <div className='main-input-container'>
        <textarea 
          className='input-text-area' 
          value={textAreaInput} 
          rows={ROWS} 
          cols={COLUMNS} 
          placeholder='Mention' 
          onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
            !checkEscapeChar(e.key) && onInputHandler(e.key);
          }}
          onChange={onChangeHandler}
        />
        { showSelect && <SelectDropdpwnModule callbackFunction = {onSelectCallback} data={jsonData.data} setShowSelect={setShowSelect} userInput={userInput} setAreaTextInput={setAreaTextInput} textAreaInput={textAreaInput} /> }
    </div>
  );
};

export default UserInputModule;