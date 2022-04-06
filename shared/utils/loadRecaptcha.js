/* eslint-disable no-console */
const loadRecaptchaURL = (id, url, callback) => {
  const isScriptExist = document.getElementById(id);

  if (!isScriptExist) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.id = id;
    // eslint-disable-next-line func-names
    script.onload = function () {
      if (callback) callback();
    };
    document.body.appendChild(script);
  }
  if (isScriptExist && callback) callback();
};

export { loadRecaptchaURL };
