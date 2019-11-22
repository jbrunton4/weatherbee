const here;
const isMobile;

function Init() {
  here = window.location.href;
  isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
  if (isMobile) {
    // redirect to mobile site
  }
}

function SocialFacebook() {
  // Link to official facebook page
}

function SocialTwitter() {
  // Link to official instagram page
}

function SocialTwitter() {
  // Link to official twitter page
}

function Redir(subfolder) {
  window.location.href += $"/{subfolder}";
}
