// "name": "tech-doc-page-ng-version"
function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku

  if (!req.secure && req.get("x-forwarded-proto") !== "https") {
    console.log(req.get("host"));
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

const express = require("express");
const app = express();
const path = require("path");
process.env["LOCAL_PORT"] = 80;
const PORT = process.env.PORT || process.env.LOCAL_PORT;
// app.use(requireHTTPS);
app.use(express.static("dist/sbj"));



app.get("/*", function (req, res) {

  res.sendFile("index.html", { root: "dist/sbj" });
});
app.listen(PORT, function () {
  console.log(`server listening on port ${PORT}`);
});


// "@angular/flex-layout": "^14.0.0-beta.41",
  // "@angular/material": "^14.2.7",
// "@angular/cdk": "^14.2.7",
    // "@fortawesome/angular-fontawesome": "^0.11.1",
    // "@fortawesome/fontawesome-svg-core": "^6.1.1",
    // "@fortawesome/free-solid-svg-icons": "^6.1.1",
