import React from 'react'
import "./index.scss";

export interface filteredMentions {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        gender: string;
}

const SelectDropdpwnModule = (props: { callbackFunction: any ; data: filteredMentions[]; setShowSelect: (arg: boolean) => void; userInput: string; setAreaTextInput: (arg0: any) => void; textAreaInput: string; }) => {
  return (
    <div  className="dropdown-content">
        {
            props.data.filter((item: filteredMentions)  => item.first_name.toLowerCase().includes(props.userInput)).map((option) => {
                return(
                    <div  onClick={() => {
                        props.setAreaTextInput(props.textAreaInput.replace("@"+props.userInput, "@"+option.first_name+" "+option.last_name))
                        props.setShowSelect(false)
                        props.callbackFunction(option)
                        }}>
                            
                        <span>{option.first_name} {option.last_name}</span>
                    </div>
                )
            })
        }
    </div>
  )
}



export default SelectDropdpwnModule