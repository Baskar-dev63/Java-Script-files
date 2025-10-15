// Error Handling:

"use strict";  
function errorCatch() {
    try {
       throw new Error("this is custom error message");
    }
    catch (err) {
        console.error(err.stack);
    }
    finally{
        console.log("finally");
    }

}

errorCatch();
