import app from './base';

//receiver message
export const ReceiverMessages = async(msgValue,currentUserId,guestUserId) => {
    try {
        return await app.database()
        .ref(`messages/${guestUserId}`)
        .child(currentUserId)
        .push({
            message: {
                sender: currentUserId,
                receiver: guestUserId,
                msg: msgValue
            }
        })
    }
    catch(error) {
       console.log(error)
    }
}