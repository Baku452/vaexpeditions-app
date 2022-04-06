export default async function handler(req, res) {
  const { body } = req;
  const { email, token } = body;
  if (!email || !token) {
    return res.status(422).json({
      message: 'Unproccesable request',
    });
  }
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,

      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        method: 'POST',
      },
    );

    const captchaValidation = await response.json();

    if (captchaValidation.success) {
      return res.status(200).send(captchaValidation);
    }
  } catch (error) {
    return res.status(422).json({ message: 'Something went wrong' });
  }
  return res.status(404).send('Not Found');
}
