// import sendDataSalesforce from '@/utils/salesforceConnect';

// Validar Token
const submitData = async (token, formValues, email, postActionForm) => {
  // eslint-disable-next-line no-unused-vars
  const req = await fetch(`/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      token: token,
      email: email,
    }),
  })
    .then(respuesta => respuesta.json())
    .then(json => {
      if (
        json.success &&
        json.score > process.env.NEXT_PUBLIC_RECAPTCHA_SCORE_THRESHOLD
      ) {
        // Enviar Data a Salesforce
        // sendDataSalesforce(formValues);
        // Enviar datos a CMS
        postActionForm({ data: formValues });

        return Promise.resolve(true);
      }
      return Promise.reject(new Error('cannot send mail'));
    });
};

// Generar Token
const recaptchaVerification = (formValues, email, postActionForm) => {
  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' })
        .then(token => {
          submitData(token, formValues, email, postActionForm);
          return resolve('Resuelto');
        })
        .catch(() => {
          return reject(new Error('Error'));
        });
    });
  });
};

export default recaptchaVerification;
