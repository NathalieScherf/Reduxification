
export  const loadMessage = (text) =>({
        type: 'LOAD_MESSAGE',
        message: text,
        uhura:"hidden",
        error:"hidden"

})

export  const clearMessage = () =>({
        type: 'CLEAR_MESSAGE',
        message: "",
        uhura:"hidden",
        error:"hidden"

})

export const translateMessage = text =>({
        type: "TRANSLATE_MESSAGE",
        translation: text,
        uhura:"visible"
    })

export const errorInTranslation = () =>({
            type: "ERROR_MESSAGE",
            translation: "noData",
            uhura:"hidden",
            error: "visible"
        })

export const newMessage = text =>({
            type: "DISPLAY_TEXT",
            message: text,
        })
