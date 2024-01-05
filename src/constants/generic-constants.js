export const CHECK_CHAR_CODE = 64 // @ character
export const BACKSPACE_KEY = 66
export const escape_char_array = [32,11,9,13,8,46,66,20]

export const checkAsciiValue = (passedCharacter) => {
    // let asciiValue
    // asciiValue = passedCharacter.charCodeAt()        
    // return asciiValue
    return passedCharacter.charCodeAt(0) === CHECK_CHAR_CODE ? true : false
}

export const checkEscapeChar = (passedCharacter) => {
    return escape_char_array.includes(passedCharacter.charCodeAt(0)) ? true : false
}

export const checkIfNotSpecialChar = (passedCharacter) => {
    let asciiValue = passedCharacter.charCodeAt(0)
    return (65 <= asciiValue <= 90 || 97 <= asciiValue <= 122 || 48 <= asciiValue <= 57) ? true : false 
}