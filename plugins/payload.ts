// https://plugins.com/docs/api/payloaduration/plugins-config
export default definePayloadPlugin(() => {
    //Identifies an Awesome framework
    //And then gets the data (server side)
    definePayloadReducer ('AwesomeFramework', data => {
        if (data instanceof AwesomeFramework) {
            return {
             name: data.name
             }
        }
    })
    //'Revive' the payload 
    //Take the data -> create new class instance
    definePayloadReviver ('AwesomeFramework', (data) => {
        return new AwesomeFramework (data.name)
    } )
})
