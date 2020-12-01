const fs = require('fs');
const express = require('express');

var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

const divider = process.env.DIVIDER;
const aisle_div = process.env.AISLEDIV;

const {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
} = process.env;

const serviceAccount = {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
};

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

app.get('', function (req, res) {
  const index = __dirname + '/public/static/index.html';

  res.sendFile(index);
});

app.post('/create-aisle', async function (req, res) {
  const aisle_name = req.body.name;

  const aisleRef = db.collection('kmart').doc('aisles');
  const doc = await aisleRef.get();

  const aisleLog = doc.data().log;

  async function checkExists () {
    if (aisleLog.includes(aisle_name)) {
      const unique_aisle = aisle_name + "_" + makeid(5);

      await aisleRef.set({
        log : aisleLog + unique_aisle + divider 
      });

      res.send(unique_aisle);
    }

    else {
      await aisleRef.set({
        log : aisleLog + aisle_name + divider
      });

      res.send("aisle_name");
    }
  }
});

app.post('/get-aisle', async function (req, res) {
  const aisle_name = req.body.name;

  const aisleRef = db.collection('kmart').doc('aisles');
  const doc = await aisleRef.get();

  const aisleLog = doc.data().log;

  async function checkExists () {
    if (aisleLog.includes(aisle_name)) {
      
    }
  }
});

http.listen(port, function(){
  console.log('listening on *:' + port);

  const aisleRef = db.collection('kmart').doc('aisles');

  async function fixKmart () {
    const doc = await aisleRef.get();

    if (!doc.exists) {
      const fix_data = {
        log : ""
      }

      await aisleRef.set(fix_data);
      console.log("Fixed Kmart!");
    }

    else {
      console.log("No Fix Needed.");
    }
  }

  fixKmart();
});