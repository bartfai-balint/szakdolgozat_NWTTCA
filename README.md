#Szakdolgozat
Login
Cart
Register
Name
sanyika a hut
Email
sanyika@gmail.com
Password
••••••
Confirm Password
••••••
Address
Sanyi Sanyi
Register
Already have a user?  
Login Here
Register Failed
<!DOCTYPE html> <html lang="en"> <head> <meta charset="utf-8"> <title>Error</title> </head> <body> <pre>ValidationError: user validation failed: _id: Cast to ObjectId failed for value &quot;&quot; (type string) at path &quot;_id&quot; because of &quot;BSONError&quot;<br> &nbsp; &nbsp;at model.Document.invalidate (D:\szakdolgozat\backend\node_modules\mongoose\lib\document.js:3183:32)<br> &nbsp; &nbsp;at model.$set (D:\szakdolgozat\backend\node_modules\mongoose\lib\document.js:1454:12)<br> &nbsp; &nbsp;at model.set (D:\szakdolgozat\backend\node_modules\mongoose\lib\helpers\document\compile.js:205:19)<br> &nbsp; &nbsp;at model.idSetter (D:\szakdolgozat\backend\node_modules\mongoose\lib\helpers\schema\idGetter.js:44:12)<br> &nbsp; &nbsp;at VirtualType.applySetters (D:\szakdolgozat\backend\node_modules\mongoose\lib\virtualtype.js:166:16)<br> &nbsp; &nbsp;at model.$set (D:\szakdolgozat\backend\node_modules\mongoose\lib\document.js:1272:12)<br> &nbsp; &nbsp;at model.$set (D:\szakdolgozat\backend\node_modules\mongoose\lib\document.js:1114:16)<br> &nbsp; &nbsp;at model.Document (D:\szakdolgozat\backend\node_modules\mongoose\lib\document.js:165:12)<br> &nbsp; &nbsp;at model.Model (D:\szakdolgozat\backend\node_modules\mongoose\lib\model.js:123:12)<br> &nbsp; &nbsp;at new model (D:\szakdolgozat\backend\node_modules\mongoose\lib\model.js:4705:15)</pre> </body> </html>

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  // ... other fields
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: mongoose.Types.ObjectId() // Generate an ObjectId
  }
});

const Model = mongoose.model('Model', schema);

const document = new Model({
  // ... other field values
});

document.save((err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Document saved successfully');
});
